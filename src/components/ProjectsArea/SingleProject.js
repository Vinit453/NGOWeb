import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import Link from "../Reuseable/Link";
import image1 from "@/images/profile.png";
import image2 from "@/images/man2.png";
import image3 from "@/images/man.png";

const SingleProject = ({ project = {} }) => {
  const { image, category, date, title, goal, raised } = project;

  return (
    <div className="explore-projects-item mt-30">
      <div className="explore-projects-thumb">
        <Image src={image.src} alt="explore-projects" />
        <div className="overlay">
          
        </div>
        <a>
        
        {/* <a> */}
              22 Days Left
          {/* </a> */}
          </a>
      </div>
      <div className="explore-projects-content">
        <Link href="/single-project" style={{height: '120px'}}>
          <h3 className="title">{title}</h3>
        </Link>`z`
        <div className="projects-range">
          <div className="projects-range-content">
            <ul>
              <li>&#8377; {goal}</li>
            </ul>
            <div className="range"></div>
          </div>
        </div>
        <div className="projects-goal">
          <span style={{float: 'left'}}>
              40% Donate
          </span>

          <span style={{float: 'right', color: '#000000'}}>
            Goal: <span style={{color: '#000000'}}>&#8377; {goal}</span>
          </span>
          
        </div>
        <Row style={{width: '100%'}}>
          <Col lg={8} xs={8}>
            <div className="projects-goal">
              <span style={{float: 'left',  fontWeight: 'normal'}}>
                  Last Donation A Day Ago
              </span> 
              <div>
                  <Image src={image3.src}  alt="" style={{width: "50px"}}/>
                  <Image src={image1.src} alt="" style={{width: "50px"}}/>
                  <Image src={image2.src} alt="" style={{width: "50px"}}/>
              </div>                   
            </div>
          </Col>

          <Col lg={4} xs={4}>
            <div className="projects-category" style={{textAlign: 'center', marginTop: '40px'}}>          
              <Link href="/single-project" className="btn btn-primary btn-lg" style={{borderRadius: '20px', borderColor: '#38b6ff', backgroundColor: "#38b6ff"}}>
                Donate
              </Link>
            </div>
          </Col>
        </Row>
        

        

      </div>
    </div>
  );
};

export default SingleProject;
