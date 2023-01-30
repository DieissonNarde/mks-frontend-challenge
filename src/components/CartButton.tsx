import { FaShoppingCart } from 'react-icons/fa'

import { CartButtonContent } from '../styles/components/cartButton'

export default function CartButton() {
  return (
    <CartButtonContent>
      <div>
        <FaShoppingCart />
      </div>
      <div>
        <span>0</span>
      </div>
    </CartButtonContent>
  )
}
