import Head from 'next/head'
import Header from '@components/Header'
import Menu from '@components/Menu'
import Footer from '@components/Footer'
import content from '@json/content'
import '@styles/home.scss'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>STRANGE GOOSER</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="stylesheet" href="https://use.typekit.net/mrm3nhj.css" /> */}
      </Head>

      <main>
        <Menu />
        <Header />
        <div className="section books">
          <div className="sectionTitle">OUR BOOKS</div>
          <ul>
            {content.books.map((book, n) =>
              <li className="book" key={n} >
                <img src={`assets/images/covers/small/${book.img}`} />
                <div className='bookRightColumn'>
                  <div className='title'>{book.title}</div>
                  <div className='author'>{book.author}</div>
                  <div className='description' dangerouslySetInnerHTML={{ __html: book.description }} />
                  {book.links.amazon && <a className='storeLink' href={book.links.amazon} target="_blank">PURCHASE ON AMAZON</a>}
                  {book.links.bookshop && <a className='storeLink' href={book.links.bookshop} target="_blank">PURCHASE ON BOOKSHOP</a>}
                </div>
              </li>
            )}
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  )
}
