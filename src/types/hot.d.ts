export interface IHotPage extends IPage {
  // Tab 项的 id
  subType?: string
}

export interface IHotRes {
  title: string
  id: string
  bannerPicture: string
  subTypes: IGoodItems[]
}

export interface IGoodItems {
  id: string
  title: string
  goodsItems: IList<IHotPageItem>
}

export interface IHotPageItem extends Omit<IItem, 'discount' | 'orderNum'> {}
