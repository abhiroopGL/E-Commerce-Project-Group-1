import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsList } from "react-icons/bs";

import NavDropdown from "react-bootstrap/NavDropdown";
import { CartPlus } from "react-bootstrap-icons";
import { ProductContext } from "../contexts/productContext";
import * as Icon from 'react-bootstrap-icons';
function Header() {
  const { setShowSidebar } = useContext(ProductContext);

  const sidebarHandler = () => {
    setShowSidebar(true);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" id="header">
      <Container fluid>
      <Nav.Link href="#">
            <BsList size={30} onClick={sidebarHandler} className="mx-3" color="green" />
          </Nav.Link>
        <Navbar.Brand href="/" >
          MyExcelShop.in
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>

            <Nav.Link href="#action2">About</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link href="#">
            <CartPlus size={30} width="15vh" className="m-10" color="green" />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
