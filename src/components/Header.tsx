import React from 'react'
import Navbar from '../components/Navbar';
import logo from '../icons_assets/Logo.svg'

export default function Header():JSX.Element {
  return (
    <header id='navigation-bar' className='flex'>
        <img src={logo}/>
        <Navbar/>
    </header>
  )
}
