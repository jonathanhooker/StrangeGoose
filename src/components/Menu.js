import '@styles/menu.scss'

export default function Menu() {
  return (
    <div className="menu">
        <div className="inner">
            <div className="logoLockup">
                <img src="/logo.svg" alt="Strange Goose Logo" className="logo" />
                <p className="title">STRANGE<br/>GOOSE</p>
            </div>
            <ul className="sections">
                <li>BOOKS</li>
                <li>PRINTABLE ACTIVITIES</li>
                <li>RECENT PRESS</li>
            </ul>
            {/* <p className="description">An independent publisher in Portland, Oregon.</p> */}
        </div>
    </div>
  )
}
