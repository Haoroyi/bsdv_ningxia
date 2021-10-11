<template>
  <div class="wordClound">
    <svg class="svgClound">
      <a v-for="(tag, ind) in tags" target="_blank" :key="ind">
        <text
          fill="#fff"
          :x="tag.x"
          :y="tag.y"
          :font-size="12 * (600 / (600 - tag.z))"
          :fill-opacity="tag.z < 0 ? (400 + tag.z) / 800 : (400 + tag.z) / 500"
        >
          {{ tag.text }}
        </text>
      </a>
    </svg>
  </div>
</template>

<script>
import hotWords from '../../public/data/hot-topic.json'
export default {
  name: 'StudyHotwords',
  data() {
    return {
      wordDate: [],
      ProviceWrap: {},
      width: 339,
      height: 206,
      tagsNum: 46,
      RADIUS: 180,
      speedX: Math.PI / 720,
      speedY: Math.PI / 720,
      tags: [],
      timer: null,
      parmasdata: null
    }
  },
  computed: {
    CX() {
      return this.width / 2
    },
    CY() {
      return this.height / 2
    }
  },
  mounted() {
    // 使球开始旋转
    setTimeout(() => {
      this.getWords()
      const _that = this
      window.addEventListener('resize', function () {
        clearInterval(_that.timer)
        _that.initSetInterval()
      })
    }, 2100)
  },
  methods: {
    initDate() {
      const tags = []
      for (let i = 0; i < this.wordDate.length; i++) {
        const tag = {}
        const k = -1 + (2 * (i + 1) - 1) / this.tagsNum
        const a = Math.acos(k)
        const b = a * Math.sqrt(this.tagsNum * Math.PI)
        tag.text = this.wordDate[i].name
        // tag.x =this.CX
        // tag.y =this.CY
        tag.x = this.CX + this.RADIUS * Math.sin(a) * Math.cos(b)
        tag.y = this.CY + this.RADIUS * Math.sin(a) * Math.sin(b)
        tag.z = this.RADIUS * Math.cos(a)
        tags.push(tag)
      }
      this.tags = tags
    },
    initSetInterval() {
      this.initDate()
      this.timer = setInterval(() => {
        this.rotateX(this.speedX)
        this.rotateY(this.speedY)
      }, 30)
    },
    rotateX(speedX) {
      var cos = Math.cos(speedX)
      var sin = Math.sin(speedX)
      for (const tag of this.tags) {
        var y1 = (tag.y - this.CY) * cos - tag.z * sin + this.CY
        var z1 = tag.z * cos + (tag.y - this.CY) * sin
        tag.y = y1
        tag.z = z1
      }
    },
    rotateY(speedY) {
      var cos = Math.cos(speedY)
      var sin = Math.sin(speedY)
      for (const tag of this.tags) {
        var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX
        var z1 = tag.z * cos + (tag.x - this.CX) * sin
        tag.x = x1
        tag.z = z1
      }
    },
    listener(event) {
      // 响应鼠标移动
      var x = event.clientX - this.CX
      var y = event.clientY - this.CY
      this.speedX =
        x * 0.0001 > 0
          ? Math.min(this.RADIUS * 0.00002, x * 0.0001)
          : Math.max(-this.RADIUS * 0.00002, x * 0.0001)
      this.speedY =
        y * 0.0001 > 0
          ? Math.min(this.RADIUS * 0.00002, y * 0.0001)
          : Math.max(-this.RADIUS * 0.00002, y * 0.0001)
    },
    async getWords() {
      try {
        const data = hotWords
        const wordClod = data.data
        for (let index = 0; index < wordClod.length; index++) {
          if (wordClod[index].name === '抗美援朝') {
            wordClod[index].name = '“三牛”精神'
          }
          if (wordClod[index].name === '反腐倡廉') {
            wordClod[index].name = '四个表率'
          }
          if (wordClod[index].name === '党史') {
            wordClod[index].name = '两个不平衡，两个份额、两个不足、两个成效'
          }
          if (wordClod[index].name === '四个表率') {
            wordClod[index].name = '党史学习教育'
          }
        }
        this.wordDate = wordClod
        this.initSetInterval()
      } catch (error) {}
    }
  }
}
</script>
<style lang="less" scoped>
.wordClound {
  box-sizing: border-box;
  padding: 15px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .svgClound {
    width: 100%;
    height: 100%;
  }
}
</style>
