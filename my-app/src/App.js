import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About"
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";




function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Skills/>
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
