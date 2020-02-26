import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Footer extends Component {
  render() {
    return (
        <div className="text-center" style={{backgroundColor:"slategray", color:"white"}}>
            <br/>
            <Container>
                <Row>
                <Col xs={4}>
                    <h4>Location</h4>
                    <hr style={{backgroundColor:"white"}}/>
                    <p>101A Freyberg Street,</p>
                    <p>Lyall Bay,</p>
                    <p>Wellington 6022</p>
                </Col>
                <Col xs={4}>
                    <h4>Hours</h4>
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
                    <h4>Quick Links</h4>
                    <hr style={{backgroundColor:"white"}}/>
                    <a href="/" style={{color:"white"}}>Home</a>
                    <br/>
                    <br/>
                    <a href="/About" style={{color:"white"}}>About</a>
                    <br/>
                    <br/>
                    <a href="/Contact" style={{color:"white"}} >Contact</a>
                </Col>
                </Row>
            </Container>
            <div style={{backgroundColor:"dimgray"}}>
                <br/>
                <p style={{margin:0}}>A1 Driving School Wellington · © 2020 · All Rights Reserved</p>
                <br/>
            </div>
        </div>
    );
  }
}

export default Footer;