import React, { Component } from "react";
import { Modal, Button, FormGroup, FormLabel, FormControl  } from "react-bootstrap";
require("react-bootstrap/ModalHeader");
require("react-bootstrap/ModalFooter");
require("react-bootstrap/ModalBody");
require("react-bootstrap/ModalTitle");
require("react-bootstrap/ModalDialog");

class ModalWindow extends Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render(){
        return (
            <>            
            <Button variant="btn btn-light" onClick={this.handleShow}>Вход</Button>
            <Button variant="btn btn-dark mr-3" onClick={this.handleShow}>Регистрация</Button>          
            <Modal.Dialog>
                <Modal 
                    show={this.state.show} 
                    onHide={this.handleClose}                      
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title">
                    <Modal.Header closeButton>
                        <Modal.Title>Вход</Modal.Title>
                    </Modal.Header>                       
                    <Modal.Body>
                        <FormGroup>
                            <FormLabel>Email</FormLabel>
                            <FormControl
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="Email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Пароль</FormLabel>
                            <FormControl
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                placeholder="Пароль"
                            />
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light" onClick={this.handleClose}>Войти</Button>
                        <Button variant="dark" onClick={this.handleClose}>Отмена</Button>
                    </Modal.Footer>                   
                </Modal>
            </Modal.Dialog>
            <Modal.Dialog>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                        Регистрация
                        </Modal.Title>
                    </Modal.Header>                            
                    <Modal.Body>
                        <FormGroup>
                            <FormLabel>Имя</FormLabel>
                            <FormControl
                                type="text"
                                name="firstName"
                                placeholder="Имя"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Фамилия</FormLabel>
                            <FormControl
                                type="text"
                                name="lastName"
                                placeholder="Фамилия"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Email</FormLabel>
                            <FormControl
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Пароль</FormLabel>
                            <FormControl
                                type="password"
                                name="password"
                                placeholder="Пароль"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required
                            />
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="dark" onClick={this.handleClose}>Регистрация</Button>
                        <Button variant="light" onClick={this.handleClose}>Отмена</Button>
                    </Modal.Footer>                       
                </Modal>
            </Modal.Dialog>
           </>
        )
    }
}
  
export default (ModalWindow)  