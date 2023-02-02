import { FiShoppingCart } from 'react-icons/fi'

import { CartButtonContent } from '../styles/components/cartButton'

interface CartButtonProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function CartButton({
  open,
  setOpen,
  ...props
}: CartButtonProps) {
  const isExpanded = open ? true : false

  return (
    <CartButtonContent
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <div>
        <FiShoppingCart />
      </div>
      <div>
        <span>0</span>
      </div>
    </CartButtonContent>
  )
}
