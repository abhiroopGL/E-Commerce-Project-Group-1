import React, { useContext } from 'react'
import { Card, Button, Dropdown } from 'react-bootstrap'
import { ProductContext } from '../contexts/productContext';
import { Link } from "react-router-dom";
import CounterInput from 'react-bootstrap-counter';
function ProductList() {
 

    const { productList, cartProducts, setCartProducts, setCheckOut, counter, setCounter } = useContext(ProductContext)
  
    const addToCart = (item) => {
        
        setCartProducts(prevCartProducts => {
            return [
                ...prevCartProducts,
                {
                    ...item,
                    quantity: counter[item.id]
                }
            ]
        })
        console.log(counter, "counter")

    }





    const itemCounter = (index, val) => {
    
        setCounter(existingItems => {
            return existingItems.map((item, j) => {
                return j === index ? val : item
            })
        })
    }

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
                                <Button variant="primary" onClick={() => { addToCart(item); }}>Add to Cart</Button>

                                <div style={{
                                    display: 'block',
                                    width: 700,
                                    padding: 30
                                }}>

                                    <Dropdown>
                                        <Dropdown.Toggle variant="success">
                                           1
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => itemCounter(item.id, 1)}>
                                                1
                                            </Dropdown.Item >
                                            <Dropdown.Item onClick={() => itemCounter(item.id, 2)}>
                                                2
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => itemCounter(item.id, 3)}>
                                                3
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => itemCounter(item.id, 4)}>
                                                4
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => itemCounter(item.id, 5)}>
                                                5
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                 
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