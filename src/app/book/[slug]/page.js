import Header from '@components/Header'
import Footer from '@components/Footer'
import content from '@json/content'
import Menu from '@/components/Menu'
import '@styles/book.scss'

export async function generateStaticParams() {
  return content.books.map((post) => ({
    slug: post.slug.toLowerCase(),
  }))
}

const getBookContent = (id) => {
  for (var i = 0; i < content.books.length; i++) {
    if (content.books[i].slug.toLowerCase() == id.toLowerCase()) {
      return content.books[i];
    }
  }
  content.books.forEach(element => {
  });
  return null;
}

export default function Book({ params }) {
  let book = getBookContent(params.slug);
  console.log(book);

  return (
      <main>
        <Menu />
        {/* <Header title="STRANGE GOOSE" /> */}
        {book &&
          <div className="book">
            <div className="leftColumn">
              <img className="coverImg" src={`/assets/images/covers/medium/${book.img}`} />
            </div>
            <div className='rightColumn'>
              <div className='title'>{book.title}</div>
              <div className='author'>{book.author}</div>
              <div className='description' dangerouslySetInnerHTML={{ __html: book.description }} />
              {book.links.amazon && <a className='storeLink' href={book.links.amazon} target="_blank">PURCHASE ON AMAZON</a>}
              {book.links.bookshop && <a className='storeLink' href={book.links.bookshop} target="_blank">PURCHASE ON BOOKSHOP</a>}
            </div>
          </div>
        }
      </main>

  )
}
