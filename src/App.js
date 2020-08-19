import React, { useState, useEffect } from "react";
import ReactGa from "react-ga";
import $ from "jquery";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import Testimonials from "./Components/Testimonials";
import "./App.css";
// git clone https://github.com/JTux/CupcakeUnitTesting.git
function App() {
  const [resumeData, setResumeData] = useState({});
  const [foo, setFoo] = useState("bar");
  // testing
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
