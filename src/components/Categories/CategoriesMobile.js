import { categoriesSection } from "@/data/categories";
import Link from "next/link";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const { bg, tagline, title, text, categoriesUser, signIn, categories } =
  categoriesSection;

  const options = {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    // pagination: {
    //   clickable: false,
    // },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      0: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
  };

const CategoriesBoxItem = ({ categories = [] }) => {
  return (
    <div className="categories-box-item">
      {categories.map(({ id, icon, title }) => (
        <div key={id} className="item">
          <a href="#" >
          {/* <a> */}
            <i className={icon}></i>
            <span>{title}</span>
          {/* </a> */}
          </a>
        </div>
      ))}
    </div>
  );
};

const CategoriesMobile = () => {
  return (
    <section
      className="categories-area bannermobile bg_cover"
      style={{ paddingBottom: '0px'}}
    >
      <Container style={{maxWidth: '95%'}}>
        <Row className="align-items-center">
          <Col lg={12}>
          <div className="categories-content">  
              <h5 className="title" style={{color: '#000000'}}>Treading Fundraisers <span>See All</span></h5>
              <p>{text}</p>
            </div>
            <div className="categories-box">
                
            <Swiper {...options}>
              <div className="swiper-wrapper">
                  {categories.map(({ id, icon, title }) => (
                  // console.log(categories);
                  <SwiperSlide key={categories.id} className="item">
                      <a href="#" >
                        {/* <a> */}
                          <i className={icon}></i>
                          <span>{title}</span>
                        {/* </a> */}
                        </a>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
              {/* <CategoriesBoxItem categories={categories.slice(0, 1)} /> */}
              {/* <CategoriesBoxItem categories={categories.slice(3)} /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CategoriesMobile;
