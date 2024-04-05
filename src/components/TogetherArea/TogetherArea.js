import { togetherArea } from "@/data/togetherArea";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";

const { bg, tagline, title } = togetherArea;

const TogetherArea = ({ className = "" }) => {
  return (
    <section
      className={`together-area TogetherArea bannerdesktop bg_cover ${className}`}
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Container style={{maxWidth: '94%'}}>
        <Row>
          <Col lg={6}>
            <div className="together-content text-left">
              <h3 className="title">Call Us! <strong>1800-2355-2356</strong></h3>
            </div>
          </Col>
          <Col lg={6}>
            <div className="together-content" style={{textAlign: 'right'}}>
              <h3 className="title" style={{fontSize: '28px'}}>Follow us on</h3>
              <div className="footer-area" style={{paddingTop: '0px'}}>             
              <div className="footer-about">
              <ul>
                <li>
                  <Link href="#0">
                    <i className="fa fa-facebook-square"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#0">
                    <i className="fa fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#0">
                    <i className="fa fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#0">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </li>
                </ul>
                </div>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TogetherArea;
