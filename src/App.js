import React, { useEffect } from "react";
import NavbarComponent from "./components/NavbarComponent";
import About from "./views/About";
import Home from "./views/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./views/Projects";
import Footer from "./components/Footer";
import Error from "./views/Error";

function App() {

  useEffect(() => {}, [])

  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <NavbarComponent />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route exact component={Error} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
