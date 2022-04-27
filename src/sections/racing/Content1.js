import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgC1 from "../../assets/image/racing/favpng_auto-racing-computer-file.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section pt-6 pt-lg-6 pb-6 bg-default-4">
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
                  Get Faster - Faster!
                </h2>
                <p className="gr-text-8 text-color-opacity">
                  B4mad is an AI-powered driving coach that does the hard work for you. No reading squiggly lines. No
                  trying to figure out how to overlay your data. No phone calls or emails. Just a few simple software
                  plugins for your favorite sim racing title and B4mad tells you how to go faster.
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
                         Only perfect practice makes perfect.
                      </h3>
                      <p className="gr-text-9 mb-0 text-color-opacity">
                        You might get better driving thousands upon thousands of laps in the sim. But you also might
                        just be wasting your time reinforcing bad habits. Let B4mad automatically analyze your driving
                        data and give you actionable advice on how to go faster.
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
                        Improvement at any level
                      </h3>
                      <p className="gr-text-9 mb-0 text-color-opacity">
                        Whether you are a grizzled sim veteran or someone new to the sport, the technology behind B4mad
                        can help you improve. Your data is all we need to look at to tell you how and where you can go
                        faster.
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
