import React, { Component } from "react";
import "./main.scss" 

class Main extends Component {  
  render(){
    return (
      <main className="main">
          <Block2 />         
      </main>
    )
  }
}
class Block2 extends Component {  
  render(){
    return (
      <div className="main__content2">
        <h2 className="display2">Базовые возможности</h2>
        <span className="text text__main">Составить свой гороскоп</span>
      </div> 
    )
  }
}

  


export default Main