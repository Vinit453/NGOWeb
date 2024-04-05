import { galleryPage } from "@/data/portfolioArea";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PortfolioItem from "./PortfolioItem";

const GalleryPage = () => {
  return (
    <div className="gallery-page-area bannerdesktop">
      <Container style={{maxWidth: '95%'}}>
        <div className="categories-content">  
            <h5 className="title" style={{color: '#000000'}}>Gallery</h5>
            <p></p>
        </div>
        <Row>
          {galleryPage.map((portfolio) => (
            <Col key={portfolio.id} lg={3} md={3} sm={6}>
              <PortfolioItem portfolio={portfolio} className=" mt-30" />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default GalleryPage;
