import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgC1 from "../../assets/image/racing/favpng_auto-racing-computer-file.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section pt-6 pt-lg-19 pb-5 bg-default-4">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" data-aos="flip-right" data-aos-duration="1000">
              <div className="content-img">
                <img src={imgC1} alt="" className="w-100" />
              </div>
            </Col>
            <Col xs="10" lg="5" className="ps-xl-21">
              <div className="section-title content-text mb-13">
                <h2 className="title gr-text-3 mb-6 heading-color">
                  Competition
                </h2>
                <p className="gr-text-8 text-color-opacity">
                  Sim racers enjoy collecting data, improving their skills, and a healthy competition. Grinding laps on a single track and shaving those milliseconds off of a lap time requires dedication and a long-term investment: hundreds if not thousands of detailed, analysed training laps. 
                </p>
              </div>
              <div className="content-widget">
                <Row>
                  <Col
                    md="6"
                    lg="11"
                    xl="11"
                    data-aos="fade-left"
                    data-aos-duration="750"
                  >
                    <div className="single-widget mb-9">
                      <h3 className="w-title gr-text-7 heading-color">
                         Track Record
                      </h3>
                      <p className="gr-text-9 mb-0 text-color-opacity">
                      #B4mad Racing provides a driver’s history - the track record - across multiple games, along the lifetime of their career. 
                      </p>
                    </div>
                  </Col>
                  <Col
                    md="6"
                    lg="11"
                    xl="11"
                    data-aos="fade-left"
                    data-aos-duration="1100"
                  >
                    <div className="single-widget mb-9">
                      <h3 className="w-title gr-text-7 heading-color">
                        Skills
                      </h3>
                      <p className="gr-text-9 mb-0 text-color-opacity">
                        #B4mad Racing enables them to work on their driving style and most important their skills, through innovative products and comparing their ability with other drivers.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
