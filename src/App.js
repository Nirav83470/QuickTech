import { Routes, Route } from "react-router-dom";
import Home from "./Componets/Home";
import About from "./Componets/About";
import Services from "./Componets/Services";
import Projects from "./Componets/Project";
import Blog from "./Componets/Blog";
import Contact from "./Componets/Contact";
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
