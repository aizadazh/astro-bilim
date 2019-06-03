import React, { Component, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";


class MainLayout extends Component{
  render(){
    return (
      <Fragment>
        <Header />
        {this.props.children}     
        <Footer />
      </Fragment>
    )
  }
}

export default MainLayout;