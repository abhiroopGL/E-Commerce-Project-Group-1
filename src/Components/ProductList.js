import React, { useContext, useState } from 'react'
import { Card, Button, Dropdown } from 'react-bootstrap'
import { ProductContext } from '../contexts/productContext';
import { Link } from "react-router-dom";
function ProductList() {


    const { productList, cartProducts, setCartProducts, setCheckOut, counter, setCounter } = useContext(ProductContext)
    const addToCart = (item) => {

        setCartProducts(prevCartProducts => {
            return [
                ...prevCartProducts,item
            ]
        })
        console.log(counter, "counter")

    }


    setCheckOut(cartProducts.length > 0 ? true : false);

    return (
        <>

            <div id="Card-container">
                {

                    productList.map((item, index) => (

                        <Card key={index} className="mx-2 mt-4 pt-2 productCard">

                            <Link to={`/product-details/${item.id}`} >
                                <Card.Img variant="top" src={item.image} style={{ height: '35vh', width: '28vh' }} />
                            </Link>
                            <Card.Body className='cardBody'>
                                <Card.Title>{(item.title).slice(0, 18).concat("...")}</Card.Title>
                                <p>₹ {item.price}</p>
                                <div>
                                    <Button variant="primary" onClick={() => { addToCart(item); }}>Add to Cart</Button>

                                </div>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
            {console.log(cartProducts)}
        </>
    )
}

export default React.memo(ProductList);