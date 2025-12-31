import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import gsap from 'gsap';
import { SplitText } from "gsap/SplitText"
import About from './components/About';
import Contact from './components/Contact';
gsap.registerPlugin([SplitText])

export default function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Contact />

    </main>
  )
}
