<template>
  <view class="carousel">
    <swiper :circular="true" :autoplay="true" :interval="3000" @change="changeSwiper">
      <swiper-item v-for="item in list" :key="item.id">
        <navigator :url="item.hrefUrl" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in list.length"
        :key="item"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<script setup lang="ts">
const { list } = defineProps<{ list: IBanner[] }>()
const activeIndex = ref(0)

// 获取组件当前第几张，然后设置底部高亮
const changeSwiper: UniHelper.SwiperOnChange = (e) => {
  // !非空断言，主观上排出空值情况
  activeIndex.value = e.detail!.current
}
</script>

<style lang="scss">
/* 轮播图 */
.carousel {
  height: 280rpx;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #efefef;
  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16rpx;
    display: flex;
    justify-content: center;
    .dot {
      width: 30rpx;
      height: 6rpx;
      margin: 0 8rpx;
      border-radius: 6rpx;
      background-color: rgba(255, 255, 255, 0.4);
    }
    .active {
      background-color: #fff;
    }
  }
  .navigator,
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>
