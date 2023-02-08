import React from 'react'
import About from './About'
import Highlights from './Highlights'
import Home from './Home'
import Testemonials from './Testemonials'

export default function Main():JSX.Element {
  return (
    <main >
        <Home/>
        <Highlights/>
        <Testemonials/>
        <About/>
    </main>
  )
}
