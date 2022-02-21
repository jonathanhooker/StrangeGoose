import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>STRANGE GOOSE</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/mrm3nhj.css" />
      </Head>

      <main>
        <Header title="STRANGE GOOSE" />
        <p className="description">
          An independent publisher in Portland, Oregon.
        </p>
      </main>

      <Footer />
    </div>
  )
}
