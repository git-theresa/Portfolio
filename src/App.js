import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";


function App() {
  return (
        <Router basename="/Portfolio">
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/portfolio" component={Portfolio} />
             <Route path="/contact" component={Contact} />
             <Footer />
      </div>
    </Router>
    
  );
}

export default App;
