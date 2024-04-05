import { teamMainArea } from "@/data/teamArea";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TeamItem from "./TeamItem";

const options = {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  // pagination: {
  //   clickable: false,
  // },
  breakpoints: {
    1200: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  },
};

const TeamMainArea = ({ className = "", count = 4 }) => {
  return (
    <div className={`team-main-area bannerdesktop ${className}`} style={{backgroundColor: `#b8b8b8`}}>
      <Container style={{maxWidth: '90%'}}>
        <Row>
          <Col lg='3' md='3'>
              <div className="teamcard">
                <p>Volunteer</p>
                <h5 className="title">Our Team <br/>Members</h5>
                <h6>Volunteers Unite Lighting Up Lives, One Hesture of Care At A Time.</h6>
              </div>
          </Col>
          <Col lg='9' md='9'>
            <Row className="justify-content-center">
              {teamMainArea.slice(0, count).map((team) => (
                <TeamItem key={team.id} team={team} />
              ))}
            </Row>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
};

export default TeamMainArea;
