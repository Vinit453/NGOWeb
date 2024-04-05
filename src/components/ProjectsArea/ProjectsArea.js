import { projectsArea } from "@/data/projectsArea";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../Reuseable/Title";
import SingleProject from "./SingleProject";

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
    <section className={`explore-projects-area ${className}`} style={{paddingTop: '0px'}}>
      <Container style={{maxWidth: '95%'}}>
        <div className="explore-project-active">
          <Swiper {...options}>
            <div className="swiper-wrapper">
              {projects.slice(0, 4).map((project) => (
                <SwiperSlide key={project.id}>
                  <SingleProject project={project} />
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
