import { AiFillCloseCircle } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

import {
  CartButton,
  CartContainer,
  CartHeader,
  CartTotal,
  ListItems
} from '../styles/components/cart'
import { CartItem } from './CartItem'
import { ICartItem } from '@/types/product'
import { calculateTotal } from '@/utils/cartValues'

interface ICartProps {
  cart: ICartItem[]
  open: boolean
  id?: string
  setOpen: (open: boolean) => void
}

export function Cart({ cart, open = false, setOpen, id }: ICartProps) {
  const isHidden = open ? true : false

  return (
    <CartContainer open={open} aria-hidden={!isHidden} id={id}>
      <CartHeader>
        <h2>Carrinho de Compras</h2>
        <AiFillCloseCircle onClick={() => setOpen(false)} />
      </CartHeader>

      <ListItems>
        {cart.map(productItem => (
          <CartItem key={productItem.id} productItem={productItem} />
        ))}
      </ListItems>

      <CartTotal>
        <span>Total</span>
        <span>R$ {calculateTotal(cart)}</span>
      </CartTotal>

      <CartButton>Finalizar Compra</CartButton>
    </CartContainer>
  )
}
