import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'


class About extends Component {
  render() {
    return (
        <div>
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
              <h1>About Us</h1>
              <br/>
              <p style={{lineHeight: 3}}>
                  A1 Driving School began operation in 1982 with a commitment to providing quality Driver Education at a 
                  reasonable cost. Focusing mainly in the class 1 driver licencing area, but with links to other quality 
                  course providers for other classes of licence. A1 Driving School consists of Wayne & Christine Young as 
                  proprietors and a team of contract Driving Instructors who are approved by the N.Z Transport Agency, 
                  for this purpose. Wayne and Christine Young are members of the New Zealand Institute of Driver Educators 
                  and actively support the driver educator industry. A1 is currently servicing the Wellington, Hutt, 
                  and Porirua areas. A1 currently provides a wide range of Driver Education Services.
                </p>
            </Carousel.Caption>
          </Carousel.Item>
  
        </Carousel>
      </div> 

            <Container>
                <Row>
                    <Col xs={8}>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}

export default About;