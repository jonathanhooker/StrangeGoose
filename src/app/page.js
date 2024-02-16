import Header from '@components/Header'
import Menu from '@components/Menu'
import content from '@json/content'
import '@styles/home.scss'

export default function Home() {
  return (
    <main>
      <Menu />
      {/* <Header /> */}
      <div id="books" className="section itemList books">
        <div className="sectionTitle">OUR BOOKS</div>
        <ul>
          {content.books.map((book, n) =>
            <li className="book" key={n} >
              <a href={`/book/${book.slug}`}>
                <img src={`assets/images/covers/small/${book.img}`} />
                <div className='bookRightColumn'>
                  <div className='title'>{book.title}</div>
                  <div className='author'>{book.author}</div>
                  {/* <div className='description' dangerouslySetInnerHTML={{ __html: book.description }} />
                    {book.links.amazon && <a className='storeLink' href={book.links.amazon} target="_blank">PURCHASE ON AMAZON</a>}
                    {book.links.bookshop && <a className='storeLink' href={book.links.bookshop} target="_blank">PURCHASE ON BOOKSHOP</a>} */}
                </div>
              </a>
            </li>
          )}
        </ul>
      </div>
      <div id="printables" className="section itemList printables">
        <div className="sectionTitle">PRINTABLE ACTIVITIES</div>
        <ul>
          {content.printables.map((printable, n) =>
            <li className="printable" key={n} >
              <a href={printable.url}>
                <img src={printable.thumb} />
                <div className='info'>
                  <div className='title'>{printable.title}</div>
                </div>
              </a>
            </li>
          )}
        </ul>
      </div>
    </main>
  )
}
