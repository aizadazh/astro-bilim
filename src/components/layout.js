import React, { Component, Fragment } from "react";
import Header from "./header.js";
import Footer from "./footer.js";

class Layout extends Component{
  render(){
    return (
      <Fragment>
        <Header />
        <div className="body">
          {this.props.children}
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default Layout;