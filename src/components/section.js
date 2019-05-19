import React, { Component } from "react";
import "./section.scss" 

class Section extends Component {  
  render(){
    return (
      <div className="section">          
          <SubSection1 />
      </div>
    )
  }
}

class SubSection1 extends Component {  
  render(){
    return (
        <div className="subsection1">
            <h2 className="display2">Веды. Ведические знания.</h2>
            <span className="text text__section">Ве́ды в переводе с санскрита वेद, véda — «знание», «наука». Насколько может установить современнная наука, ведические тексты это древнейшие писания Земли, которые были когда-либо найдены. Веды охватывают буквально всё, от особенностей человеческого существоания до устройства космоса и ответа на вопрос в чем смысл жизни. Как следует из самих текстов вед, в глубокой древности эти знания передавались устно в стихах, от учителя к ученику, а позже были записаны на древнем языке – санскрите. В настоящее время санскрит считается прародителем как минимум всех индо-европейских языков.</span>
        </div>     
    )
  }
}


export default Section