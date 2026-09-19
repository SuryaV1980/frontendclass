import { Route, Routes } from "react-router-dom"
import NavBar from "./component/NavBar"
import Home from "./component/Home"
import About from "./component/About"
import Shop from "./component/Shop"
import Help from "./component/Help"
const App = () => {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    
    </>
  )
}

export default App