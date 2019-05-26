import React, { Component } from "react";
import "./header.scss" 
import "./base.scss"


class Header extends Component {  
  render(){
    return (
      <div className="container">
        <header className="header">
          <Logo />
          <Nav />                  
        </header>       
     </div>
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
        <li className="menu__list"><a className="menu__item" href="/">Услуги</a>
          <ul className="submenu">
            <li className="menu__list"><a className="submenu__item" href="/">Натальная карта</a></li>
            <li className="menu__list"><a className="submenu__item" href="/">Натальная карта ребенка</a></li>
            <li className="menu__list"><a className="submenu__item" href="/">Бизнес астрология</a></li>
            <li className="menu__list"><a className="submenu__item" href="/">Карта совместимости</a></li>
            <li className="menu__list"><a className="submenu__item" href="/">Личная жизнь</a></li>
            <li className="menu__list"><a className="submenu__item" href="/">Выбор даты</a></li>

          </ul> 
        </li>
        <li><a className="menu__item" href="/">Астропрогноз</a></li>       
        <li><a className="menu__item" href="/">Гороскопы звезд</a></li>
        <li><a className="menu__item" href="/">Статьи</a></li>           
      </ul>      
    );
  };
};
export default Header;