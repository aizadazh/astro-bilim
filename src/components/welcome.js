import React, { Component } from "react";
import "./welcome.scss" 
import "./base.scss"

class Welcome extends Component {  
  render(){
    return (         
      <div className="container"> 
        <div className="welcome-base">           
          <Presentation />
          <Form />
        </div>    
      </div>
    )
  }
}
class Presentation extends Component {  
  render(){
    return (
      <div className="welcome">
        <h1 className="welcome__title">Хотите быть счастливым, успешным и здоровым!</h1>
        <h3 className="welcome__description">Гармонизируйте свою жизнь с помощью самопознания! Запишитесь на предварительную самодиагностику!</h3>        
      </div>
    )
  }
}

class Form extends Component {
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
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form-item">
          <input className="form__input" type="text" ref={(input) => this.input = input} name="name" placeholder="Ваше имя" required />
          <label className="label-item">Введите ваше имя</label>
        </div>
        <div className="form-item">
          <input className="form__input" type="tel" ref={(input) => this.input = input} pattern="(\+?\d[- .]*){7,13}" name="phone" placeholder="Телефон" required /> 
          <label className="label-item">Введите номер телефона</label>    
        </div>
        <div className="form-item">
          <input className="form__input" type="email" ref={(input) => this.input = input} name="email" placeholder="E-mail адрес" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" />
          <label className="label-item">Введите E-mail адрес</label> 
        </div>
        <div className="form-item">
          <input name="submit" type="submit" className="form__submit" value="ЗАПИСАТЬСЯ" />          
        </div>
      </form>
    )
  }
}
export default Welcome