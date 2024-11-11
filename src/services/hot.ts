import { http } from '@/utils/http'
import type { IHotPage, IHotRes } from '@/types/hot'

// 热门推荐详细数据
export const getHotAPI = (url: string, data: IHotPage) => {
  return http<IHotRes>({
    method: 'GET',
    url: url,
    data,
  })
}
