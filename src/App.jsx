import { lazy, Suspense } from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'

// Below-the-fold sections load lazily to keep first paint fast.
const About = lazy(() => import('./sections/About'))
const Skills = lazy(() => import('./sections/Skills'))
const Projects = lazy(() => import('./sections/Projects'))
const Education = lazy(() => import('./sections/Education'))
const Achievements = lazy(() => import('./sections/Achievements'))
const Contact = lazy(() => import('./sections/Contact'))

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#about" className="sr-only z-[60] rounded bg-white px-3 py-2 text-black focus:not-sr-only focus:fixed focus:left-3 focus:top-3">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-screen" aria-hidden="true" />}>
          <About />
          <Skills />
          <Projects />
          <Education />
          <Achievements />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </MotionConfig>
  )
}
