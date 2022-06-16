import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Skills from "./components/Skills"
import Projects from "./components/Projects"


function App() {

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </div>
  )
}

export default App