import React from "react";
import IndexPage from "./pages/index";
import AboutPage from "./pages/about";
import CatalogPage from "./pages/catalog";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Route path="/" exact component={IndexPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contacts" render={({ match }) => {
              return <h1>Contacts</h1>
          }} />
          <Route path="/catalog/:category_slug?" component={CatalogPage} />
        </>
      </Router>
    );
  }
}

export default App;
