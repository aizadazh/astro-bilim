import React, { Component } from "react";
import { Link } from "react-router-dom";
import ModalWindow from "./Modal";
import "./header.scss";
import { Container } from "react-bootstrap";



class Header extends Component {  
  render(){
    return (
      <Container>
        <header className="header">
          <Logo />
          <Nav />
          <ModalWindow />                  
        </header>       
     </Container>
    )
  }
}
class Logo extends Component {  
  render(){
    return (
      <div className="logo">
        <a className="logo__text" href="/">ASTRO-BILIM</a>
      </div>
    )
  }
}
class Nav extends Component {  
  render(){
    return (
      <ul className="menu">                         
        <li className="menu__list"><Link style={{color: "#ececec"}} to="/services">Услуги</Link>
          <ul className="submenu">
            <li className="menu__list"><a className="submenu__item" href="/">Натальная карта</a></li>
            <li className="menu__list"><a className="submenu__item" href="/">Натальная карта ребенка</a></li>
            <li className="menu__list"><a className="submenu__item" href="/">Бизнес астрология</a></li>
            <li className="menu__list"><a className="submenu__item" href="/">Карта совместимости</a></li>
            <li className="menu__list"><a className="submenu__item" href="/">Личная жизнь</a></li>
            <li className="menu__list"><a className="submenu__item" href="/">Выбор даты</a></li>
          </ul>          
        </li>
        <li className="menu__list"><Link style={{color: "#ececec"}} to="/horo">Гороскоп</Link></li>
        <li className="menu__list"><Link style={{color: "#ececec"}} to="/starshoro">Асцендент</Link></li>
        <li className="menu__list"><Link style={{color: "#ececec"}} to="/article">Статьи</Link></li>
      </ul>     
    );
  };
};
export default Header;