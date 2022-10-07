import Home from "./components/Home.js";
import Footer from "./components/Footer.js";
import Contact from "./components/Contact.js";
import Navbar from "./components/Navbar.js"
import About from "./components/About.js";
import Events from "./components/Events.js"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/events" element={<Events/>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
