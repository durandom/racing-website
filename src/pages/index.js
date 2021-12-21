import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/racing/Hero";
import Content1 from "../sections/racing/Content1";
import Content2 from "../sections/racing/Content2";
import Services from "../sections/racing/Services";
import Features from "../sections/racing/Features";
import Team from "../sections/racing/Team";
import Process from "../sections/racing/Process";
import Cta1 from "../sections/racing/Cta1";

const IndexPage = () => {
  return (
    <>
      <PageWrapper
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Content1 />
        <Content2 />
        <Services />
        <Features />
        <Team />
        <Process />
        <Cta1 />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
