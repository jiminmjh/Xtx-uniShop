export interface IHotPage extends IPage {
  // Tab 项的 id
  subType: string
}

export interface IHotRes {
  msg: string
  result: {
    title: string
    id: string
    bannerPicture: string
    subTypes: IGoodItems
  }
}

export interface IGoodItems {
  id: string
  title: string
  goodsItems: IList<IGoodItem>
}

export interface IHotPageItem extends Omit<IItem, 'discount', 'orderNum'> {}
