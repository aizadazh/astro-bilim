import React, { Component } from "react";
import Welcome from "./Welcome";
import AstroPrediction from "./AstroPrediction";
import "./main.scss" 

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
        <AstroPrediction />
      </div> 
    )
  }
}

class Block2 extends Component {  
  render(){
    return (
      <div className="main__content2">
        <h2 className="display2">ГОРОСКОПЫ ЗВЕЗД</h2>
        <span className="text text__main">Ве́ды в переводе с санскрита वेद, véda — «знание», «наука». Насколько может установить современнная наука, ведические тексты это древнейшие писания Земли, которые были когда-либо найдены. Веды охватывают буквально всё, от особенностей человеческого существоания до устройства космоса и ответа на вопрос в чем смысл жизни. Как следует из самих текстов вед, в глубокой древности эти знания передавались устно в стихах, от учителя к ученику, а позже были записаны на древнем языке – санскрите. В настоящее время санскрит считается прародителем как минимум всех индо-европейских языков.</span>
      </div> 
    )
  }
}
class Block3 extends Component {  
  render(){
    return (
        <div className="main__content3">
            <h2 className="display2">СТАТЬИ</h2>
            <span className="text text__main">СТАТЬИ</span>
        </div>     
    )
  }
}

export default Main