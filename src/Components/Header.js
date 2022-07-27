import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import {BsFillTrashFill} from "react-icons/bs"

//import NavDropdown from "react-bootstrap/NavDropdown";
import { CartPlus } from "react-bootstrap-icons";
import { ProductContext } from "../contexts/productContext";
//import * as Icon from 'react-bootstrap-icons';
function Header() {
  const { setShowSidebar, currentUser, currentUserId, cartProducts, setCartProducts } = useContext(ProductContext);
  console.log("cartProducts", cartProducts);
  const sidebarHandler = () => {
    setShowSidebar(true);
  };
  console.warn(currentUser + '  ' + currentUserId)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteItem = (id) => {
    setCartProducts(cartProducts.filter(item => item.id !== id));
  }
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark" expand="lg" id="header">
      <Container fluid>
      <Nav.Link href="#">
            <BsList size={30} onClick={sidebarHandler} className="mx-3" color="white" />
          </Nav.Link>
        <Navbar.Brand href="/" >
          MyShop.in
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >

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
          {
            currentUser !== null ? (
              <Nav.Link>
                <Button onClick={handleShow} className="mx-3">
                  <CartPlus size={30} width="12vh" className="m-10 fa-solid fa-cart-shopping text-light" color="white" />
                </Button>
              </Nav.Link>
            ) : (
              <Link to={`/login`} style={{ width: '15vh', textDecoration: 'none', color: 'white' }}>
                Login
              </Link>
            )}
        </Navbar.Collapse>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div id="Card-container">
            {
                cartProducts.map((item, index) => (
                    <Card key={index} className="mx-2 mt-4" style={{ border: 'none', width: '40vh', diplay: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '3vh' }}>
                        <Link to={`/product-details/${item.id}`} >
                            <Card.Img variant="top" src={item.image} style={{ height: '35vh', width: '28vh' }} />
                        </Link>
                        <Card.Body >
                            <Card.Title>{(item.title).slice(0, 18).concat("...")}</Card.Title>
                            <p>₹ {item.price}</p>
                            <Button onClick = {() => deleteItem(item.id)}><BsFillTrashFill/>Delete from cart</Button>
                                                      
                        </Card.Body>
                    </Card>
                ))
            }
        </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>navigate("/user-delivery-details")}>Check Out</Button> 
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default Header;
