export interface IRating {
  rate: number
  count: number
}

export interface IItem {
  id: string
  title: string
  price: number
  image: string
  category: string
  rating: IRating
}
