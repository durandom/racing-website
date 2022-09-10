import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgC1 from "../../assets/image/racing/start up your project concept_5335862.png";
import imgC2 from "../../assets/image/l5/png/l5-service-card2.png";
import imgC3 from "../../assets/image/l5/png/l5-service-card3.png";

import imgDot from "../../assets/image/l5/png/l5-dot-shape2.png";

const Community = () => {
  return (
    <>
      {/* <!--Service section  -->*/}
      <div className="service-section bg-default-4 py-10 py-lg-10">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col sm="8" lg="5" xl="6" className="mb-9 mb-lg-0">
              <div className="content-grid-image-group d-flex  mx-sm-n3">
                <div className="single-image d-flex flex-column px-3 px-sm-6">
                  <img
                    src={imgC1}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    className="w-100 pb-6 pb-sm-9 rounded-10"
                  />

                  {/* <img
                    src={imgC2}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="800"
                    className="w-100 pb-6 pb-sm-9 rounded-10"
                  />
                </div>
                <div className="single-image d-flex flex-column pt-11 px-3 px-sm-6">
                  <img
                    src={imgC3}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="400"
                    className="w-100 pb-6 pb-sm-9 rounded-10"
                  />

                  <img
                    src={imgC4}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="1200"
                    className="w-100 rounded-10"
                  /> */}
                </div>
              </div>
            </Col>
            <Col
              sm="8"
              lg="6"
              xl="5"
              className="offset-lg-1 offset-lg-1 offset-xl-0"
            >
              <div className="content-text">
                <h2 className="gr-text-3 heading-color mb-7 mb-lg-11">
                Community

                </h2>
                <p className="gr-text-8 text-color-opacity mb-7 mb-lg-10">
                  #B4mad is a strongly community-oriented effort. Anybody can contribute to the project.
                  Our use of Open Source technologies means that community participants can easily contribute to the project.
                </p>
               
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Community;
