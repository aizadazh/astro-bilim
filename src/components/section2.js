import React, { Component } from "react";
import "./section2.scss" 

class Section2 extends Component {  
    render(){
      return (
        <div className="section">
          <Title />
          <Subsection1 />
          <Subsection2 />
          <Button />
        </div> 
      )
    }
  }
  class Title extends Component {  
    render(){
      return (
        <div className="title">
          <h2 className="display2">Почему важно знать свой гороскоп?</h2>
          <h3 className="display3">Потому что, это карта жизни, на которой нанесены все ваши взлеты и падения, легкие и сложные маршруты, преграды и обходные пути</h3>
        </div> 
      )
    }
  }
  class Subsection1 extends Component {  
    render(){
      return (
        <div className="/">
          
        </div> 
      )
    }
  }
  class Subsection2 extends Component {  
    render(){
      return (
        <div className="/">
          
        </div> 
      )
    }
  }
  class Button extends Component {  
    render(){
      return (
        <div className="/">
          
        </div> 
      )
    }
  }
  export default Section2