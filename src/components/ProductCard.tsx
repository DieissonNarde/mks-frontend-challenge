import { IProduct } from '@/types/product'
import Image from 'next/image'
import { FiShoppingBag } from 'react-icons/fi'

import { CardContainer, CardImg } from '../styles/components/productCard'
import { Price } from './Price'

interface ProductCardProps {
  product: IProduct
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <CardContainer>
      <CardImg>
        <Image
          src={product.photo}
          alt={product.name}
          width={400}
          height={400}
          className={'image'}
          priority
        />
      </CardImg>

      <div className="card-info">
        <div>
          <h3>{product.name}</h3>

          <Price price={product.price} />
        </div>
        <p>{product.description}</p>
      </div>

      <button>
        <FiShoppingBag />
        <span>COMPRAR</span>
      </button>
    </CardContainer>
  )
}
