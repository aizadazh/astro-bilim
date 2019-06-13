import React, { Component } from "react";
import Welcome from "./Welcome";
import OnlineHoro from "./OnlineHoro";
import BlockZodiak from "./Block2";
import Block3 from "./Block3";
import "./main.scss";
import "./onlinehoro.scss";

import { Container } from "react-bootstrap";

class Main extends Component {  
  render(){
    return (
      <Container>              
        <Welcome />
        <OnlineHoro />
        <BlockZodiak />        
        <Block3 />          
      </Container>
    )
  }
}



export default Main