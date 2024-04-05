import { bannerSlider } from "@/data/bannerSlider";
import React from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleBanner from "./SingleBanner";
import { Col, Image } from "react-bootstrap";
import banner from "@/images/Homebanner.png";

SwiperCore.use([EffectFade, Navigation, Autoplay]);

const options = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
};

const banners1 = bannerSlider.slice(0, 2);
const banners2 = bannerSlider.slice(2, 4);
const banners3 = bannerSlider.slice(4, 6);

const BannerSlideMobile = ({
  className = "",
  isBannerTwo = false,
  isBannerThree = false,
}) => {
  const banners = isBannerTwo ? banners2 : isBannerThree ? banners3 : banners1;

  return (
    <section className={`banner-slider mobilebnner bannermobile ${className}`}>
      <Image src={banner.src} alt="mobile banner" />
    </section>
  );
};

export default BannerSlideMobile;
