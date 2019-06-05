import React, { Component } from "react";
import Welcome from "./Welcome";
import OnlineHoro from "./OnlineHoro";
import "./main.scss"
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

class Main extends Component {  
  render(){
    return (
      <main className="main">
        <Welcome />
        <Block1 />
        <Block2 />
        <Block3 />                
      </main>
    )
  }
}

class Block1 extends Component {  
  render(){
    return (
      <div className="main__content1">        
        <OnlineHoro />
      </div> 
    )
  }
}

class Block2 extends Component {  
  render(){
    return (
      <div className="main__content2">
        <h2 className="display2">ВОСХОДЯЩИЕ ЗНАКИ</h2>
        <div className="zodiaks">
          <img src={oven} alt="oven" />
          <img src={telets} alt="telets" />
          <img src={bliznetsi} alt="bliznetsi" />
          <img src={rak} alt="rak" />
          <img src={lev} alt="lev" />
          <img src={deva} alt="deva" />
          <img src={vesi} alt="vesi" />
          <img src={scorpion} alt="scorpion" />
          <img src={strelets} alt="strelets" />
          <img src={kozerog} alt="kozerog" />
          <img src={vodoley} alt="vodoley" />
          <img src={ribi} alt="ribi" />
        </div>
        
      </div> 
    )
  }
}
class Block3 extends Component {  
  render(){
    return (
        <div className="main__content3">
            <h2 className="display2">СТАТЬИ</h2>
            <div className="article-box">
              <h3>Title</h3>
              



            </div>
        </div>     
    )
  }
}

export default Main