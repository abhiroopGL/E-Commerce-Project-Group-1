import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Offcanvas } from 'react-bootstrap';
import {ProductContext} from '../contexts/productContext'
import {Link} from "react-router-dom";
import '../App.css'

function Sidebar() {
    const closeSidebar = () => setShowSidebar(false);

    const { showSidebar, setShowSidebar, currentUser } = useContext(ProductContext);
    return (
        <>
            <Container className='p-4 bg-dark' >
                <Offcanvas show={showSidebar} onHide={closeSidebar} className = "bg-dark text-white">
                    <Offcanvas.Header closeButton >
                        <Offcanvas.Title style={{fontSize: "30px"}} >MyExcelShop</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
<<<<<<< HEAD
                        Some dummy text, we can have any text or element at at this place.
                        {currentUser}
=======
                        <ul style={{listStyle: "none", fontSize: "30px"}}  >
                        <li > <Link to = "/" className = "link">Home</Link></li>
                            <li><Link to = "/" className = "link">About</Link></li>
                            <li><Link to = "/" className = "link">Contact Us</Link></li>
                            <li><Link to = "/login" className = "link">Log Out</Link></li>

                        </ul>
>>>>>>> c4f2c161d177a3b63d50cd56633a97de4b3a1595
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </>
    )
}


export default Sidebar