import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./Views/Home"
import { About } from "./Views/About"
import { Projects } from "./Views/Projects"
import { SnowEffect } from "./components/SnowEffect"
import { Footer } from "./components/Footer"

function App() {

  return (
    <div className="bg-gradient-to-tl from-[#000014] to-[#0c0c5c] dark:bg-gradient-to-tr dark:from-white dark:to-[#d5d5e8] relative h-full">
      <Navbar />
      <SnowEffect />
      <div className="mt-20 p-8">
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

/* body {
  background: linear-gradient(to top, #000014, #0c0c5c);
  background-attachment: fixed;
  font-family: "Urbanist", sans-serif;
} */


export default App
