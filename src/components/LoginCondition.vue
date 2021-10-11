<template>
  <div class="login-condition">
    <div class="login-info">
      <section class="today">
        <div class="number">3212</div>
        <div class="desc">今日登陆人数</div>
      </section>
      <section class="month">
        <div class="number">13212</div>
        <div class="desc">当月人数</div>
      </section>
      <section class="year">
        <div class="number">123212</div>
        <div class="desc">本年度登陆人数</div>
      </section>
    </div>
    <div class="login-chart"></div>
  </div>
</template>

<script>
export default {
  name: 'LoginCondition'
}
</script>

<style lang="less" scoped>
.login-condition {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 15px;
  .login-info {
    width: 100%;
    margin-bottom: 17px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
    .number {
      text-align: center;
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 8px;
    }
  }
  .login-chart {
    width: 100%;
    height: 118px;
    background-color: aqua;
  }
}
</style>
