<template>
  <div class="function-condition">
    <ul class="menu">
      <li
        v-for="(menu, index) in menus"
        :key="index"
        @mouseenter="menuChange(index)"
        @mouseleave="autoSelect()"
        :class="{ active: menu.type === currentType }">
        {{menu.label}}
      </li>
    </ul>
    <div class="functions-table">
      <table cellspacing="0" cellpadding="0" class="table-wrap">
        <tr>
          <th width="40px">排名</th>
          <th width="170px">功能模块</th>
          <th width="80px">访问量</th>
        </tr>
        <tr
          v-for="(item, index) in trlist"
          :key="index"
          :class="index % 2 == 1 ? '' : 'tr-bg'"
        >
          <td>{{ index + 1 }}</td>
          <td>
            {{
              item.label.indexOf("进入") != -1
                ? item.label.substring(2)
                : item.label
            }}
          </td>
          <td>{{ item.nb_events }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FunctionCondition',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      menus: [
        { type: 'today', label: '当日' },
        { type: 'currentMonth', label: '当月' },
        { type: 'currentYear', label: '本年度' }
      ],
      timer: null,
      currentIndex: 0
    }
  },
  methods: {
    menuChange(index) {
      this.currentIndex = index
      clearInterval(this.timer)
    },
    autoSelect() {
      this.timer = setInterval(() => {
        this.currentIndex++
        if (this.currentIndex > 2) this.currentIndex = 0
      }, 2000)
    }
  },
  computed: {
    currentType() {
      return this.menus[this.currentIndex].type
    },
    trlist() {
      return this.data[this.currentType]
    }
  },
  mounted() {
    this.autoSelect()
  }
}
</script>

<style lang="less" scoped>
.function-condition {
  box-sizing: border-box;
  padding: 7px 15px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .menu {
    width: 76px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 15px 0;
    li {
      width: 100%;
      height: 37px;
      border: 1px solid #082359;
      border-radius: 4px;
      text-align: center;
      line-height: 37px;
      cursor: pointer;
    }
  }
  .functions-table {
    width: 215px;
    height: 100%;
    th {
      font-size: 14px;
      font-weight: 600;
      color: #fff;
    }
    tr {
      font-size: 14px;
      text-align: center;
      height: 24px;
      line-height: 24px;
      color: #9cabbc;
    }
    .tr-bg {
      background: rgba(96, 146, 237, 0.1);
    }
  }
}
.active {
  background-color: #114fdb;
  border: 1px solid #114fdb;
}
</style>
