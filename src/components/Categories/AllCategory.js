import { categoriesSection } from "@/data/categories";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const { bg, tagline, title, text, categoriesUser, signIn, categories } =
  categoriesSection;

  const options = {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    // pagination: {
    //   clickable: false,
    // },
    breakpoints: {
      1200: {
        slidesPerView: 6,
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
        slidesPerView: 2,
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

const AllCategory = () => {
  return (
    <section
      className="categories-area bannerdesktop bg_cover"
      style={{ backgroundColor: `#b8b8b8`, paddingBottom: '0px', paddingTop: '0px' }}
    >
      <Container style={{maxWidth: '90%'}}>
        <Row className="align-items-center">
          <Col lg={12}>
          <div className="categories-content">  
              <h5 className="title" style={{color: '#000000'}}>Categories</h5>
              <p>{text}</p>
            </div>
            <div className="categories-box">
            <Swiper {...options}>
              <div className="swiper-wrapper">
                  {categories.map(({ id, img, title }) => (
                  // console.log(categories);
                  <SwiperSlide key={categories.id} className="item" style={{background: '#fff0', borderColor: '#fff0'}}>
                        <div>
                            <Image src={img} alt="category" style={{ borderRadius: '50%', height: '200px', width: '200px'}} />
                        </div>
                        <a href="#" >
                        {/* <a>                           */}
                          <span style={{backgroundColor: '#007cc2', color: '#ffffff', padding: '6px 15px', marginTop: '20px'}}>{title}</span>
                        {/* </a> */}
                        </a>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
              {/* <CategoriesBoxItem categories={categories.slice(0, 6)} /> */}
              {/* <CategoriesBoxItem categories={categories.slice(3)} /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllCategory;
