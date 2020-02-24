import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Footer extends Component {
  render() {
    return (
        <div className="text-center" style={{backgroundColor:"black", color:"white"}}>
            {/* <h2>Friendly, helpful assistance with no obligation</h2> */}
            <br/>
            <Container>
                <Row>
                <Col xs={4}>
                    <h5>Location</h5>
                    <hr style={{backgroundColor:"white"}}/>
                    <p>101A Freyberg Street</p>
                    <p>Lyall Bay</p>
                    <p>Wellington 6022</p>
                </Col>
                <Col xs={4}>
                    <h5>Hours</h5>
                    <hr style={{backgroundColor:"white"}}/>
                    <p>Monday 7:30 am - 6:00 pm</p>
                    <p>Tuesday 7:30 am - 6:00 pm</p>
                    <p>Wednesday 7:30 am - 6:00 pm</p>
                    <p>Thursday 7:30 am - 6:00 pm</p>
                    <p>Friday 7:30 am - 6:00 pm</p>
                    <p>Saturday 7:30 am - 1:00 pm</p>
                    <p>Sunday closed</p>
                </Col>
                <Col xs={4}>
                    <h5>Quick Links</h5>
                    <hr style={{backgroundColor:"white"}}/>
                    <a href="/">Home</a>
                    <br/>
                    <br/>
                    <a href="/">About</a>
                    <br/>
                    <br/>
                    <a href="/">Contact</a>
                </Col>
                </Row>
            <p>© 2020 . A1 Driving School Wellington . All Rights Reserved .</p>
            </Container>
            </div>
    );
  }
}

export default Footer;