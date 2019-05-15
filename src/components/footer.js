import React, { Component } from "react";
import { Container, Row, Col, Nav, NavItem } from "reactstrap";

class Footer extends Component{
  render(){
    return (
      <Container className="mt-3">
        <Row>
          <Col>
            <Nav vertical>
              <NavItem>Item 1</NavItem>
              <NavItem>Item 2</NavItem>
              <NavItem>Item 3</NavItem>
              <NavItem>Item 4</NavItem>
            </Nav>
          </Col>
          <Col>
            <Nav vertical>
              <NavItem>Item 1</NavItem>
              <NavItem>Item 2</NavItem>
              <NavItem>Item 3</NavItem>
              <NavItem>Item 4</NavItem>
            </Nav>
          </Col>
          <Col>
            <Nav vertical>
              <NavItem>Item 1</NavItem>
              <NavItem>Item 2</NavItem>
              <NavItem>Item 3</NavItem>
              <NavItem>Item 4</NavItem>
            </Nav>
          </Col>
          <Col>
            <Nav vertical>
              <NavItem>Item 1</NavItem>
              <NavItem>Item 2</NavItem>
              <NavItem>Item 3</NavItem>
              <NavItem>Item 4</NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Footer