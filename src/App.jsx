import { useState } from 'react'
import Navbar from "./components/layout/Navbar";
import About from "./components/layout/About";
import Skills from "./components/layout/Skills";
import Projects from "./components/layout/Projects";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";
import Hero from "./components/layout/Hero";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
