<template>
  <div id="home">
    <container :size="{ width: 3840, height: 1080 }">
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
                  <login-condition></login-condition>
                </template>
              </box>
              <!-- 登录情况 --- start --- -->
              <!-- 功能使用 --- start --- -->
              <box :size="{ width: 341, height: 237 }">
                <template v-slot:title>
                  <span>功能使用</span>
                </template>
                <template v-slot:content>
                  <function-condition :data="functionConditionData"></function-condition>
                </template>
              </box>
              <!-- 功能使用 --- start --- -->
              <!-- 学习热词 --- start --- -->
              <box :size="{ width: 341, height: 237 }">
                <template v-slot:title>
                  <span>学习热词</span>
                </template>
                <template v-slot:content>
                  <study-hotwords></study-hotwords>
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
      <template v-slot:middle>
        <div class="mid-left">
          <div class="mid-left-top">
            <!-- 荣誉榜 --- start --- -->
            <wrapper :size="{ width: 388, height: 480 }">
              <template v-slot:title>
                <i class="title-icon"></i>
                <span class="title-text">基础信息</span>
              </template>
            </wrapper>
            <!-- 荣誉榜 --- end --- -->
          </div>
          <div class="mid-left-bottom">
            <wrapper :size="{ width: 388, height: 480 }">
              <!-- 基础工作 --- start --- -->
              <template v-slot:title>
                <i class="title-icon"></i>
                <span class="title-text">基础工作</span>
              </template>
            </wrapper>
            <!-- 基础工作 --- end --- -->
          </div>
        </div>
        <div class="mid-center">
          <!-- 支部生活 --- stat --- -->
          <wrapper :size="{ width: 670, height: 980 }">
            <template v-slot:title>
              <i class="title-icon"></i>
              <span class="title-text">支部生活</span>
            </template>
            <template v-slot:content>
              <div class="zhibushenghuo">
                <div class="zhibushenghuo-map">
                  <Map />
                </div>
                <div class="zhibushenghuo-detail">
                  <wrapper :size="{ height: 87 }">
                    <template v-slot:content> 123 </template>
                  </wrapper>
                </div>
              </div>
            </template>
          </wrapper>
          <!-- 支部生活 --- end --- -->
        </div>
        <div class="mid-right">
          <!-- 党建和创 --- stat --- -->
          <div class="mid-left-top">
            <wrapper :size="{ width: 388, height: 480 }">
              <template v-slot:title>
                <i class="title-icon"></i>
                <span class="title-text">党建和创</span>
              </template>
            </wrapper>
          </div>
          <!-- 党建和创 --- end --- -->
          <!-- 合格行动 --- start --- -->
          <div class="mid-left-bottom">
            <wrapper :size="{ width: 388, height: 480 }">
              <template v-slot:title>
                <i class="title-icon"></i>
                <span class="title-text">合格行动</span>
              </template>
            </wrapper>
          </div>
          <!-- 合格行动 --- end --- -->
        </div>
      </template>
      <template v-slot:right>
        <!-- 党史学习 --- start --- -->
        <wrapper :size="{ width: 1100, height: 310 }">
          <template v-slot:title>
            <i class="title-icon"></i>
            <span class="title-text">党史学习</span>
          </template>
        </wrapper>
        <!-- 党史学习 --- end --- -->
        <div class="right-center">
          <!-- 党建专题活动 --- start --- -->
          <wrapper :size="{ width: 537, height: 313 }">
            <template v-slot:title>
              <i class="title-icon"></i>
              <span class="title-text">党建专题活动</span>
            </template>
          </wrapper>
          <!-- 党建专题活动 --- end --- -->
          <!-- 推荐课程 --- start --- -->
          <wrapper :size="{ width: 537, height: 313 }">
            <template v-slot:title>
              <i class="title-icon"></i>
              <span class="title-text">推荐课程</span>
            </template>
          </wrapper>
          <!-- 推荐课程 --- end --- -->
        </div>
        <div class="right-bottom">
          <!-- 党支部品牌创建 --- start --- -->
          <wrapper :size="{ width: 755, height: 325 }">
            <template v-slot:title>
              <i class="title-icon"></i>
              <span class="title-text">党支部品牌创建</span>
            </template>
          </wrapper>
          <!-- 党支部品牌创建 --- end --- -->
          <!-- 党建功能模块列表 --- start --- -->
          <wrapper :size="{ width: 320, height: 325 }">
            <template v-slot:title>
              <i class="title-icon"></i>
              <span class="title-text">党建功能模块列表</span>
            </template>
          </wrapper>
          <!-- 党建功能模块列表 --- end --- -->
        </div>
      </template>
    </container>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import Container from '../components/Container.vue'
import Wrapper from '../components/Wrapper.vue'
import Box from '../components/Box.vue'
import LoginCondition from '../components/LoginCondition.vue'
import FunctionCondition from '../components/FunctionCondition.vue'
import StudyHotwords from '../components/StudyHotwords.vue'
import Map from '../components/Map.vue'
export default {
  components: {
    Container,
    Wrapper,
    Box,
    LoginCondition,
    FunctionCondition,
    StudyHotwords,
    Map
  },
  name: 'Home',
  data() {
    return {
      functionConditionData: {} // 功能似乎用的数据
    }
  },
  methods: {
    getData() {
      axios.get('/data/current.json').then((response) => {
        this.functionConditionData = response.data.data
        console.log(this.functionConditionData)
      })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
<style lang="less" scoped>
.shiyongqingkuang,
.rongyubang-top,
.rongyubang-bottom,
.right-center,
.right-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.rongyubang-top {
  margin-bottom: 17px;
}
.mid-left,
.mid-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.mid-center {
  margin: 0 20px;
}
.zhibushenghuo {
  display: flex;
  flex-direction: column;
  height: 900px;
  .zhibushenghuo-map {
    flex: 1;
  }
  .zhibushenghuo-details {
    flex: 0 0 87px;
    height: 87px;
  }
}
</style>
