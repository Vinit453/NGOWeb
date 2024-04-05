import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-scroll";

const PortfolioItem = ({ portfolio = {}, className = "" }) => {
  const { image } = portfolio;
  return (
    <div className={`portfolio-item${className}`}>
      <Image src={require(`src/assets/images/${image}`).default.src} alt="" />
      <div className="portfolio-overlay">
      <a href="#" className="image-popup">
        {/* <a > */}
          <i className="flaticon-add"></i>
        {/* </a> */}
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
