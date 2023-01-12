import React from 'react'
import header from './header.module.css'

export default function Header() {
  return (
      <div className={header.container}>
          <h1>Localhost</h1>
          <ul>
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Privacy</a></li>
              <li><a>Contact</a></li>
          </ul>
    </div>
  )
}
