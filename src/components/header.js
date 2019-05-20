import React, { Component } from "react";
import "./header.scss" 

class Header extends Component {  
  render(){
    return (
      <header className="header">
          <Logo />
          <Nav />
      </header>
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