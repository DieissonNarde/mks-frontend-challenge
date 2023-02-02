import { AiFillCloseCircle } from 'react-icons/ai'

import {
  CartButton,
  CartContainer,
  CartHeader,
  CartTotal,
  ListItems
} from '../styles/components/cart'

interface ICartProps {
  open?: boolean
}

export function Cart({ open = false }: ICartProps) {
  const isHidden = open ? true : false

  return (
    <CartContainer open={open} aria-hidden={!isHidden}>
      <CartHeader>
        <h2>Carrinho de Compras</h2>
        <AiFillCloseCircle />
      </CartHeader>

      <ListItems></ListItems>

      <CartTotal>
        <span>Total</span>
        <span>{'1000'}</span>
      </CartTotal>

      <CartButton>Finalizar Compra</CartButton>
    </CartContainer>
  )
}
