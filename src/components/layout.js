import React, { Component, Fragment } from "react";
import Header from "./header.js";
import Main from "./main.js";
import Footer from "./footer.js";


class Layout extends Component{
  render(){
    return (
      <Fragment>
        <Header />
        <Main />        
        <div className="body">
          {this.props.children}
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default Layout;