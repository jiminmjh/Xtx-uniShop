export interface ICateData {
  id: string
  name: string
  picture: string
  imageBanners: string[]
  children: ICateItem[]
}

interface ICateItem {
  id: string
  name: string
  picture: string
  parentId: null
  parentName: null
  goods: IItem[]
  categories: null
  brands: null
  saleProperties: null
}
