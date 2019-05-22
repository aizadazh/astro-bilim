import React, { Component } from "react";
import "./header.scss" 
import "./base.scss"
import Welcome from "./welcome";

class Header extends Component {  
  render(){
    return (
      <div className="header-wrapper">
        <header className="header">
          <Logo />
          <Nav />          
        </header>
        <div className="welcome">
          <Welcome />
        </div>
      </div>
    )
  }
}
class Logo extends Component {  
  render(){
    return (
      <div className="logo">
        <span className="logo__text">ASTRO-BILIM</span>
      </div>
    )
  }
}
class Nav extends Component {  
  render(){
    return (
      <nav className="menu">                 
        <a className="menu__item" href="/">Главная</a>         
        <a className="menu__item" href="/">Гороскоп</a>
        <a className="menu__item" href="/">Статьи</a>
        <a className="menu__item" href="/">Отзывы</a>
      </nav>      
    )
  }
}
export default Header