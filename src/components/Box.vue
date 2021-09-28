<template>
  <div class="box" :style="sizeObj">
    <header>
      <slot name="title"></slot>
    </header>
    <main>
      <slot name="content"></slot>
    </main>
    <div class="conner conner-1"></div>
    <div class="conner conner-2"></div>
  </div>
</template>

<script>
import { size } from '../mixins/size.js'
export default {
  name: 'Box',
  mixins: [size],
  props: ['size']
}
</script>

<style lang="less" scoped>
.box {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    position: relative;
    background-color: #06193c;
  header {
      flex: 0 0 30px;
      box-sizing: border-box;
      width: 100%;
      height: 26px;
      line-height: 26px;
      text-align: center;
      background-color: #062448;
      border: 1px solid #063354;
  }
  main {
      flex: 1;
      border: 1px solid #062f50;
      border-top: 0;
  }
  .conner {
    position: absolute;
    width: 12px;
    height: 12px;
  }
  .conner-1 {
    bottom: -1px;
    left: -1px;
    border-bottom: 2px solid #027087;
    border-left: 2px solid #027087;
  }
  .conner-2 {
    bottom: -1px;
    right: -1px;
    border-bottom: 2px solid #027087;
    border-right: 2px solid #027087;
  }
}
</style>
