import { useDispatch } from 'react-redux'
import { updateItemQuantity } from '@/redux/cartSlice'

import {
  ProductAmountButton,
  ProductAmountContainer
} from '@/styles/components/productAmount'
import { useEffect, useState } from 'react'

interface ProductAmountProps {
  productId: number
  amount: number
}

export function ProductAmount({ productId, amount }: ProductAmountProps) {
  const [itemAmount, setItemAmount] = useState<number>(0)
  const dispatch = useDispatch()

  useEffect(() => {
    setItemAmount(amount)
  }, [amount])

  return (
    <ProductAmountContainer>
      <ProductAmountButton
        type="button"
        active={amount <= 1}
        onClick={() => {
          if (amount > 1) {
            amount--
            setItemAmount(amount)
            dispatch(updateItemQuantity({ productId, amount }))
          }
        }}
      >
        -
      </ProductAmountButton>
      <span>{itemAmount}</span>
      <ProductAmountButton
        type="button"
        onClick={() => {
          amount++
          setItemAmount(amount)
          dispatch(updateItemQuantity({ productId, amount }))
        }}
      >
        +
      </ProductAmountButton>
    </ProductAmountContainer>
  )
}
