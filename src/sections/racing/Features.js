import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import iconF1 from "../../assets/image/svg/l4-feature-icon1.svg";
import iconF2 from "../../assets/image/svg/l4-feature-icon2.svg";
import iconF3 from "../../assets/image/svg/l4-feature-icon3.svg";

const Fearures = () => {
  return (
    <>
      {/* <!-- Fearures Area --> */}
      <div className="feature-section border-top bg-default-2 pt-15 pt-lg-22 pb-9 pb-md-0 pb-lg-17">
        <Container>
          <Row className="justify-content-center">
          <Col lg="4" md="6" className="mb-8 mb-md-13 mb-lg-0">
              <div
                className="feature-widget media"
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-delay="500"
              >
                <div className="widget-icon me-8">
                  <img src={iconF1} alt="" />
                </div>
                <div className="widget-texts">
                  <h3 className="title gr-text-7 fw-bold mb-6 heading-color">
                    Complete telemetry data
                  </h3>
                  <p className="gr-text-9 mb-0 text-color-opacity">
                  Users can visualize telemetry data on specialized dashboards and compare their metrics over time and with other users.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="mb-8 mb-md-13 mb-lg-0">
              <div
                className="feature-widget media"
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-delay="1000"
              >
                <div className="widget-icon me-8">
                  <img src={iconF2} alt="" />
                </div>
                <div className="widget-texts">
                  <h3 className="title gr-text-7 fw-bold mb-6 heading-color">
                  Driving Style analysis
                  </h3>
                  <p className="gr-text-9 mb-0 text-color-opacity">
                    Are you an early breaker, rowdy or coward?
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="mb-8 mb-md-13 mb-lg-0">
              <div
                className="feature-widget media"
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-delay="1500"
              >
                <div className="widget-icon me-8">
                  <img src={iconF3} alt="" />
                </div>
                <div className="widget-texts">
                  <h3 className="title gr-text-7 fw-bold mb-6 heading-color">
                    AI co-driver
                  </h3>
                  <p className="gr-text-9 mb-0 text-color-opacity">
                    An AI enabled co-driver, giving you relevant tips to improve performance
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Fearures;
