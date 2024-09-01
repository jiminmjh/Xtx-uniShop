import { http } from '@/utils/http'

// 首页广告区域接口
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<IBanner[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}
