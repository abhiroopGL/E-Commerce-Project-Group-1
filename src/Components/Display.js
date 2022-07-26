import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Display() {
  return (
    <Carousel>
    <Carousel.Item>
      <img id='carouselImg'
        className="d-block w-100"
        src="https://placeimg.com/1080/500/fashion"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Find your desirable product</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item >
    <img id='carouselImg'
        className="d-block w-100"
        src="https://placeimg.com/1080/500/market"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img id='carouselImg'
        className="d-block w-100"
        src="https://placeimg.com/1080/500/clothes"
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
