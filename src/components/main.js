import React, { Component } from "react";
import { Link } from "react-router-dom";
import Welcome from "./Welcome";
import OnlineHoro from "./OnlineHoro";
import Block3 from "./Block3";
import "./main.scss";
import "./onlinehoro.scss";
import oven from "../images/oven.jpg";
import telets from "../images/telets.jpg";
import bliznetsi from "../images/bliznetsi.jpg";
import rak from "../images/rak.jpg";
import lev from "../images/lev.jpg";
import deva from "../images/deva.jpg";
import vesi from "../images/vesi.jpg";
import scorpion from "../images/scorpion.jpg";
import strelets from "../images/strelets.jpg";
import kozerog from "../images/kozerog.jpg";
import vodoley from "../images/vodoley.jpg";
import ribi from "../images/ribi.jpg";
import { Container, Card, CardGroup } from "react-bootstrap";

class Main extends Component {  
  render(){
    return (
      <Container>       
        <Welcome />
        <OnlineHoro />
        <Block2 />
        <Block3 />          
      </Container>
    )
  }
}


class Block2 extends Component {  
  render(){
    return (
      <div className="main__content2">
        <h3 className="display3">ВОСХОДЯЩИЕ ЗНАКИ</h3>
        <CardGroup>
          <Card style={{ width: '12rem' }}>
            <Link to="/oven"><Card.Img variant="top" src={oven} alt="oven" /></Link>
            <Card.Body>              
              <Card.Text><h5>ОВЕН (Меша)</h5></Card.Text>
              <Card.Footer>
                <large className="text-muted">21 марта - 20 апреля.</large>
              </Card.Footer>
            </Card.Body>
          </Card> 
          <Card style={{ width: '12rem' }}>
            <Link to="/oven"><Card.Img variant="top" src={telets} alt="telets" /></Link>
            <Card.Body>              
              <Card.Text>ТЕЛЕЦ (Вришабха)</Card.Text>
              <Card.Footer>
                <small className="text-muted">21 апреля - 20 мая</small>
              </Card.Footer>
            </Card.Body>
          </Card> 
          <Card style={{ width: '12rem' }}>
            <Link to="/oven"><Card.Img variant="top" src={bliznetsi} alt="bliznetsi" /></Link>
            <Card.Body>              
              <Card.Text>БЛИЗНЕЦЫ (Митхуна)</Card.Text>
              <Card.Footer>
                <small className="text-muted">22 мая - 21 июня</small>
              </Card.Footer>
            </Card.Body>
          </Card>
          <Card style={{ width: '12rem' }}>
            <Link to="/oven"><Card.Img variant="top" src={rak} alt="rak" /></Link>
            <Card.Body>              
              <Card.Text>РАК (Карка)</Card.Text>
              <Card.Footer>
                <small className="text-muted">22 июня - 21 июля</small>
              </Card.Footer>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card style={{ width: '12rem' }}>
            <Link to="/oven"><Card.Img variant="top" src={lev} alt="lev" /></Link>
            <Card.Body>              
              <Card.Text>ЛЕВ (Симха)</Card.Text>
              <Card.Footer>
                <small className="text-muted">22 июля - 21 августа</small>
              </Card.Footer>
            </Card.Body>
          </Card>
          <Card style={{ width: '12rem' }}>
            <Link to="/oven"><Card.Img variant="top" src={deva} alt="deva" /></Link>
            <Card.Body>              
              <Card.Text>ДЕВА (Канья)</Card.Text>
              <Card.Footer>
                <small className="text-muted">22 августа - 21 сентября</small>
              </Card.Footer>
            </Card.Body>
          </Card>
          <Card style={{ width: '12rem' }}>
            <Link to="/oven"><Card.Img variant="top" src={vesi} alt="vesi" /></Link>
            <Card.Body>              
              <Card.Text>ВЕСЫ (Тула)</Card.Text>
              <Card.Footer>
                <small className="text-muted">22 сентября - 21 октября</small>
              </Card.Footer>
            </Card.Body>
          </Card>
          <Card style={{ width: '12rem' }}>
            <Link to="/oven"><Card.Img variant="top" src={scorpion} alt="scorpion" /></Link>
            <Card.Body>              
              <Card.Text>СКОРПИОН (Вришчика)</Card.Text>
              <Card.Footer>
                <small className="text-muted">22 октября - 21 ноября</small>
              </Card.Footer>
            </Card.Body>
          </Card>
          </CardGroup>
          <CardGroup>
          <Card style={{ width: '12rem' }}>
            <Link to="/oven"><Card.Img variant="top" src={strelets} alt="strelets" /></Link>
            <Card.Body>              
              <Card.Text>СТРЕЛЕЦ (Дханур)</Card.Text>
              <Card.Footer>
                <small className="text-muted">22 ноября - 21 декабря</small>
              </Card.Footer>
            </Card.Body>
          </Card>
          <Card style={{ width: '12rem' }}>
            <Link to="/oven"><Card.Img variant="top" src={kozerog} alt="kozerog" /></Link>
            <Card.Body>              
              <Card.Text>КОЗЕРОГ (Макара)</Card.Text>
              <Card.Footer>
                <small className="text-muted">22 декабря - 21 января</small>
              </Card.Footer>
            </Card.Body>
          </Card>
          <Card style={{ width: '12rem' }}>
            <Link to="/oven"><Card.Img variant="top" src={vodoley} alt="vodoley" /></Link>
            <Card.Body>              
              <Card.Text>ВОДОЛЕЙ (Кумбха)</Card.Text>
              <Card.Footer>
                <small className="text-muted">22 января - 21 февраля</small>
              </Card.Footer>
            </Card.Body>
          </Card>
          <Card style={{ width: '12rem' }}>
            <Link to="/oven"><Card.Img variant="top" src={ribi} alt="ribi" /></Link>
            <Card.Body>              
              <Card.Text>РЫБЫ (Мина)</Card.Text>
              <Card.Footer>
                <small className="text-muted">22 февраля - 21 марта</small>
              </Card.Footer>
            </Card.Body>
          </Card>
        </CardGroup>
        
      </div> 
    )
  }
}


export default Main