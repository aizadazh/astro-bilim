import React, { Component } from "react";
import "./section2.scss" 

class Section2 extends Component {  
    render(){
      return (
        <div className="section">
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
        <h2 className="display2">НАТАЛЬНАЯ КАРТА</h2>        
      )
    }
  }
  class Subsection extends Component {  
    render(){
      return (
        <div className="subsection">
          <div className="subsection subsection__natal">
            <h3 className="display3">Зачем мне нужен гороскоп?</h3>
            <span className="subsection__natal-text">Натальная карта человека - это его карта жизни. В ней отражены взлеты и падения, легкие и сложные маршруты, преграды и обходные пути.
            Конечно, вы можете идти наугад и обретать богатый опыт собственных ошибок. Но мне кажется, есть в вашей жизни и более приятный маршрут.
            И астрология будет вам надежным другом. Помните, индивидуальный гороскоп — это надежный инструмент.
            </span>
          </div>
          <div className="subsection subsection__natal">
            <h3 className="display3">Что такое настоящий гороскоп?</h3>
            <span className="subsection__natal-text">Настоящий гороскоп — это точная карта звездного неба, составленная на момент рождения конкретного человека. При этом астролог учитывает место рождения и точное время рождения.  В астрологической (натальной) карте учитывается положение 9 планет, Солнца, Луны и астероидов. Конечно, сейчас карта составляется с помощью компьютера. А вот интерпретация гороскопа –  сложное и длительное занятие. Иногда я трачу 4-5 часов, чтобы сопоставить множество факторов, найти особые знаки. И тут компьютер — не помощник. Большая стопка толстых старых справочников и опыт — вот эффективные инструменты профессионального астролога.</span>
          </div>            
        </div> 
      )
    }
  }

  class Button extends Component {  
    render(){
      return (
        <button className="btn btn__horo btn__horo_active" type="submit">Рассчитать карту</button>          
      )
    }
  }
  export default Section2