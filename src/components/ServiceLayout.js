import React, { Component, Fragment } from "react";
import Header from "./Header";
import ServiceSlider from "./Slider";
import Footer from "./Footer";


class ServiceLayout extends Component{
  render(){
    return (
      <Fragment>
        <Header /> 
        <ServiceSlider />     
        <Footer />
      </Fragment>
    )
  }
}

export default ServiceLayout;