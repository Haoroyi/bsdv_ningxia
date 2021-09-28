<template>
  <div id="home">
    <container :size="{ width: 3480, height: 1080 }">
      <template v-slot:left>
        <!-- 使用情况 --- start --- -->
        <wrapper :size="{ width: 1100, height: 307 }">
          <template v-slot:title>
            <i class="title-icon"></i>
            <span class="title-text">使用情况</span>
          </template>
          <template v-slot:content>
            <div class="shiyongqingkuang">
              <!-- 登录情况 --- start --- -->
              <box :size="{ width: 341, height: 237 }">
                <template v-slot:title>
                  <span>登录情况</span>
                </template>
                <template v-slot:content>
                  <span>登录情况</span>
                </template>
              </box>
              <!-- 登录情况 --- start --- -->
              <!-- 功能使用 --- start --- -->
              <box :size="{ width: 341, height: 237 }">
                <template v-slot:title>
                  <span>功能使用</span>
                </template>
                <template v-slot:content>
                  <span>功能使用</span>
                </template>
              </box>
              <!-- 功能使用 --- start --- -->
              <!-- 学习热词 --- start --- -->
              <box :size="{ width: 341, height: 237 }">
                <template v-slot:title>
                  <span>学习热词</span>
                </template>
                <template v-slot:content>
                  <span>学习热词</span>
                </template>
              </box>
              <!-- 学习热词 --- start --- -->
            </div>
          </template>
        </wrapper>
        <!-- 使用情况 --- end --- -->
        <wrapper :size="{ width: 1100, height: 650 }">
          <template v-slot:title>
            <i class="title-icon"></i>
            <span class="title-text">荣誉榜</span>
          </template>
        </wrapper>
      </template>
      <template v-slot:middle>456789</template>
      <template v-slot:right>123</template>
    </container>
  </div>
</template>

<script>
// @ is an alias to /src
import Container from '../components/Container.vue'
import Wrapper from '../components/Wrapper.vue'
import Box from '../components/Box.vue'
export default {
  components: { Container, Wrapper, Box },
  // components: { Container },
  name: 'Home',
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.shiyongqingkuang {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
