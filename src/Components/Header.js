import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Modal, Form, Nav, Navbar, Badge } from "react-bootstrap";
import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs"
import { Cart } from "react-bootstrap-icons";
import { ProductContext } from "../contexts/productContext";


function Header() {
  const navigate = useNavigate();
  const { setShowSidebar, currentUser, currentUserId, cartProducts, setCartProducts, checkOut, setCheckOut } = useContext(ProductContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sidebarHandler = () => {
    setShowSidebar(true);
  };

  const deleteItem = (id) => {
    setCartProducts(cartProducts.filter(item => item.id !== id));
  }

  console.warn(currentUser + '  ' + currentUserId)
  console.log("cartProducts", cartProducts);

  setCheckOut(cartProducts.length > 0 ? true : false)

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
          <Form className="d-flex mx-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="headerButton" variant="outline-success">Search</Button>
          </Form>
          {
            currentUser !== null ? (
              <Nav.Link>
                <Button onClick={handleShow} variant="outline-success" className="mx-3 headerButton">
                  <Cart size={30} className="m-10 fa-solid fa-cart-shopping text-light" color="white" /><Badge bg="dark">({cartProducts.length})</Badge>
                </Button>
              </Nav.Link>
            ) : (
              <Button variant="outline-success" className="headerButton" onClick={() => navigate('/login')}>
                Login
              </Button>
            )}
        </Navbar.Collapse>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {cartProducts.length > 0 ?  <div id="Card-container">
            {
              cartProducts.map((item, index) => (
                <Card key={index} className="mx-2 mt-1">
                  <div style={{ border: 'none', width: '40vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginTop: '3vh' }}>
                    <Link to={`/product-details/${item.id}`} >
                      <Card.Img variant="top" src={item.image} style={{ height: '15vh', width: '10vh' }} />
                    </Link>
                    <Card.Body >
                      <Card.Title>{(item.title).slice(0, 18).concat("...")}</Card.Title>
                      <p>₹ {item.price}</p>
                    </Card.Body>
                  </div>
                  <Card.Footer className="d-flex justify-content-center">
                    <Button onClick={() => deleteItem(item.id)}><BsFillTrashFill />Delete from cart</Button>
                  </Card.Footer>

                </Card>

              ))
            }
          </div>
          : <h2><center>Cart is empty</center></h2>}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => navigate("/user-delivery-details")} disabled={!checkOut}>Check Out</Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default Header;
