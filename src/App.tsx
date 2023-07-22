import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./Views/Home"
import { About } from "./Views/About"
import { Projects } from "./Views/Projects"
import { SnowEffect } from "./components/SnowEffect"
import { Footer } from "./components/Footer"

function App() {

  return (
    <div className="">
      <Navbar />
      <SnowEffect />
      <div className="mt-20 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
