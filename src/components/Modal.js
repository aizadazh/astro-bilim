import React, { Component } from "react";
import "./modal.scss" 
import "./base.scss"
import "./button.scss"

class Modal extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            logModal: false,
            regModal: false,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        };
    
        this.openLogModal = this.openLogModal.bind(this);
        this.openRegModal = this.openRegModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
      }
    
        openLogModal(e) {
            e.preventDefault();
            this.setState({
                logModal: true,
                // regModal: false,
                email: '',
                password: '',
        })};
      
        openRegModal(e) {
            e.preventDefault();
            this.setState({
                // logModal: false,
                regModal: true,
                firstName: '',
                lastName: '',
                email: '',
                password: '',
        })};

        closeModal() {
            this.setState({                 
                logModal: false,
                regModal: false 
        })};

        handleChange = (e) => {
            this.setState({ 
                [e.target.name]: e.target.value 
        })};

        handleLoginSubmit(e) {
            e.preventDefault();
            // const innerState = {...this.state};
            // const dataToSend = JSON.stringify({              
            //     "email": innerState.email, 
            //     "password": innerState.password
            // })
        }
        handleRegistrationSubmit(e) {
            e.preventDefault();
            // const innerState = {...this.state};
            // const dataToSend = JSON.stringify({              
            //     "firstName": innerState.firstName, 
            //     "lastName": innerState.lastName,
            //     "email": innerState.email, 
            //     "password": innerState.password
            // })
        }
             
  render(){
    return (        
        <div className="modal-wrapper">
            <div className="log-reg">          
                <button onClick={this.openLogModal} className="btn btn__entry">Вход</button>
                <button onClick={this.openRegModal} className="btn btn__reg">Регистрация</button>
            </div>
            <div className="modal-window"> 
                <div className="log-modal" isOpen={this.state.logModal}>
                    <div className="modal-header">
                        <h2 className="display2">Вход</h2>                       
                    </div>
                    <form action="/login" method="post" className="form-group-content" onSubmit={this.handleLoginSubmit}>                        
                        <label className="label-info">Введите электронную почту</label>
                        <input className="modal-input"
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />                    
                        <label className="label-info">Введите пароль</label>
                        <input className="modal-input"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />                 
                    <div className="modal-footer">
                        <button type="submit">Вход</button>{' '}
                        <button onClick={this.closeModal}>Отмена</button>
                    </div>
                </form>
                </div>
            </div>
            <div className="modal-window"> 
                <div className="reg-modal" isOpen={this.state.regModal}>
                    <div className="modal-header">
                        <h2 className="display2">Регистрация</h2>
                    </div>
                        <form className="form-group-content" onSubmit={this.handleRegistrationSubmit}>                            
                            <label className="label-info">Имя</label>
                            <input className="modal-input"
                                type="text"
                                name="firstName"
                                placeholder="Имя"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                required
                            />                   
                            <label className="label-info">Фамилия</label>
                            <input className="modal-input"
                                type="text"
                                name="lastName"
                                placeholder="Фамилия"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                required
                            />                     
                            <label className="label-info">Email</label>
                            <input className="modal-input"
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            />                
                            <label className="label-info">Пароль</label>
                            <input className="modal-input"
                                type="password"
                                name="password"
                                placeholder="Пароль"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required
                            />                 
                        <div className="modal-footer">
                            <button type="submit">Регистрация</button>{' '}
                            <button onClick={this.closeModal}>Отмена</button>
                        </div>
                    </form>
                </div>           
            </div>
        </div>
    )
  }
}
export default Modal