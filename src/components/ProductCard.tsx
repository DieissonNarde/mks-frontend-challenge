import Image from 'next/image'
import { FiShoppingBag } from 'react-icons/fi'

import { CardContainer, CardImg } from '../styles/components/productCard'
import { Price } from './Price'

export function ProductCard() {
  return (
    <CardContainer>
      <CardImg>
        <Image
          src={'/notfound.png'}
          alt={'teste'}
          layout="fill"
          className={'image'}
        />
      </CardImg>

      <div className="card-info">
        <div>
          <h3>{'Produto teste'}</h3>

          <Price />
        </div>
        <p>Redesigned from scratch and completely revised.</p>
      </div>

      <button>
        <FiShoppingBag />
        <span>{'COMPRAR'}</span>
      </button>
    </CardContainer>
  )
}
