import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";


class MainLayout extends Component{
  render(){
    return (
      <>
        <Header />
          {this.props.children}     
        <Footer />
      </>
    )
  }
}

export default MainLayout;