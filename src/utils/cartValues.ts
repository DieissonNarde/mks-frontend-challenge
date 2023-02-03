import { ICartItem } from '../types/product'

export function calculateTotalItems(cart: ICartItem[]) {
  return cart.reduce((acc, item) => acc + item.amount, 0)
}

export function calculateTotal(cart: ICartItem[]) {
  return cart.reduce((acc, item) => acc + Number(item.price) * item.amount, 0)
}
