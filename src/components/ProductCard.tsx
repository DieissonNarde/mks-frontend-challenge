import { IProduct } from '@/types/product'
import Image from 'next/image'
import { FiShoppingBag } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { addItem } from '@/redux/cartSlice'

import { CardContainer, CardImg } from '../styles/components/productCard'
import { Price } from './Price'

interface ProductCardProps {
  product: IProduct
}

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch()

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

          <Price price={Number(product.price)} />
        </div>
        <p>{product.description}</p>
      </div>

      <button onClick={() => dispatch(addItem(product))}>
        <FiShoppingBag />
        <span>COMPRAR</span>
      </button>
    </CardContainer>
  )
}
