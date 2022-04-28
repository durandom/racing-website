import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import Content2 from "../sections/racing/Content2";
import Services from "../sections/racing/Services";
import Community from "../sections/racing/Community";
import Team from "../sections/racing/Team";

import imgBanner from "../assets/image/racing/favpng_racing-flags-formula-one-clip-art.png";
import imgC1 from "../assets/image/racing/start up your project concept_5335862.png";
import imgC2 from "../assets/image/inner/about-content-2.png";
import imgC3 from "../assets/image/inner/about-content-3.png";
import imgC4 from "../assets/image/inner/about-content-4.png";
import imgT1 from "../assets/image/inner/team-image-1.png";
import imgT2 from "../assets/image/inner/team-image-2.png";
import imgT3 from "../assets/image/inner/team-image-3.png";
import imgT4 from "../assets/image/inner/team-image-4.png";
import imgT5 from "../assets/image/inner/team-image-5.png";
import imgT6 from "../assets/image/inner/team-image-6.png";
import imgT7 from "../assets/image/inner/team-image-7.png";

const AboutPage = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "cta", // cta, account, null
        }}
      >
        <Content2 />
        <Team />
        <Services />
        <Community />
      </PageWrapper>
    </>
  );
};
export default AboutPage;
