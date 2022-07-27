import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import { ProductContext } from '../contexts/productContext';
import {Link} from "react-router-dom";
function ProductList() {

    const {productList, currentUserId, cartProducts, setCartProducts} = useContext(ProductContext)
    const  addToCart = (item) => {
        setCartProducts(prevCartProducts => {
            return [
              ...prevCartProducts, 
              item
            ]
          })
       
    }
    //console.log(cartProducts, "value");
    const viewCartProducts = () => {
        console.log("cart products", cartProducts)
    }
    return (
        <div id="Card-container">
            {
                productList.map((item, index) => (
                    <Card key={index} className="mx-2 mt-4" style={{ border: 'none', width: '40vh', diplay: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '3vh' }}>
                        <Link to={`/product-details/${item.id}`} >
                            <Card.Img variant="top" src={item.image} style={{ height: '35vh', width: '28vh' }} />
                        </Link>
                        <Card.Body style={{ diplay: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Card.Title>{(item.title).slice(0, 18).concat("...")}</Card.Title>
                            <p>₹ {item.price}</p>
                            <Button variant="primary" onClick = {() => {addToCart(item); }}>Add to Cart</Button>
                            <Button onClick={viewCartProducts}>view cart</Button>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}

export default React.memo(ProductList);