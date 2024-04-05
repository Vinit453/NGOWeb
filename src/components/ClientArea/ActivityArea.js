import { clientArea } from "@/data/clientArea";
import React from "react";
import { Container, Image } from "react-bootstrap";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import banner from "@/images/logo.png";

const ActivityArea = () => {
  return (
    <Container style={{marginTop: '30%'}}>
        <section>
        <Row xs={1} md={2} className="g-4">
        {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
            <h4>Feb 2024</h4>
            <Col lg="2" xs="2" className="date">
                24 Feb
            </Col>
            <Col lg="10" xs="10">
            <Card style={{backgroundColor: '#fafafa'}}>
                <Row style={{alignItems: 'center'}}>
                    <Col lg="4" xs="4">
                        <Image src={banner.src} alt="mobile banner" />
                    </Col>
                    <Col lg="8" xs="8">
                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}
                            <Card.Text>
                                2024I just joined this SanjivaniNGO app,and Im amazed by the incrediblerange of causes and projects I cansupport.
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            </Col>

            <h4>Jan 2024</h4>
            <Col lg="2" xs="2" className="date">
                24 Jan
            </Col>
            <Col lg="10" xs="10">
            <Card style={{backgroundColor: '#fafafa'}}>
                <Row style={{alignItems: 'center'}}>
                    <Col lg="4" xs="4">
                        <Image src={banner.src} alt="mobile banner" />
                    </Col>
                    <Col lg="8" xs="8">
                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}
                            <Card.Text>
                                Its empowering to be a part of thiscommunity-driven movement. Let smake a positive impact together!#sanjivaniNGoForGoodFinding
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            </Col>

            <h4>December 2023</h4>
            <Col lg="2" xs="2" className="date">
            15 Dec
            </Col>
            <Col lg="10" xs="10">
            <Card style={{backgroundColor: '#fafafa'}}>
                <Row style={{alignItems: 'center'}}>
                    <Col lg="4" xs="4">
                        <Image src={banner.src} alt="mobile banner" />
                    </Col>
                    <Col lg="8" xs="8">
                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}
                            <Card.Text>
                                Finding new projects to support onthis SanjivaniNGO app has becomemy favorite activity
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            </Col>

            
            <Col lg="2" xs="2" className="date">
            12 Dec
            </Col>
            <Col lg="10" xs="10">
            <Card style={{backgroundColor: '#fafafa'}}>
                <Row style={{alignItems: 'center'}}>
                    <Col lg="4" xs="4">
                        <Image src={banner.src} alt="mobile banner" />
                    </Col>
                    <Col lg="8" xs="8">
                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}
                            <Card.Text>
                                Finding new projects to support onthis SanjivaniNGO app has becomemy favorite activity
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            </Col>


            <Col lg="2" xs="2" className="date">
            10 Dec
            </Col>
            <Col lg="10" xs="10">
            <Card style={{backgroundColor: '#fafafa'}}>
                <Row style={{alignItems: 'center'}}>
                    <Col lg="4" xs="4">
                        <Image src={banner.src} alt="mobile banner" />
                    </Col>
                    <Col lg="8" xs="8">
                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}
                            <Card.Text>
                                2024I just joined this SanjivaniNGO app,and I m amazed by the incrediblerange of causes and projects I cansupport.
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            </Col>
            <h4>November 2023</h4>
            <Col lg="2" xs="2">
            12 Dec
            </Col>
            <Col lg="10" xs="10">
            <Card style={{backgroundColor: '#fafafa'}}>
                <Row style={{alignItems: 'center'}}>
                    <Col lg="4" xs="4">
                        <Image src={banner.src} alt="mobile banner" />
                    </Col>
                    <Col lg="8" xs="8">
                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}
                            <Card.Text>
                                2024I just joined this SanjivaniNGO app,and I m amazed by the incrediblerange of causes and projects I cansupport.
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            </Col>
        {/* ))} */}
        </Row>
        </section>
    </Container>

    
  );
};

export default ActivityArea;
