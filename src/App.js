import React from "react";
import HoroPage from "./pages/horo";
import HomePage from "./pages/home";
import ArticlePage from "./pages/article";
import ServicePage from "./pages/services";
import ZnakOven from "./pages/oven";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Route path="/" exact component={HomePage} />
          <Route path="/horo" component={HoroPage} />
          <Route path="/article" component={ArticlePage} />          
          <Route path="/services" component={ServicePage} />   
          <Route path="/oven" component={ZnakOven} />                
        </>
      </Router>
    );
  }
}

export default App;
