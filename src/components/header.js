import React, { Component } from "react";
import "./header.scss" 

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render(){
    return (
      <header>
         
      </header>
    )
  }
}

export default Header