import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'
import { ICartItem } from '@/types/product'

import { Price } from '../components/Price'
import {
  CardImg,
  CardInfo,
  CardItemContainer,
  IconRemove
} from '@/styles/components/cartItem'
import { useDispatch } from 'react-redux'
import { removeItem } from '@/redux/cartSlice'
import { ProductAmount } from './ProductAmount'
import { useEffect, useState } from 'react'

interface CartItemProps {
  productItem: ICartItem
}

export function CartItem({ productItem }: CartItemProps) {
  const [price, setPrice] = useState<number>(0)
  const [amount, setAmount] = useState<number>(0)
  const dispatch = useDispatch()

  useEffect(() => {
    setPrice(Number(productItem.price))
    setAmount(productItem.amount)
  }, [productItem.amount])

  return (
    <CardItemContainer>
      <IconRemove onClick={() => dispatch(removeItem(productItem.id))}>
        <AiOutlineClose />
      </IconRemove>
      <CardImg>
        <Image
          src={productItem.photo}
          alt={productItem.name}
          width={200}
          height={200}
          className={'image'}
          priority
        />
      </CardImg>

      <CardInfo>
        <h4>{productItem.name}</h4>

        <ProductAmount productId={productItem.id} amount={amount} />

        <Price price={price * amount} />
      </CardInfo>
    </CardItemContainer>
  )
}
