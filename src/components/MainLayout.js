import React, { Component, Fragment } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


class MainLayout extends Component{
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

export default MainLayout;