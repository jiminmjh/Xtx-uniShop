import { http } from '@/utils/http'
import type { ICateData } from '@/types/category'

// 分类详情数据获取接口
export const getCateListAPI = () => {
  return http<ICateData[]>({
    method: 'GET',
    url: '/category/top',
  })
}
