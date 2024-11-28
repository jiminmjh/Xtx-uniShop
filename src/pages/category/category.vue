<template>
  <view class="main" v-if="isFinish">
    <view class="search"> <input text="text" class="search-input" placeholder="    女靴" /> </view>
    <view class="content">
      <scroll-view class="scroll-left" scroll-y>
        <view
          class="item"
          :class="{ active: item.id === active }"
          v-for="item in cateList"
          :key="item.id"
          @tap="active = item.id"
          >{{ item.name }}</view
        >
      </scroll-view>
      <scroll-view
        refresher-enabled="true"
        @scrolltolower="handleScrollLower"
        scroll-y
        class="scroll-right"
      >
        <view class="swiper">
          <XtxSwiper :list="bannerList" />
        </view>
        <view class="goods-list" v-for="e in getNowItem?.children" :key="e.id">
          <view class="item">
            <text class="item-title"> {{ e.name }} </text>
            <text class="item-all"> 全部 > </text>
          </view>

          <view class="goods-list-box">
            <view class="item-good" v-for="good in e.goods" :key="good.id">
              <view class="item-img"> <image :src="good.picture" /></view>
              <view class="dice">{{ good.name }}</view>
              <br />
              <view class="price">{{ good.price }}</view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
  <PageSkeleton v-if="!isFinish" />
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import PageSkeleton from './components/PageSkeleton.vue'
import { getCateListAPI } from '@/services/category'
import { getHomeBannerAPI } from '@/services/home'
import type { XtxGuessInstance } from '@/types/component'
import type { ICateData } from '@/types/category'
import type { IBanner } from '@/types/home'

// 全部分页数据
const cateList = ref<ICateData[]>([])

// 计算当前高亮的数据
const getNowItem = computed(() => {
  return cateList.value.find((e) => e.id === active.value)
})
const active = ref('')

// ! 获取猜你喜欢组件实例
const guessRef = ref<XtxGuessInstance>()
// 滚动触底
const handleScrollLower = () => {
  guessRef.value?.getMore()
}

const getCateList = async () => {
  const res = await getCateListAPI()
  cateList.value = res.result
  active.value = cateList.value[0]?.id
}

// 轮播图获取1
const bannerList = ref<IBanner[]>([])
const getHomeBanner = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 是否数据加载完毕
const isFinish = ref(false)

onLoad(async () => {
  await Promise.all([getCateList(), getHomeBanner()])
  isFinish.value = true
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
