import React, { Component } from "react";
import "./onlinehoro.scss";
import bg1 from "../images/background1-1.jpg";
import bg2 from "../images/background3.png";
import { Container, Row, Col, Image } from "react-bootstrap";

class OnlineHoro extends Component {  
    render(){
      return (
        <div className="main__content1">
          <Title />
          <Subsection /> 
          <Button />         
        </div> 
      )
    }
  }
class Title extends Component {  
  render(){
    return (        
      <Container>  
        <Row> 
          <Col>   
            <h3 className="display3">ОНЛАЙН-ГОРОСКОП</h3>
          </Col> 
        </Row> 
      </Container>         
    )
  }
}
class Subsection extends Component {  
  render(){
    return (
      <Container>      
        <Row className="subsection">
          <Col xs>                 
            <div className="subsection subsection__natal">              
              <h4 className="display4">Что такое настоящий гороскоп?</h4>
              <Image className="natal-img" src={bg1} alt="bg-1" roundedCircle fluid/>
              <span className="subsection__natal-text">Настоящий гороскоп — это точная карта звездного неба, составленная на момент рождения конкретного человека.</span> 
              <br />
              <span className="subsection__natal-text">При этом астролог учитывает место рождения и точное время рождения.  В астрологической (натальной) карте учитывается положение 9 планет, Солнца, Луны и астероидов. Конечно, сейчас карта составляется с помощью компьютера.</span>
            </div>
            </Col> 
            <Col xs> 
              <div className="subsection subsection__natal">            
                <h4 className="display4">Зачем мне нужен гороскоп?</h4>
                <Image className="natal-img" src={bg2} alt="bg-2" roundedCircle fluid />
                <span className="subsection__natal-text">Натальная карта человека - это его карта жизни. В ней отражены взлеты и падения, легкие и сложные маршруты, преграды и обходные пути.
                Конечно, вы можете идти наугад и обретать богатый опыт собственных ошибок. Но мне кажется, есть в вашей жизни и более приятный маршрут.
                И астрология будет вам надежным другом. Помните, индивидуальный гороскоп — это надежный инструмент.
                </span>
              </div>
            </Col>      
        </Row>           
      </Container>
    )
  }
}
class Button extends Component {  
  render(){
    return (
      <Container>      
        <Row className="button">
          <Col xs={6}>
            <a href="http://video-goroskop.ru/asc/"><button className="btn__horo" type="submit">Узнать свой асцендент</button></a> 
          </Col>
        </Row> 
      </Container>       
    )
  }
}


export default OnlineHoro