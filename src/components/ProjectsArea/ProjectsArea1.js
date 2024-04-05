import { projectsArea } from "@/data/projectsArea";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../Reuseable/Title";
import SingleProject2 from "./SingleProject2";

SwiperCore.use([Autoplay, Pagination]);

const options = {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
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
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
};

const { tagline, title, projects } = projectsArea;

const ProjectsArea = ({ className = "" }) => {
  return (
    <section className={`explore-projects-area bannerdesktop ${className}`} style={{paddingTop: '0px', backgroundColor: `#b8b8b8`}}>
      <Container style={{maxWidth: '90%'}}>
        <div className="categories-content">  
              <h5 className="title" style={{color: '#000000'}}>Our Top Fundraisers</h5>
              <p></p>
        </div>
        <div className="explore-project-active">
          <Swiper {...options}>
            <div className="swiper-wrapper">
              {projects.slice(0, 4).map((project) => (
                <SwiperSlide key={project.id}>
                  <SingleProject2 project={project} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsArea;
