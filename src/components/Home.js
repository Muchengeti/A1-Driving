import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HomeCarousel from './HomeCarousel.jsx';



class Home extends Component {
  render() {
    return (
        <div>
          <HomeCarousel></HomeCarousel>
          <div className="padding" style={{backgroundColor:"slategray", color:"white"}}>
            <br/>
            <h2 className="text-center">Wellington | Hutt | Porirua</h2>
            <br/>
          </div>
          <br/>
          <Container>
            <Row>
              <Col xs={8}>
                 <Jumbotron className="text-center">
                  <h1>Driver Training & Specialists</h1>
                  <hr/>
                  <p className="lead">
                  We are the name that people in the greater Wellington area have trusted in driver education for over 35 years.
                  Selecting a good Driving School is one of the most important decisions you will make. Driving is potentially risky,
                  so it’s vital that you find a Driving School that cares as much about safety as you do. After you have researched driver education programmes, 
                  you’ll find that A1 Driving School is the right choice for you.
                  </p>
                  <p>
                    <Button variant="warning" size="lg">Book Online Now</Button>
                  </p>
                  <p>Or Call</p>
                  <h3>02102644493</h3>
                </Jumbotron>
              
                <Jumbotron className="container-fluid padding text-center">
                  <h1 className="text-center col-12">Special Offers</h1>
                  <hr/>
                    <div className="lead">
                      <p>Student discount: $65 - driving lessons only</p>
                      <p>Street Talk defensive driving courses $170 per person</p>
                      <p>Next available course March 2020</p>
                    </div>
                </Jumbotron>
              </Col>

              <Col xs={4} className="text-center">
              {/* <CardGroup> */}
                <Card bg="warning" text="black">
                  {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                  <Card.Body>
                    <Card.Title>Driving Lessons</Card.Title>
                    <Card.Text>
                      We offer driving lessons for those preparing for restricted and full licence tests.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted"><Button variant="outline-dark">Explore</Button></small>
                  </Card.Footer>
                </Card>
                <br/>
                <Card bg="warning" text="black">
                  {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                  <Card.Body>
                    <Card.Title>Defensive Driving</Card.Title>
                    <Card.Text>
                    Reduce time on your restricted drivers licence with our Street Talk 
                    NZTA-approved advanced driving skills course.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted"><Button variant="outline-dark">Explore</Button></small>
                  </Card.Footer>
                </Card>
                <br/>
                <Card bg="warning" text="black">
                  {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                  <Card.Body>
                    <Card.Title>Disability Training</Card.Title>
                    <Card.Text>
                    A1 Driving School has made a commitment to helping those drivers who have a disability 
                    and want to drive.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted"><Button variant="outline-dark">Explore</Button></small>
                  </Card.Footer>
                </Card>
                <br/>
                <Card bg="warning" text="black">
                  {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                  <Card.Body>
                    <Card.Title>Road Code Tuition</Card.Title>
                    <Card.Text>
                      Let us help you prepare for the learners Licence Test with our personalized Road Code tuition.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted"><Button variant="outline-dark">Explore</Button></small>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </Container>
          
        </div>
    );
  }
}

export default Home;