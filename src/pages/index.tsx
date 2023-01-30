import { Header } from '@/components/Header'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
        <meta name="description" content="MKS Sistemas - Teste de Front End" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <Header />
        <h1>Home</h1>
      </main>
    </>
  )
}
