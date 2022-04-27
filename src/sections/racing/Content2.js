import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgC from "../../assets/image/racing/favpng_2017-fia-formula-one-world-championship-formula-one-car-auto-racing-renault-sport-formula-one-team.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section pt-6 pt-lg-19 pb-7 bg-default-4">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col
              lg="6"
              className="order-lg-2"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              <div className="content-img text-right">
                <img src={imgC} alt="" className="w-100" />
              </div>
            </Col>
            <Col xs="10" lg="6" xl="5" className="pe-xl-13 order-lg-1">
              <div className="section-title content-text mb-13">
                <h2 className="title gr-text-3 mb-6 heading-color">
                  About Us
                </h2>
                <p className="gr-text-8 text-color-opacity">
                  #B4mad Racing is a group of open-source technologists who are passionate about motorsports. We want to
                  apply the latest in machine learning, messaging, data visualization, and other projects to help people
                  drive faster. We are building infrastructures using Web3 technologies to help support a user-driven
                  ecosystem and community that is eager to get involved.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
