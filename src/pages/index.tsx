import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ProductCard } from '@/components/ProductCard'
import api from '@/services/api'
import { HomeContainer, ListProducts } from '@/styles/pages/home'
import { IProduct } from '@/types/product'
import Head from 'next/head'

interface HomeProps {
  products: Array<IProduct>
}

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
        <meta name="description" content="MKS Sistemas - Teste de Front End" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <HomeContainer>
        <Header />

        <ListProducts>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ListProducts>

        <Footer />
      </HomeContainer>
    </>
  )
}

export async function getStaticProps() {
  const { data: productsData } = await api.get(
    '/products?page=1&rows=10&sortBy=price&orderBy=DESC'
  )

  const products = productsData.products

  return {
    props: {
      products
    }
  }
}
