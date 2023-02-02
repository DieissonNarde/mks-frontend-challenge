import { PriceContent } from '../styles/components/price'

interface PriceProps {
  price: string
}

export function Price({ price }: PriceProps) {
  return <PriceContent>{`R$ ${price}`}</PriceContent>
}
