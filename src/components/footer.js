import React, { Component } from "react";
import "./footer.scss" 

class Footer extends Component{
  render(){
    return (
      <footer className="footer">
        <FooterInfo />  
      </footer>
      )
  }
}
class FooterInfo extends Component{
  render(){
    return (      
      <div className="footer__info">
        <span className="info">2019-2021 Астропроект «ASTRO-BILIM»</span>
        <span className="info">Автор и разработчик: Aizada Zhumalieva, aizada-jumalieva@mail.ru</span>
      </div>   
      
      )
  }
}


export default Footer