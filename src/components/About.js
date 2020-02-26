import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'


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
              <h1 className="text-left">About Us</h1>
              <br/>
              <h5 className="text-left"style={{lineHeight: 2}}>
                  A1 Driving School began operation in 1982 with a commitment to providing quality Driver Education at a 
                  reasonable cost. Focusing mainly in the class 1 driver licencing area, but with links to other quality 
                  course providers for other classes of licence. A1 Driving School consists of Wayne & Christine Young as 
                  proprietors and a team of contract Driving Instructors who are approved by the N.Z Transport Agency, 
                  for this purpose. Wayne and Christine Young are members of the New Zealand Institute of Driver Educators 
                  and actively support the driver educator industry. A1 is currently servicing the Wellington, Hutt, 
                  and Porirua areas. A1 currently provides a wide range of Driver Education Services.
                </h5>
            </Carousel.Caption>
          </Carousel.Item>
  
        </Carousel>
      </div> 
          <br/>
            <div className="container-fluid padding text-center">
                <h1>Our Team</h1>
                <hr/>
                <Row>
                    <Col xs={12}>
                        <CardDeck>
                            <Card>
                                <Card.Img variant="top" src="team1 copy.png" />
                                <Card.Body>
                                <Card.Title>Jean Cooper</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <h3>Mobile</h3><Button size="lg" variant="warning">0210256433</Button>
                                </Card.Footer>
                            </Card>
                            <Card> 
                                <Card.Img variant="top" src="team2 copy.png" />
                                <Card.Body>
                                <Card.Title>Michael Scott</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <h3>Mobile</h3><Button size="lg" variant="warning">0277764553</Button>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="team3 copy.png" />
                                <Card.Body>
                                <Card.Title>Sally Scott</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <h3>Mobile</h3><Button size="lg" variant="warning">0277764553</Button>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
                </div>
                <br/>
        </div>
    );
  }
}

export default About;