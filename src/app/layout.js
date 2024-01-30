import '@styles/globals.scss'
import content from '../json/content';

export const metadata = content.metadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="wrapper">
          {children}
        </div>
      </body>
    </html>
  )
}
