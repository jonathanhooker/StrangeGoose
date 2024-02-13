
import '@styles/header.scss'

export default function Header({ title }) {
  return <div className="header">
    <img src="/logo.svg" alt="Strange Goose Logo" className="logo" />
    <p className="title">STRANGE GOOSE</p>
    <p className="description">An independent publisher in Portland, Oregon.</p>
  </div>
}
