import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Process = () => {
  return (
    <>
      {/* <!-- Process Area --> */}
      <div className="how-section pb-13 pt-lg-13 pb-lg-25 mb-23 mb-lg-29 bg-default-4">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="7" md="9">
              <div className="section-title text-center mb-11 mb-lg-17">
                <h2 className="title gr-text-3 mb-7 heading-color">How does it work?</h2>
                <p className="px-lg-8 gr-text-8 text-color-opacity">
                Most sim racing games offer a wealth of telemetry data, such as speed, lap times and motor data.
                </p>
              </div>
            </Col>
          </Row>
          <div className="gr-timeline-wrapper gr-flex-all-center">
            <div
              className="single-timeline-feature text-center px-6 px-md-9"
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              <div className="count circle-lg bg-red gr-text-4 mx-auto mb-12 text-white">
                <span>1</span>
              </div>
              <div className="content px-xl-7">
                <h3 className="title gr-text-7 mb-6 heading-color">Install App</h3>
                <p className="gr-text-9 text-color-opacity">
                  A lightweight application collects local telemetry and sends it to our servers
                </p>
              </div>
            </div>
            <div
              className="single-timeline-feature text-center px-6 px-md-9"
              data-aos="zoom-in"
              data-aos-duration="900"
              data-aos-delay="400"
            >
              <div className="count circle-lg bg-green gr-text-4 mx-auto mb-12 text-white">
                <span>2</span>
              </div>
              <div className="content px-xl-7">
                <h3 className="title gr-text-7 mb-6 heading-color">Visualize Results</h3>
                <p className="gr-text-9 text-color-opacity">
                  See your current and previous sessions in detailed graphical dashboards
                </p>
              </div>
            </div>
            <div
              className="single-timeline-feature text-center px-6 px-md-9"
              data-aos="zoom-in"
              data-aos-duration="900"
              data-aos-delay="800"
            >
              <div className="count circle-lg bg-blue gr-text-4 mx-auto mb-12 text-white">
                <span>3</span>
              </div>
              <div className="content px-xl-7">
                <h3 className="title gr-text-7 mb-6 heading-color">Grow the Community</h3>
                <p className="gr-text-9 text-color-opacity">
                  With all data collected, you can enjoy highly customized products and the platform community
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Process;
