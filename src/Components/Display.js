import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Display() {
  return (
    <Carousel>
    <Carousel.Item>
      <img id='carouselImg'
        className="d-block w-100"
        src="https://a.cdn-hotels.com/gdcs/production171/d1558/d5250534-92b6-413c-bedf-2b9ac96e96fe.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Find your desirable product</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item >
    <img id='carouselImg'
        className="d-block w-100"
        src="https://www.foodincanada.com/wp-content/uploads/2021/06/woman-grocery-shopping-beverages-2048x1365.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>All Products are at Discounted rate</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img id='carouselImg'
        className="d-block w-100"
        src="https://digital.com/wp-content/uploads/Scoopbyte.com_.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Many great deals</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}
export default Display;
