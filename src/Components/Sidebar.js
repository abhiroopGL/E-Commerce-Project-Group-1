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
                        <Offcanvas.Title style={{fontSize: "30px"}}>Hello, {currentUser}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul style={{listStyle: "none", fontSize: "30px"}}  >
                            <li className="sidebarItem"><Link to = "/" className = "link">Home</Link></li>
                            <li className="sidebarItem"><Link to = "/" className = "link">About</Link></li>
                            <li className="sidebarItem"><Link to = "/" className = "link">Contact Us</Link></li>
                            <li className="sidebarItem"><Link to = "/login" className = "link">Log Out</Link></li>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </>
    )
}


export default Sidebar