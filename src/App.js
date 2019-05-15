import React from "react";
import VedicPage from "./pages/vedic";
import HomePage from "./pages/home";
import ArticlePage from "./pages/article";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Route path="/" exact component={VedicPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/article" render={({ match }) => {
              return <h1>Статьи</h1>
          }} />
          <Route path="/article/:category_slug?" component={ArticlePage} />
        </>
      </Router>
    );
  }
}

export default App;
