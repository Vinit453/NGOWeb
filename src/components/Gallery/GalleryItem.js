import React from "react";
import { Col, Image } from "react-bootstrap";

const GalleryItem = ({ team = {} }) => {
  const { image, socials, name, tagline } = team;

  return (
    <Col lg={3} md={3}>
      <div className="team-item mt-30">
        <div className="team-thumb">
          <Image
            src={require(`src/assets/images/${image}`).default.src}
            alt="team"
          />
          
        </div>
        <div className="team-content text-center">
          <h5 className="title">{name}</h5>
          <span>{tagline}</span>
        </div>
      </div>
    </Col>
  );
};

export default TeamItem;
