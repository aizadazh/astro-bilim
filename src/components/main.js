import React, { Component } from "react";
import Section2 from "./section2.js";
import "./main.scss" 

class Main extends Component {  
  render(){
    return (
      <main className="main">
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
        <Section2 />
      </div> 
    )
  }
}

class Block2 extends Component {  
  render(){
    return (
      <div className="main__content2">
        <h2 className="display2">Веды. Ведические знания.</h2>
        <span className="text text__main">Ве́ды в переводе с санскрита वेद, véda — «знание», «наука». Насколько может установить современнная наука, ведические тексты это древнейшие писания Земли, которые были когда-либо найдены. Веды охватывают буквально всё, от особенностей человеческого существоания до устройства космоса и ответа на вопрос в чем смысл жизни. Как следует из самих текстов вед, в глубокой древности эти знания передавались устно в стихах, от учителя к ученику, а позже были записаны на древнем языке – санскрите. В настоящее время санскрит считается прародителем как минимум всех индо-европейских языков.</span>
      </div> 
    )
  }
}
class Block3 extends Component {  
  render(){
    return (
        <div className="main__content3">
            <h2 className="display2">Отзывы</h2>
            <span className="text text__main">Отзывы</span>
        </div>     
    )
  }
}

export default Main