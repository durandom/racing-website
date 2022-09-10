import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgC1 from "../../assets/image/l5/png/l5-service-card1.png";
import imgC2 from "../../assets/image/l5/png/l5-service-card2.png";
import imgC3 from "../../assets/image/l5/png/l5-service-card3.png";

import imgDot from "../../assets/image/l5/png/l5-dot-shape2.png";

const Services = () => {
  return (
    <>
      {/* <!--Service section  -->*/}
      <div className="service-section bg-default-4 py-10 py-lg-10">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <div className="section-title text-center mb-11 mb-lg-19 px-lg-3">
                <h4 className="pre-title gr-text-12 text-red text-uppercase mb-7">
                  Solutions
                </h4>
                <h2 className="title gr-text-4 heading-color">
                  Our modular architecture is comprised of three main components.
                  <br className="d-none d-lg-block" /> 
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center position-relative gr-z-index-1">
            <Col
              md="6"
              lg="4"
              className="mb-9 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-15 px-9 pb-11 dark-mode-texts bg-green h-100">
                <div className="card-img mb-11">
                  <img src={imgC1} alt="..." />
                </div>
                <h3 className="card-title gr-text-6 mb-6 text-white">Driver Identity</h3>
                <p className="gr-text-9 mb-11 text-color-opacity">
                  Users of the platform automatically receive a unique driver identity.
                  This identity is connected to the user's driving record and can be used to present a profile page or be consumed by
                  third-party services.
                </p>
                {/* <a
                  href="/#"
                  className="gr-text-9 btn-link with-icon text-white mt-auto"
                >
                  Learn more{" "}
                  <i className="icon icon-tail-right fw-bold"></i>
                </a> */}
              </div>
            </Col>
            <Col
              md="6"
              lg="4"
              className="mb-9 mb-lg-0"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-15 px-9 pb-11 dark-mode-texts bg-blue h-100">
                <div className="card-img mb-11">
                  <img src={imgC2} alt="..." />
                </div>
                <h3 className="card-title gr-text-6 mb-6 text-white">Telemetry Collection </h3>
                <p className="gr-text-9 mb-11 text-color-opacity">
                  The lightweight telemetry application collects the data from the driving sim and uploads it.
                </p>
                {/* <a
                  href="/#"
                  className="gr-text-9 btn-link with-icon text-white mt-auto"
                >
                  Learn more{" "}
                  <i className="icon icon-tail-right fw-bold"></i>
                </a> */}
              </div>
            </Col>
            <Col
              md="6"
              lg="4"
              className="mb-9 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-15 px-9 pb-11 dark-mode-texts bg-red h-100">
                <div className="card-img mb-11">
                  <img src={imgC3} alt="..." />
                </div>
                <h3 className="card-title gr-text-6 mb-6 text-white">Data Pipelines</h3>
                <p className="gr-text-9 mb-11 text-color-opacity">
                  All the telemetry data is processed by a pipeline architecture. It is used to provide statistics on
                  the profile page. The data is also made accessible via views which can be pushed into data products by
                  3rd parties.
                </p>
                {/* <a
                  href="/#"
                  className="gr-text-9 btn-link with-icon text-white mt-auto"
                >
                  Learn more{" "}
                  <i className="icon icon-tail-right fw-bold"></i>
                </a> */}
              </div>
              <div
                className="gr-abs-br-custom gr-z-index-n1"
                data-aos="zoom-in-right"
                data-aos-duration="750"
              >
                <img src={imgDot} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
