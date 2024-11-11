<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerAPI, getHomemutliAPI, getHomeCategoryAPI } from '@/services/home'
import type { XtxGuessInstance } from '@/types/component'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanle from './components/HotPanle.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import type { IBanner, IHot, IMutli } from '@/types/home'

// 轮播图获取1
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

// 分类获取
const categoryList = ref<IMutli[]>([])
const getCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// ! 获取猜你喜欢组件实例
const guessRef = ref<XtxGuessInstance>()
// 滚动触底
const handleScrollLower = () => {
  guessRef.value?.getMore()
}

// 下次刷新状态控制
const flag = ref(false)
// 自定义刷新触发
const handleQuery = async () => {
  flag.value = true
  //! 代码优化 - 多个请求同时发送
  await Promise.all([getHomeBannerData(), getHotmutliData(), getCategoryData()])
  // 重置猜你喜欢数据
  guessRef.value?.setReset()
  flag.value = false
}

// 是否加载
const isLoading = ref(false)

onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHotmutliData(), getCategoryData()])
  isLoading.value = false
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />

  <scroll-view
    refresher-enabled="true"
    @refresherrefresh="handleQuery"
    :refresher-triggered="flag"
    @scrolltolower="handleScrollLower"
    scroll-y
    class="scroll-view"
  >
    <!-- 骨架屏 -->
    <PageSkeleton v-if="isLoading" />
    <template v-if="!isLoading">
      <!-- 轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanle :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef"
    /></template>
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
