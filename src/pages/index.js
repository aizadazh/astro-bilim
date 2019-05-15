import React, { Component } from "react";
import { Layout } from "../components";
import { Container, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Sidebar = () => (
  <Nav vertical>
    <NavItem>
      <NavLink className="nav-link" to="/">Index</NavLink>
    </NavItem>
    <NavItem>
      <NavLink className="nav-link" to="/about">About</NavLink>
    </NavItem>
    <NavItem>
      <NavLink className="nav-link" to="/catalog">Catalog</NavLink>
    </NavItem>
  </Nav>
)

class IndexPage extends Component{
  render(){
    return (
      <Layout
        sidebar={<Sidebar />}
      >
        <Container>
          <h1>
            IndexPage
          </h1>
        </Container>
      </Layout>
    )
  }
}
export default IndexPage;