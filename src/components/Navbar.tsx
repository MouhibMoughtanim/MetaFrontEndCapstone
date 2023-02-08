import React from 'react'
import './css/reset.css'

export default function Navbar():JSX.Element {
  return (
     <nav >
        <ul className='flex nav'>
          <li>
            <a href="">Home</a>
          </li>
          <li>
          <a href="">about</a>
          </li>
          <li>
          <a href="">menu</a>
          </li>
          <li>
          <a href="">reservations</a>
          </li>
          <li>
          <a href="">order online</a>
          </li>
          <li>
          <a href="">login</a>
          </li>
        </ul>
      </nav>
        )
}
