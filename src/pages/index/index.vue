<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'

const bannerList = ref<IBanner[]>([])

const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :list="bannerList" />
  <view class="index">index</view>
</template>

<style lang="scss">
//
</style>
