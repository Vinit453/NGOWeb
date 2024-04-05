import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/Reuseable/PageTitle";
import React from "react";
import ActivityArea from "@/components/ClientArea/ActivityArea";

const Activity = () => {
  return (
    <Layout>
      <Header />
      {/* <PageTitle title="Activty" /> */}
      <ActivityArea />
      {/* <ContactInfoArea /> */}
      {/* <ContactMap /> */}
    </Layout>
  );
};

export default Activity;
