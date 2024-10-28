/** 全局类型 */

// 通用分页结果类型
declare interface PageResult<T> {
  counts: number
  pageSize: number
  pages: number
  page: number
  items: T[]
}
