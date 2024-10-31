declare interface IBanner {
  hrefUrl: string
  id: string
  imgUrl: string
  type: string
}

declare interface IMutli {
  name: string
  id: string
  icon: string
}

declare interface IHot {
  id: string
  alt: string
  pictures: string[]
  target: string
  title: string
  type: string
}
// 猜你喜欢
declare interface ILike {
  counts: number
  pageSize: number
  pages: number
  page: number
  items: IItem[]
}
