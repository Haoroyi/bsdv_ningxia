<template>
  <div id="container" :style="sizeObj">
    <header></header>
    <main>
      <section class="left">
        <slot name="left"></slot>
      </section>
      <section class="middle">
        <slot name="middle"></slot>
      </section>
      <section class="right">
        <slot name="right"></slot>
      </section>
    </main>
  </div>
</template>

<script>
import { size } from '../mixins/size.js'
export default {
  name: 'Container',
  mixins: [size],
  props: ['size']
}
</script>

<style lang="less" scoped>
#container {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 0;
  background-color: #060025;
  header {
    flex: 0 0 80px;
    width: 100%;
    height: 80px;
    line-height: 80px;
    background-color: chocolate;
  }
  main {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .left,
    .middle,
    .right {
      box-sizing: border-box;
      width: 1100px;
      height: 100%;
    }
    .left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}
</style>
