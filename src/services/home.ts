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

// 首页分类区域接口
export const getHomeCategoryAPI = () => {
  return http<IMutli[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

// 首页推荐区域接口
export const getHomemutliAPI = () => {
  return http<IHot[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

// 猜你喜欢区域接口
export const getLikeAPI = (data?: IPage) => {
  return http<ILike>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
