<template name="skeleton">
  <view class="sk-container">
    <scroll-view scroll-y="true" class="scroll-view scroll-view" refresher-enabled="true">
      <view is="components/XtxSwiper">
        <view class="carousel XtxSwiper--carousel">
          <swiper autoplay="false" circular="true" interval="3000" current="0"></swiper>
          <view class="indicator XtxSwiper--indicator">
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
          </view>
        </view>
      </view>
      <view is="pages/index/components/CategoryPanel">
        <view class="category CategoryPanel--category">
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-468 sk-text"
              >居家</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-150 sk-text"
              >锦鲤</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-284 sk-text"
              >服饰</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-577 sk-text"
              >母婴</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-254 sk-text"
              >个护</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-377 sk-text"
              >严选</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-135 sk-text"
              >数码</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-301 sk-text"
              >运动</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-308 sk-text"
              >杂项</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-297 sk-text"
              >品牌</text
            >
          </navigator>
        </view>
      </view>
      <view is="pages/index/components/HotPanle">
        <view class="panel HotPanle--panel hot HotPanle--hot">
          <view class="item HotPanle--item">
            <view class="title HotPanle--title">
              <text
                class="title-text HotPanle--title-text sk-transparent sk-text-14-2857-205 sk-text"
                >特惠推荐</text
              >
              <text
                class="title-desc HotPanle--title-desc sk-transparent sk-text-14-2857-264 sk-text"
                >精选全攻略</text
              >
            </view>
            <navigator class="cards HotPanle--cards" hover-class="none">
              <image class="image HotPanle--image sk-image" mode="aspectFit"></image>
              <image class="image HotPanle--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item HotPanle--item">
            <view class="title HotPanle--title">
              <text
                class="title-text HotPanle--title-text sk-transparent sk-text-14-2857-441 sk-text"
                >爆款推荐</text
              >
              <text
                class="title-desc HotPanle--title-desc sk-transparent sk-text-14-2857-445 sk-text"
                >最受欢迎</text
              >
            </view>
            <navigator class="cards HotPanle--cards" hover-class="none">
              <image class="image HotPanle--image sk-image" mode="aspectFit"></image>
              <image class="image HotPanle--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item HotPanle--item">
            <view class="title HotPanle--title">
              <text
                class="title-text HotPanle--title-text sk-transparent sk-text-14-2857-687 sk-text"
                >一站买全</text
              >
              <text
                class="title-desc HotPanle--title-desc sk-transparent sk-text-14-2857-303 sk-text"
                >精心优选</text
              >
            </view>
            <navigator class="cards HotPanle--cards" hover-class="none">
              <image class="image HotPanle--image sk-image" mode="aspectFit"></image>
              <image class="image HotPanle--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item HotPanle--item">
            <view class="title HotPanle--title">
              <text
                class="title-text HotPanle--title-text sk-transparent sk-text-14-2857-822 sk-text"
                >新鲜好物</text
              >
              <text
                class="title-desc HotPanle--title-desc sk-transparent sk-text-14-2857-336 sk-text"
                >生活加分项</text
              >
            </view>
            <navigator class="cards HotPanle--cards" hover-class="none">
              <image class="image HotPanle--image sk-image" mode="aspectFit"></image>
              <image class="image HotPanle--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
        </view>
      </view>
      <view is="components/XtxGuess" class="r r">
        <view class="caption XtxGuess--caption">
          <text
            class="text XtxGuess--text sk-transparent sk-text-0-0000-767 sk-text sk-pseudo sk-pseudo-circle"
            >猜你喜欢</text
          >
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<style scoped>
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-512 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-256 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}
.sk-text-14-2857-468 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-150 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-284 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-577 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-254 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-377 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-135 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-301 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-308 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-297 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-205 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text-14-2857-264 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-441 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text-14-2857-445 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-687 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text-14-2857-303 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-822 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text-14-2857-336 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-0-0000-767 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 30.7692rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
