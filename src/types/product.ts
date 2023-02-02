export interface IProduct {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
}

export interface ICartItem extends IProduct {
  amount: number
}
