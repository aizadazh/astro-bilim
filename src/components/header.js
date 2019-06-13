import React, { Component } from "react";
import { Link } from "react-router-dom";
import ModalWindow from "./Modal";
import "./header.scss";
import { Container, Navbar, Nav } from "react-bootstrap";



class Header extends Component {  
  render(){
    return (      
      <header className="header">        
        <HeaderContent />                            
      </header>        
    )
  }
}
class HeaderContent extends Component {  
  render(){
    return (      
      <Container> 
        <Navbar expand="lg" variant="dark" bg="dark">               
          <Navbar.Brand><Link style={{color: "#fcd250", fontSize: "1.5em", fontWeight: "bold"}}to="/home">ASTRO-BILIM</Link></Navbar.Brand>
          <Navigation />  
          <ModalWindow />               
        </Navbar>
      </Container>       
    )
  }
}
class Navigation extends Component {  
  render(){
    return (
      <Nav className="menu mr-auto">                         
        <Nav.Link className="menu__list"><Link style={{color: "#ececec"}} to="/services">Услуги</Link>
          <Nav className="submenu">
            <Nav.Link className="menu__list"><Link style={{color: "#ececec"}} to="/services">Натальная карта</Link></Nav.Link>
            <Nav.Link className="menu__list"><Link style={{color: "#ececec"}} to="/services">Натальная карта ребенка</Link></Nav.Link>
            <Nav.Link className="menu__list"><Link style={{color: "#ececec"}} to="/services">Бизнес астрология</Link></Nav.Link>
            <Nav.Link className="menu__list"><Link style={{color: "#ececec"}} to="/services">Карта совместимости</Link></Nav.Link>
            <Nav.Link className="menu__list"><Link style={{color: "#ececec"}} to="/services">Личная жизнь</Link></Nav.Link>
            <Nav.Link className="menu__list"><Link style={{color: "#ececec"}} to="/services">Выбор даты</Link></Nav.Link>
          </Nav>          
        </Nav.Link>
        <Nav.Link className="menu__list"><Link style={{color: "#ececec"}} to="/horo">Гороскоп</Link></Nav.Link>
        <Nav.Link className="menu__list"><Link style={{color: "#ececec"}} to="/starshoro">Асцендент</Link></Nav.Link>
        <Nav.Link className="menu__list"><Link style={{color: "#ececec"}} to="/article">Статьи</Link></Nav.Link>
      </Nav>     
    );
  };
};
export default Header;