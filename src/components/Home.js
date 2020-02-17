import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

class Home extends Component {
  render() {
    return (
        <div>

          <div className="text-center">
            <h2>Welcome A1 Driving School</h2>
            <h4>You’ve come to the right place for your driver education!</h4>
          </div>

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
              <Button variant="primary">Learn More</Button>
            </p>
          </Jumbotron>
          <div className="container-fluid padding text-center">
            <h1 className="text-center col-12">Our Services</h1>
            
            <br/>
            <CardGroup>
              <Card>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>Driving Lessons</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted"><Button variant="primary">Learn More</Button></small>
                </Card.Footer>
              </Card>
              <Card>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>Defensive Driving</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted"><Button variant="primary">Learn More</Button></small>
                </Card.Footer>
              </Card>
              <Card>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>Disability Training</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted"><Button variant="primary">Learn More</Button></small>
                </Card.Footer>
              </Card>
              <Card>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>Road Code Tuition</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted"><Button variant="primary">Learn More</Button></small>
                </Card.Footer>
              </Card>
            </CardGroup>
            <br/>
            <br/>
          </div>

          <Jumbotron className="container-fluid padding text-center">
            <h1 className="text-center col-12">Special Offers</h1>
            <hr/>
              <div className="lead">
                <p>Student discount: $65 - driving lessons only</p>
                <p>Street Talk defensive driving courses $170 per person</p>
                <p>Next available course March 2020</p>
              </div>
          </Jumbotron>
        </div>
    );
  }
}

export default Home;