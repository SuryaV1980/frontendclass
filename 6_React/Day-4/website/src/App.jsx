import { Route, Routes } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/components/Home";
import About from "./assets/components/About";
import Courses from "./assets/components/Courses";
import Services from "./assets/components/Services";
import Gallery from "./assets/components/Gallery";
import Contact from "./assets/components/Contact";
import Help from "./assets/components/Help";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/service" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
};

export default App;