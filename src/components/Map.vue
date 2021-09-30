<template>
  <!-- <chart ref="chart1" :options="orgOptions" :auto-resize="true"></chart> -->
  <div id="myChart"></div>
</template>

<script>
import * as echarts from 'echarts'
import ningxiaMap from '../utils/map/ningxia.json'
const mapData = [{ name: '固原市', value: 40 }]
export default {
  name: 'Map',
  data() {
    return {
      option: {
        geo: {
          type: 'map',
          map: 'YN',
          top: 20,
          itemStyle: {
            areaColor: '#045aff',
            borderColor: '#448bf6'
          },
          emphasis: {
            itemStyle: {
              // 高亮时点的颜色。
              color: '#ffb628'
            },
            label: {
              show: true,
              // 高亮时标签的文字。
              formatter: 'This is a emphasis label.',
              color: '#fff'
            },
            tooltip: {
              show: true
            }
          }
        },
        series: [
          {
            name: '宁夏',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: mapData
          }
        ]
      }
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('myChart'))
      echarts.registerMap('YN', { geoJSON: ningxiaMap })
      // 绘制图表
      myChart.setOption(this.option)
      var index = 0 // 播放所在下标
      setInterval(function () {
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: index
        })
        index++
        if (index > mapData.length) {
          index = 0
        }
      }, 1000)
    }
  }
}
</script>

<style>
#myChart {
  width: 100%;
  height: 100%;
}
</style>
