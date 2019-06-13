import React, { Component } from "react";
import "./footer.scss";
import facebook from "../icons/f.png";
import instagram  from "../icons/i.png";
import whatsapp from "../icons/w.png";
import email from "../icons/e.png";
import { Container, Row, Col } from "react-bootstrap";

class Footer extends Component{
  render(){
    return (
      <Container>
        <div className="footer">        
          <FooterInfo />       
        </div>
      </Container>
      )
  }
}
class FooterInfo extends Component{
  render(){
    return (  
      <Container>           
          <Row className="footer__info">
            <Col xs>
              <div className="social-network-block">
                <a href="https://www.instagram.com/astro.bilim.vedy"><img className="social-network-icon" src={facebook} alt={facebook} /></a>
                <a href="https://www.instagram.com/astro.bilim.vedy"><img className="social-network-icon" src={instagram} alt={instagram} /></a>
                <a href="https://www.instagram.com/astro.bilim.vedy"><img className="social-network-icon" src={whatsapp} alt={whatsapp} /></a>
                <a href="https://www.instagram.com/astro.bilim.vedy"><img className="social-network-icon__email" src={email} alt={email} /></a>
              </div>
            </Col>
            <Col>
              <div className="copyright-info">
                <span className="info">© Copyright 2019-2021 Астропроект «ASTRO-BILIM» All rights reserved.</span>
                <span className="info">Автор и разработчик: Aizada Zhumalieva, aizada-jumalieva@mail.ru</span>
              </div>
          </Col>
        </Row> 
      </Container> 
       
      
      )
  }
}


export default Footer