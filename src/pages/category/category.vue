<template>
  <div id="app">
    <div class="video-js" ref="videos" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    let video = document.createElement('video')
    video.id = 'video'
    video.style = 'width: 100%; height: 100%;'
    video.controls = true
    video.preload = 'auto'
    video.setAttribute('playsinline', true) //IOS微信浏览器支持小窗内播放
    video.setAttribute('webkit-playsinline', true) //这个bai属性是ios 10中设置可以让视频在小du窗内播放，也就是不是全zhi屏播放的video标签的一个属性
    video.setAttribute('x5-video-player-type', 'h5') //安卓 声明启用同层H5播放器 可以在video上面加东西
    let source = document.createElement('source')
    source.src = 'http://183.167.196.100:83/openUrl/nBgOnDy/live.m3u8'
    video.appendChild(source)
    // return
    this.$refs.videos.appendChild(video)
    let that = this
    let player = this.$video(
      'video',
      {
        poster: '', // 视频封面图地址
        title: '4564564',
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoDisable: true,
        preload: 'none', //auto - 当页面加载后载入整个视频 meta - 当页面加载后只载入元数据 none - 当页面加载后不载入视频
        language: 'zh-CN',
        fluid: true, // 自适应宽高
        muted: false, //  是否静音
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        controls: true, //是否拥有控制条 【默认true】,如果设为false ,那么只能通过api进行控制了。也就是说界面上不会出现任何控制按钮
        autoplay: false, //如果true,浏览器准备好时开始回放。 autoplay: "muted", // //自动播放属性,muted:静音播放
        loop: true, // 导致视频一结束就重新开始。 视频播放结束后，是否循环播放
        screenshot: true,
        controlBar: {
          volumePanel: {
            //声音样式
            inline: false, // 不使用水平方式
          },
          timeDivider: true, // 时间分割线
          durationDisplay: true, // 总时间
          progressControl: true, // 进度条
          remainingTimeDisplay: true, //当前以播放时间
          fullscreenToggle: true, //全屏按钮
          pictureInPictureToggle: true, //画中画
        },
      },
      function () {
        this.on('error', function (err) {
          //请求数据时遇到错误
          console.log('请求数据时遇到错误', err)
        })
        this.on('stalled', function (stalled) {
          //网速失速
          console.log('网速失速', stalled)
        })
      },
    )
  },
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
}
</style>
