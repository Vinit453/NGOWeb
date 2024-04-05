import BannerSlider from "@/components/BannerSlider/BannerSlider";
import BrandArea from "@/components/BrandArea/BrandArea";
import Categories from "@/components/Categories/Categories";
import CtaArea from "@/components/CtaArea/CtaArea";
import FunFacts from "@/components/FunFacts/FunFacts";
import GuideArea from "@/components/GuideArea/GuideArea";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsArea from "@/components/NewsArea/NewsArea";
import ProjectsArea from "@/components/ProjectsArea/ProjectsArea";
import TeamArea from "@/components/TeamArea/TeamArea";
import TeamMainArea from "@/components/TeamArea/TeamMainArea";
import TestimonialsArea from "@/components/Testimonials/TestimonialsArea";
import TogetherArea from "@/components/TogetherArea/TogetherArea";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import React from "react";
import ProjectsArea1 from "@/components/ProjectsArea/ProjectsArea1";
import AllCategory from "@/components/Categories/AllCategory";
import AllImage from "@/components/Categories/AllImage";
import GalleryPage from "@/components/PortfolioArea/GalleryPage";
import BannerSlideMobile from "@/components/BannerSlider/BannerSlideMobile";
import BottomHeader from "@/components/Header/BottomHeader";
import CategoriesMobile from "@/components/Categories/CategoriesMobile";
import PopularOrganization from "@/components/Categories/PopularOrganization"

const Home = () => {
  return (
    <Layout>
      <Header />
      <BottomHeader />
      <BannerSlider />
      <BannerSlideMobile />

      <Categories />
      <CategoriesMobile />
      
      <ProjectsArea />
      {/* <WhyChoose /> */}
      <AllImage />
      <ProjectsArea1 />
      <AllCategory />
      <TeamMainArea />
      <FunFacts />
      <GalleryPage />
      <TogetherArea />
      <PopularOrganization />
      {/* <BrandArea /> */}
      {/* <TestimonialsArea /> */}
      {/* <TeamArea /> */}
      
      {/* <NewsArea /> */}
      {/* <GuideArea /> */}
    </Layout>
  );
};

export default Home;
