import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import { ProductContext } from '../contexts/productContext';

function ProductList() {

    const {productList} = useContext(ProductContext)
    console.warn(productList)
    return (
        <div id="Card-container">
            {
                productList.map((item,index) => (
                    <Card key={index} style={{ width: '40vh', diplay: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center', marginTop: '3vh' }}>
                        <Card.Img variant="top" src={item.image} style={{ height: '35vh', width: '28vh' }} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Button variant="primary" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>Add to Cart</Button>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}

export default ProductList;