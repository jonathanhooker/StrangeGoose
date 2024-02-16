"use client"
import '@styles/menu.scss'
import { useRef } from 'react';

export default function Menu() {
    const sections = useRef(null);
    const hamburger = useRef(null);
    const openMenu = (e) => {
        e.preventDefault();
        hamburger.current.classList.toggle('active')
        sections.current.classList.toggle('active')
    }
    const itemClicked = (e)=>{
        hamburger.current.classList.toggle('active')
        sections.current.classList.toggle('active')
    }
    return (
        <div className="menu">
            <div className="inner">
                <a className="logoLockup" href="/">
                    <img src="/logo.svg" alt="Strange Goose Logo" className="logo" />
                    <p className="title">STRANGE<br />GOOSE</p>
                </a>
                <a className="hamburger" ref={hamburger} onClick={openMenu}>
                    <svg className="burger" version="1.1" height="100" width="100" viewBox="0 0 100 100">
                        <path className="line line1" d="M 50,35 H 30" />
                        <path className="line line2" d="M 50,35 H 70" />
                        <path className="line line3" d="M 50,50 H 30" />
                        <path className="line line4" d="M 50,50 H 70" />
                        <path className="line line5" d="M 50,65 H 30" />
                        <path className="line line6" d="M 50,65 H 70" />
                    </svg>
                    <svg className="x" version="1.1" height="100" width="100" viewBox="0 0 100 100">
                        <path className="line" d="M 34,32 L 66,68" />
                        <path className="line" d="M 66,32 L 34,68" />
                    </svg>

                </a>


                <ul className="sections" ref={sections}>
                    <li><a href="/#books" onClick={itemClicked}>BOOKS</a></li>
                    <li><a href="/#printables" onClick={itemClicked}>PRINTABLE ACTIVITIES</a></li>
                    {/* <li>RECENT PRESS</li> */}
                </ul>
                {/* <p className="description">An independent publisher in Portland, Oregon.</p> */}
            </div>
        </div>
    )
}
