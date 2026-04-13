import useTheme from "./hooks/useTheme"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App() {
  const { dark, toggle } = useTheme()

  return (
    <>
      <Nav onThemeToggle={toggle} dark={dark} />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default App
