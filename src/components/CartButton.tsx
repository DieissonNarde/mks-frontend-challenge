import { FiShoppingCart } from 'react-icons/fi'

import { CartButtonContent } from '../styles/components/cartButton'

export default function CartButton() {
  return (
    <CartButtonContent>
      <div>
        <FiShoppingCart />
      </div>
      <div>
        <span>0</span>
      </div>
    </CartButtonContent>
  )
}
