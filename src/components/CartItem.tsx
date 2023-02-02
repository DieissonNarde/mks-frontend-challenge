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

interface CartItemProps {
  productItem: ICartItem
}

export function CartItem({ productItem }: CartItemProps) {
  return (
    <CardItemContainer>
      <IconRemove>
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

        <Price price={Number(productItem.price)} />
      </CardInfo>
    </CardItemContainer>
  )
}
