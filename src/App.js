import React from "react";
import HoroPage from "./pages/horo";
import HomePage from "./pages/home";
import ArticlePage from "./pages/article";
import StarsHoroPage from "./pages/starshoro";
import ServicePage from "./pages/services";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Route path="/" exact component={HomePage} />
          <Route path="/horo" component={HoroPage} />
          <Route path="/starshoro" component={StarsHoroPage} />           
          <Route path="/article" component={ArticlePage} />          
          <Route path="/service" component={ServicePage} />         
        </>
      </Router>
    );
  }
}

export default App;
