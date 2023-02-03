import { RootState } from '@/redux/store'
import { ICartItem } from '@/types/product'
import { calculateTotalItems } from '@/utils/cartValues'
import { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useOnClickOutside } from '../hooks/useOnClickOutside'

import { HContainer, HContent } from '../styles/components/header'
import { Cart } from './Cart'
import CartButton from './CartButton'

export function Header() {
  const [open, setOpen] = useState<boolean>(false)
  const [totalItems, setTotalItems] = useState<number>(0)
  const node = useRef<any>()
  const cartId = 'main-cart'

  const cart: ICartItem[] = useSelector((state: RootState) => state.cart.items)

  useOnClickOutside(node, () => setOpen(false))

  useEffect(() => {
    setTotalItems(calculateTotalItems(cart))
  }, [cart])

  return (
    <HContainer>
      <HContent>
        <div className="logo">
          <h1>
            <strong>MKS</strong> Sistemas
          </h1>
        </div>

        <div className="cart">
          <CartButton
            totalItems={totalItems}
            open={open}
            setOpen={setOpen}
            aria-controls={cartId}
          />
          <Cart cart={cart} open={open} setOpen={setOpen} id={cartId} />
        </div>
      </HContent>
    </HContainer>
  )
}
