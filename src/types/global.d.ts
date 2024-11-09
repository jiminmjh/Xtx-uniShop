/** 全局类型 */

// 通用分页结果查询
declare interface IItem {
  id: string
  name: string
  desc: string
  price: number
  picture: string
  discount: number
  orderNum: number
}

// 通用分页参数类型
declare interface IPage {
  page?: number // 页码默认1
  pageSize?: number // 页数默认10
}

//列表数据返回格式
declare interface IList<data> {
  counts: number
  pageSize: number
  pages: number
  page: number
  items: data[]
}
