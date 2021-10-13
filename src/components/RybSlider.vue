<template>
  <div class="ryb-slider">
    <Slider
      :width="size.width"
      :height="size.height"
      :stopOnHover="true"
      :touch="false"
      :indicators="false"
      :duration="5000"
      :speed="1000"
      :control-btn="false"
    >
      <SliderItem v-for="(i, index) in data" :key="index" :style="i">
      </SliderItem>
    </Slider>
  </div>
</template>

<script>
export default {
  name: 'RybSlider',
  props: ['data', 'size'],
  data() {
    return {

    }
  }
}
</script>

<style lang="less" scoped >
.ryb-slider {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
