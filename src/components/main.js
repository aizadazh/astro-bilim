import React, { Component } from "react";
import Welcome from "./Welcome";
import OnlineHoro from "./OnlineHoro";
import "./main.scss";
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
import artimg from "../images/11.jpg";
import artimg2 from "../images/2.jpg";

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
              <div className="article-section">
                <img src={artimg} alt="artimg"/>
                <div className="article-info"> 
                  <h3>Как найти астролога?</h3>
                  <p>Тот, кто задался целью найти астролога уже стоит на правильном пути. Пути к изменению и улучшению своей жизни. Понимание этого уже ведет к личностному росту. Как найти хорошего астролога и где, в современном мире тоже не проблема. Вопрос стоит по-другому – найти одного, но того. Здесь важен и эмоциональный контакт и внутренняя честность. Только в парной работе можно разобраться в себе и направить свой Дух по кармическому пути без сожаления и сомнений. Найдя именно своего астролога, вы сможете понять все нюансы личного гороскопа, людей и обстоятельств в вашей жизни. Не очень разумно пытаться менять других, потому что изменяя себя (но не изменяя себе), мы приходим к неограниченным возможностям в жизни, понимая те глупости, которые уже сделаны. Это понимание и внутренняя честность в будущем позволят нам обойти ловушки, расставленные в нашем гороскопе. Ищите астролога, с которым вам будет комфортно общаться, и вы его обязательно найдете. Более подробно про услуги астролога читайте на главной странице сайта.</p>
                </div>
              </div> 
              <div className="article-section">
                <img src={artimg2} alt="artimg2"/>
                <div className="article-info"> 
                  <h3>Астрология и мир</h3>
                  <p>Астрология показывает как работает мир. Как проявляется энергия мироздания: направление и цикличность. Позволяет познавать физическую плоскость и себя. Астрология дает возможность прогнозировать взаимодействие отдельных частей проявленного мира с единой реальностью, а также между собой. Эта наука является ключом к тайне бытия и позволяет ответить на множество вопросов, волнующих ум человека. Астрологическое учение достигло вершины развития несколько десятков тысяч лет назад. Древняя астрология основывалась на геоцентрической модели мира, все положения планет рассматривались с позиции земного наблюдателя. Принятие системы Коперника вызвало расхождение между астрологической традицией и астрономической наукой, которое сохраняется и сегодня. Современная астрология делится на следующие основные разделы:
Кармическая астрология (влияние кармы, проблемы рода, жизненный путь);
Натальная астрология (влияние планет, знаков, звезд на человека);
Хорарная астрология (рассмотрение карты составленной на момент вопроса);
Элективная астрология (для прогноза подходящего момента для действия);
Мунданная астрология (астрология больших эгрегоров: города, регионы, страны)
Медицинская астрология (вопросы здоровья).</p>
                </div>
              </div>             
              
            </div>
        </div>     
    )
  }
}

export default Main