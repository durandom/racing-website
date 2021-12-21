import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/racing/Hero";
import Content1 from "../sections/racing/Content1";
import Content2 from "../sections/racing/Content2";
import Services from "../sections/racing/Services";
import Features from "../sections/racing/Features";
import Job from "../sections/racing/Job";
import Process from "../sections/landing8/Process";
import Testimonial1 from "../sections/landing1/Testimonial1";
import Fact from "../sections/landing1/Fact";
import Cta1 from "../sections/landing1/Cta1";
import CaseStudies from "../sections/landing1/CaseStudies";
import Testimonial2 from "../sections/landing1/Testimonial2";
import Cta2 from "../sections/landing1/Cta2";

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
        <Job />
        <Process />
        <Testimonial1 />
        <Fact />
        <Cta1 />
        <CaseStudies />
        <Testimonial2 />
        <Cta2 />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
