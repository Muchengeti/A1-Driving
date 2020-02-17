import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class HomeCarousel extends Component {
  render() {
    return (
      <div className="carousel-inner" role="listbox" style={{maxWidth:"auto", maxHeight:"600px"}}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="driving-1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
  
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="driving-2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
  
        </Carousel>
      </div>
    );
  }
}

export default HomeCarousel;