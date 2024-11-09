import { http } from '@/utils/http'
import type { IHotPage, IHotPageItem } from '@/types/hot'

// 热门推荐详细数据
export const getHotAPI = (url: string, data: IHotPage) => {
  return http<IList<IHotPageItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
