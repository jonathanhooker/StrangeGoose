import '@styles/globals.scss'
import content from '../json/content';
import Footer from '@components/Footer'

export const metadata = content.metadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="wrapper">
          <div className="container">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
