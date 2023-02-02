import { PriceContent } from '../styles/components/price'

interface PriceProps {
  price: number
}

export function Price({ price }: PriceProps) {
  return <PriceContent>{`R$ ${price}`}</PriceContent>
}
