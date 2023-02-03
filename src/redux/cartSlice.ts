import { ICartItem, IProduct } from '@/types/product'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartState {
  items: ICartItem[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IProduct>) => {
      const productAlreadyInCart = state.items.find(
        productItem => productItem.id === action.payload.id
      )

      if (!productAlreadyInCart) {
        state.items.push({ ...action.payload, amount: 1 })
      } else {
        productAlreadyInCart.amount++
      }
    },

    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },

    updateItemQuantity: (
      state,
      action: PayloadAction<{ productId: number; amount: number }>
    ) => {
      const { productId, amount } = action.payload
      const itemIndex = state.items.findIndex(item => item.id === productId)
      state.items[itemIndex].amount = amount
    }
  }
})

export const { addItem, removeItem, updateItemQuantity } = cartSlice.actions

export default cartSlice.reducer
