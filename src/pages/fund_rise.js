import AboutIntroduction from "@/components/AboutArea/AboutIntroduction";
import FunFacts from "@/components/FunFacts/FunFacts";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NextBigThing from "@/components/NextBigThing/NextBigThing";
import PageTitle from "@/components/Reuseable/PageTitle";
import TeamMainArea from "@/components/TeamArea/TeamMainArea";
import React from "react";
import MasterForm from "../components/MultistepForm/MasterForm";

const Fund_rise = () => {
  return (
    <Layout>
      <Header />
      <PageTitle title="About" parent="pages" />
      <MasterForm />
    </Layout>
  );
};

export default Fund_rise;
