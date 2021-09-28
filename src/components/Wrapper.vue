<template>
  <div class="wrapper" :style="sizeObj">
    <header class="title">
      <slot name="title"></slot>
    </header>
    <main class="content">
      <slot name="content"></slot>
    </main>
    <i class="conner conner-1"></i>
    <i class="conner conner-2"></i>
    <i class="conner conner-3"></i>
    <i class="conner conner-4"></i>
  </div>
</template>

<script>
import { size } from '../mixins/size.js'
export default {
  name: 'Wrapper',
  props: ['size'],
  mixins: [size]
  // computed: {
  //   sizeObj () {
  //     const obj = {}
  //     obj.width = this.size.width + 'px'
  //     obj.height = this.size.height + 'px'
  //     return obj
  //   }
  // }
}
</script>

<style lang="less" scoped>
.wrapper {
  box-sizing: border-box;
  position: relative;
  background-color: #051235;
  border: 1px solid #02607c;
  padding: 15px;
  padding-top: 0;
  .title {
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    line-height: 30px;
    .title-icon {
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: aliceblue;
      margin-right: 5px;
    }
    .title-text {
    }
  }
  .conner {
    position: absolute;
    width: 12px;
    height: 12px;
  }
  .conner-1 {
    top: -1px;
    left: -1px;
    border-top: 2px solid #00f5f7;
    border-left: 2px solid #00f5f7;
  }
  .conner-2 {
    top: -1px;
    right: -1px;
    border-top: 2px solid #00f5f7;
    border-right: 2px solid #00f5f7;
  }
  .conner-3 {
    bottom: -1px;
    left: -1px;
    border-bottom: 2px solid #00f5f7;
    border-left: 2px solid #00f5f7;
  }
  .conner-4 {
    bottom: -1px;
    right: -1px;
    border-bottom: 2px solid #00f5f7;
    border-right: 2px solid #00f5f7;
  }
}
</style>
