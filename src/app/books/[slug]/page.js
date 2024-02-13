import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import content from '@json/content'

export async function generateStaticParams() {
  return content.books.map((post) => ({
    slug: post.slug,
  }))
}

export default function Book({ params }) {
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
          This is the book EPK Page {params.slug}
        </p>
      </main>

      <Footer />
    </div>
  )
}
