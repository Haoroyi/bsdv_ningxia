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
        <!-- 荣誉榜 --- start --- -->
        <wrapper :size="{ width: 1100, height: 650 }">
          <template v-slot:title>
            <i class="title-icon"></i>
            <span class="title-text">荣誉榜</span>
          </template>
          <template v-slot:content>
            <div class="rongyubang-top">
              <!-- 先进基层党组织 --- start --- -->
              <box :size="{ width: 341, height: 237 }">
                <template v-slot:title>
                  <span>先进基层党组织</span>
                </template>
                <template v-slot:content>
                  <span>先进基层党组织</span>
                </template>
              </box>
              <!-- 先进基层党组织 --- end --- -->
              <!-- 优秀共产党员 --- start --- -->
              <box :size="{ width: 341, height: 237 }">
                <template v-slot:title>
                  <span>优秀共产党员</span>
                </template>
                <template v-slot:content>
                  <span>优秀共产党员</span>
                </template>
              </box>
              <!-- 优秀共产党员 --- end --- -->
              <!-- 优秀党务工作者 --- start --- -->
              <box :size="{ width: 341, height: 237 }">
                <template v-slot:title>
                  <span>优秀党务工作者</span>
                </template>
                <template v-slot:content>
                  <span>优秀党务工作者</span>
                </template>
              </box>
              <!-- 优秀党务工作者 --- end --- -->
            </div>
            <div class="rongyubang-bottom">
              <!-- 发展先锋 --- start --- -->
              <box :size="{ width: 252, height: 265 }">
                <template v-slot:title>
                  <span>发展先锋</span>
                </template>
                <template v-slot:content>
                  <span>发展先锋</span>
                </template>
              </box>
              <!-- 发展先锋 --- end --- -->
              <!-- 党员先锋 --- start --- -->
              <box :size="{ width: 252, height: 265 }">
                <template v-slot:title>
                  <span>党员先锋</span>
                </template>
                <template v-slot:content>
                  <span>党员先锋</span>
                </template>
              </box>
              <!-- 党员先锋 --- end --- -->
              <!-- 奋斗先锋 --- start --- -->
              <box :size="{ width: 252, height: 265 }">
                <template v-slot:title>
                  <span>奋斗先锋</span>
                </template>
                <template v-slot:content>
                  <span>奋斗先锋</span>
                </template>
              </box>
              <!-- 奋斗先锋 --- end --- -->
              <!-- 青年先锋 --- start --- -->
              <box :size="{ width: 252, height: 265 }">
                <template v-slot:title>
                  <span>青年先锋</span>
                </template>
                <template v-slot:content>
                  <span>青年先锋</span>
                </template>
              </box>
              <!-- 青年先锋 --- end --- -->
            </div>
          </template>
        </wrapper>
        <!-- 荣誉榜 --- end --- -->
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
  name: 'Home',
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.shiyongqingkuang, .rongyubang-top, .rongyubang-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.rongyubang-top {
  margin-bottom: 17px;
}
</style>
