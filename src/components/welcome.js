import React, { Component } from "react";
import "./welcome.scss" 
import "./base.scss"

class Welcome extends Component {  
  render(){
    return (         
        <div>            
            <Presentation />
            <Form />    
        </div>
    )
  }
}
class Presentation extends Component {  
  render(){
    return (
      <div className="welcome">
        <h1 className="welcome__title">Гармонизируйте свою жизнь с помощью самопознания</h1>
        <h3 className="welcome__description">Лучшая работа - это работа над собою! Лучшая победа- это победа над собою!</h3>        
      </div>
    )
  }
}

class Form extends Component {  
  render(){
    return (
      <form className="form" action="">
        <input className="form__input" type="text" name="name" placeholder="Ваше имя" required />
        <label for="name">Введите ваше имя</label>
        <input className="form__input" type="tel" pattern="(\+?\d[- .]*){7,13}" name="phone" placeholder="Телефон" required /> 
        <label for="name">Введите номер телефона</label>    
        <input className="form__input" type="email" name="email" placeholder="E-mail адрес" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" />
        <input name="submit" type="submit" className="form__submit" value="ЗАПИСАТЬСЯ" />
      </form>
    )
  }
}
export default Welcome