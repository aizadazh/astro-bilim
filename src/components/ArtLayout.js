import React, { Component, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";


class ArtLayout extends Component{
  render(){
    return (
      <Fragment>
        <Header /> 
            <h1>Article Content</h1>       
        <Footer />
      </Fragment>
    )
  }
}

export default ArtLayout;