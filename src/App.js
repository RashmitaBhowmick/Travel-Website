import "./styles.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import SignIn from "./routes/Signin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}
export default App;
