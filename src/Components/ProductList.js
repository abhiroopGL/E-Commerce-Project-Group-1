import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import { ProductContext } from '../contexts/productContext';
import {Link} from "react-router-dom";

function ProductList() {

    const {productList} = useContext(ProductContext)
    return (
        <div id="Card-container">
            {
                productList.map((item,index) => (
                    <Card key={index} style={{ width: '40vh', diplay: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center', marginTop: '3vh' }}>
                         <Link to = {`/product-details/${item.id}`} > <Card.Img variant="top" src={item.image} style={{ height: '35vh', width: '28vh' }} /></Link>
                        <Card.Body style={{diplay: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
                            <Card.Title>{(item.title).slice(0, 18).concat("...")}</Card.Title>
                            <p>₹ {item.price}</p>
                            <Button variant="primary">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}

export default React.memo(ProductList);