import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

class HomeCarousel extends React.Component {
  render() {
    return (
      <div className="carousel-inner" role="listbox">
        <Carousel style={{maxHeight:"500px", width:"100%"}}>
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src="driving-1.jpg"
              alt="First slide"
            />
            <Carousel.Caption style={{top:0}}>
              <h2>Welcome to A1 Driving School</h2>
              <p>You’ve come to the right place for your driver education!</p>
            </Carousel.Caption>
          </Carousel.Item> */}
  
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="driving-blur3.png"
              alt="Third slide"
            />

            <Carousel.Caption style={{top:0}}>
              <h1>Welcome to A1 Driving School</h1>
              <h4>You’ve come to the right place for your driver education!</h4>
            </Carousel.Caption>
          </Carousel.Item>
  
        </Carousel>
      </div>
    );
  }
}

export default HomeCarousel;