import React, { Component } from "react";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { MainLayout } from "../components"
import Services from "../components/Services"

class ServicePage extends Component{
  render(){
    return (      
      <MainLayout>
        <Services>
        </Services>
      </MainLayout>          
    )
  }
}

export default ServicePage;