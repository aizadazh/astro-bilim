import React, { Component } from "react";
import { MainLayout } from "../components";
import Oven from '../components/znakoven';

class HoroPage extends Component{
  render(){
    return (
      <MainLayout>    
        <Oven />
      </MainLayout>         
    )
  }
}

export default HoroPage;