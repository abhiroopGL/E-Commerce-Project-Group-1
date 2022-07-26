import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Offcanvas } from 'react-bootstrap';
import {ProductContext} from '../contexts/productContext'

function Sidebar() {
    const closeSidebar = () => setShowSidebar(false);

    const { showSidebar, setShowSidebar } = useContext(ProductContext);
    return (
        <>
            <Container className='p-4'>
                <Offcanvas show={showSidebar} onHide={closeSidebar}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Sidebar Title</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some dummy text, we can have any text or element at at this place.
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </>
    )
}


export default Sidebar