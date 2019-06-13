import React, { Component } from "react";
import { Link } from "react-router-dom";
import ModalWindow from "./Modal";
import "./header.scss";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";



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
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">               
          <Navbar.Brand><Link style={{color: "#fcd250", fontSize: "1.5em", fontWeight: "bold"}} to="/">ASTRO-BILIM</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="menu ml-auto mr-auto">
            <Nav.Link className="menu__list" href="/horo" style={{color: "#ececec"}}>Гороскоп</Nav.Link>
            <Nav.Link className="menu__list" href="/oven" style={{color: "#ececec"}}>Асцендент</Nav.Link>
            <Nav.Link className="menu__list" href="/article" style={{color: "#ececec"}}>Статьи</Nav.Link>                        
            <NavDropdown className="menu__list" title="Услуги" style={{color: "#ececec"}} id="collasible-nav-dropdown">            
                <NavDropdown.Item className="menu__list" href="/services">Натальная карта</NavDropdown.Item>
                <NavDropdown.Item className="menu__list" href="/services">Натальная карта ребенка</NavDropdown.Item>
                <NavDropdown.Item className="menu__list" href="/services">Бизнес астрология</NavDropdown.Item>
                <NavDropdown.Item className="menu__list" href="/services">Карта совместимости</NavDropdown.Item>
                <NavDropdown.Item className="menu__list" href="/services">Личная жизнь</NavDropdown.Item>
                <NavDropdown.Item className="menu__list" href="/services">Выбор даты</NavDropdown.Item>
            </NavDropdown>
          </Nav>           
        </Navbar.Collapse>
      
    );
  };
};
export default Header;