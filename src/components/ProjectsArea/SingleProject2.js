import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";

const SingleProject2 = ({ project = {} }) => {
  const { image, category, date, title, goal, raised } = project;

  return (
    <div className="explore-projects-item mt-30">
      <div className="explore-projects-thumb">
        <Image src={image.src} alt="explore-projects" />
        <span>Tax Benefit</span>
        <a href="#" >
        {/* <a> */}
          Urgent
        {/* </a> */}
        </a>
      </div>
      <div className="explore-projects-content">
        <Link href="/single-project" style={{height: '120px'}}>
          <h3 className="title">{title}</h3>
        </Link>

        <div className="projects-category" style={{textAlign: 'center', marginTop: '10px', marginBottom: '10px'}}>

          <p style={{marginBottom: '10px'}}>By Sanjivani NGO</p> 
          <Link href="/single-project" className="btn btn-default" style={{borderRadius: '20px', borderColor: '#000000', marginRight: '20px'}}>
            <i className="fa fa-whatsapp"></i> Share
          </Link>

          <Link href="/single-project" className="btn btn-default" style={{borderRadius: '20px', borderColor: '#000000', marginLeft: '20px'}}>
            <i className="fa fa-facebook"></i> Share
          </Link>
        </div>

        <div className="projects-range">
          <div className="projects-range-content">
            <ul>
              <li>Raised:</li>
              <li>{raised}%</li>
            </ul>
            <div className="range"></div>
          </div>
        </div>
        <div className="projects-goal">
          <span>
            Goal: <span>&#8377; {goal}</span>
          </span>
          <span style={{float: 'right'}}>
              <i className="fa fa-clock-o"></i> {date}
          </span>
        </div>
        <div className="projects-category" style={{textAlign: 'center', marginTop: '15px'}}>          
          <Link href="/single-project" className="btn btn-primary btn-lg" style={{borderRadius: '20px', borderColor: '#000000'}}>
            Donate
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SingleProject2;
