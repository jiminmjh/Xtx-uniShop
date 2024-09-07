<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerAPI, getHomemutliAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanle from './components/HotPanle.vue'

// 轮播图获取
const bannerList = ref<IBanner[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 推荐获取
const hotList = ref<IHot[]>([])
const getHotmutliData = async () => {
  const res = await getHomemutliAPI()
  hotList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
  getHotmutliData()
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />

  <scroll-view scroll-y class="scroll-view">
    <!-- 轮播图 -->
    <XtxSwiper :list="bannerList" />
    <!-- 分类面板 -->
    <CategoryPanel />
    <!-- 热门推荐 -->
    <HotPanle :list="hotList" />
    <!-- 猜你喜欢 -->
    <XtxGuess />
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7 !important;
  height: 100%;
  display: flex;
  flex-direction: column;
  .scroll-view {
    flex: 1;
  }
}
</style>
