import Navbar from "./navbar"
import YourFeed from "./pages/Yourfeed"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</meta>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/yourfeed" element={<YourFeed />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App