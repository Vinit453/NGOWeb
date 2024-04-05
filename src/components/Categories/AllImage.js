import { categoriesSection } from "@/data/categories";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-scroll";
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

const AllImage = () => {
  return (
    <section
      className="categories-area bg_cover"
      style={{paddingBottom: '80px', paddingTop: '0px' }}
    >
      <Container style={{maxWidth: '100%'}}>
        <Row className="align-items-center">
          <Col lg={12}>
          <div className="categories-content">  
              {/* <h5 className="title" style={{color: '#000000'}}>Categories</h5> */}
              <p>{text}</p>
            </div>
            <div className="categories-box">
            <Swiper {...options}>
              <div className="swiper-wrapper">
                  {categories.map(({ id, img, title }) => (
                  // console.log(categories);
                  <SwiperSlide key={categories.id} className="item" style={{background: '#fff0', borderColor: '#fff0'}}>
                        <div>
                            <Image src={img} alt="category" style={{ borderRadius: '14px', height: '300px', width: 'auto'}} />
                        </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllImage;
