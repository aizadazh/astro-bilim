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
      <figure className="logo">
        <img className="header__logo" href="https://cdn6.aptoide.com/imgs/e/3/f/e3ff5f9edda351f1ec4e24c2d23a84e9_icon.png" alt="logo"></img>
      </figure>
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