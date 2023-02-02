import { useState, useRef } from 'react'

import { useOnClickOutside } from '../hooks/useOnClickOutside'

import { HContainer, HContent } from '../styles/components/header'
import { Cart } from './Cart'
import CartButton from './CartButton'

export function Header() {
  const [open, setOpen] = useState(false)
  const node = useRef<any>()
  const cartId = 'main-cart'

  useOnClickOutside(node, () => setOpen(false))

  return (
    <HContainer>
      <HContent>
        <div className="logo">
          <h1>
            <strong>MKS</strong> Sistemas
          </h1>
        </div>

        <div className="cart">
          <CartButton open={open} setOpen={setOpen} aria-controls={cartId} />
          <Cart open={open} id={cartId} />
        </div>
      </HContent>
    </HContainer>
  )
}
