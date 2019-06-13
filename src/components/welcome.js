import React, { Component } from "react";
import "./welcome.scss";
import oven from "../images/oven1.png";
import tel from "../images/telets1.png";
import bliznets from "../images/bliznetsi1.png";
import rak from "../images/rakrak.png";
import leo from "../images/lev1.png";
import deva from "../images/virgo.png";
import vesy from "../images/vesy.png";
import scorpio from "../images/scorpio.png";
import strelets from "../images/strelets.png";
import kozerog from "../images/kozerojka.png";
import vodoley from "../images/vodoley.png";
import ryby from "../images/ryby.png";
import { Container, Row, Col, Form } from "react-bootstrap";

class Welcome extends Component {  
  render(){
    return ( 
      <div className="welcome-base">           
        <Presentation />
        <FormForConsult />
      </div>   
    )
  }
}
class Presentation extends Component {  
  render(){
    return (  
      <Container> 
        <Row>  
          <Col md={12} xs={12}>        
            <div className="welcome">
              <h1 className="welcome__title">Гармонизируйте свою жизнь с помощью самопознания!</h1>
              <h3 className="welcome__description"> Запишитесь на предварительную самодиагностику БЕЗ ОПЛАТНО!</h3>
            </div> 
          </Col>
        </Row>
        <Row className="animated-img">
          <Col xs>              
            <img className="png"  src={oven} alt="oven" /> 
          </Col> 
          <Col xs>         
            <img className="png" src={tel} alt="telets" />
          </Col>
          <Col xs>      
            <img className="png" src={bliznets} alt="bliznetsi" />  
          </Col>
          <Col xs>          
            <img className="png" src={rak} alt="rak" />
          </Col>     
          <Col xs>
            <img className="png" src={leo} alt="leo" />
          </Col>
          <Col xs>
            <img className="png" src={deva} alt="virgo" />
          </Col>
          <Col xs>
            <img className="png" src={vesy} alt="libra" />
          </Col>
          <Col xs>
            <img className="png" src={scorpio} alt="scorpio" />
          </Col>                           
          <Col xs>
            <img className="png" src={strelets} alt="strelets" />
          </Col>
          <Col xs>
            <img className="png" src={kozerog} alt="kozerog" />
          </Col>
          <Col xs>
            <img className="png" src={vodoley} alt="vodoley" />
          </Col>
          <Col xs>
            <img className="png" src={ryby} alt="ryby" />          
          </Col> 
          </Row>   
        </Container>  
          
      )
    }
  }

class FormForConsult extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit(e) {
    alert('The value is: ' + this.input.value);
    e.preventDefault();
  } 
  render(){
    return (
      <Form className="form" onSubmit={this.handleSubmit}>
        <Container>
        <Row className="form-item">
          <Col xs>
            <input className="form__input" type="text" ref={(input) => this.input = input} name="name" placeholder="Ваше имя" required />
            <label className="label-item">Введите ваше имя</label>
          </Col>
        </Row>
        <Row className="form-item">
          <Col xs>
            <input className="form__input" type="tel" ref={(input) => this.input = input} pattern="(\+?\d[- .]*){7,13}" name="phone" placeholder="Телефон" required /> 
            <label className="label-item">Введите номер телефона</label>
          </Col>    
        </Row>
        <Row className="form-item">
          <Col xs>
            <input className="form__input" type="email" ref={(input) => this.input = input} name="email" placeholder="E-mail адрес" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" />
            <label className="label-item">Введите E-mail адрес</label> 
          </Col>
        </Row>
        <Row className="form-item">
          <Col xs>
            <input name="submit" type="submit" className="form__submit" value="ЗАПИСАТЬСЯ" />
          </Col>          
        </Row>
        </Container>
      </Form>
    )
  }
}
export default Welcome