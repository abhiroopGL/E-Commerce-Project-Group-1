import React, { useContext } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../contexts/productContext';

function ThanksForShopping() {
  const { setCartProducts } = useContext(ProductContext);
  const navigate = useNavigate();
  const handleClick = () => {
    setCartProducts([]);
    navigate("/");
  }
  return (
    <div id='thanksLayout'>

      <Alert variant="success" style={{ padding: "50px", width: "80%" }}>
        <Alert.Heading><h1>Thanks for Shopping with us.</h1></Alert.Heading>
        <p>
          Hope you like our products.
        </p>
        <hr />
        <p className="mb-0">
          Don't forget to give review to our products. Your feeback is our top priority.
        </p>
      </Alert>
      <Button onClick={handleClick}>Continue Shopping</Button>
    </div>
  );
}

export default ThanksForShopping;