import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

const Product = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "cta", // cta, account, null
        }}
      >
        <div className="inner-banner pt-29 pb-6">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col xl="8" lg="9" md="11">
                <div className="px-xl-15 px-lg-8 text-center">
                  <h2 className="title gr-text-2 mb-9 heading-color">
                  #B4mad Products
                  </h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="main-block pb-21">
          <Container>
            <Row className="justify-content-center">
              <Col lg="10" xl="8">
                <div className="px-lg-8 px-xl-3">
                  <div className="single-block mb-11">
                    <p className="gr-text-9 text-color-opacity">
                    There are currently two product tiers for #B4mad racing:
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 fw-bold pb-3 heading-color">Free Tier</h3>
                    <p className="gr-text-9 text-color-opacity">
                      The free tier is a basic telemetry collection and visualization service.
                    </p>
                    <ul className="list-unstyled">
                      <li className="mt-7 text-color-opacity">
                        <i className="rounded-circle bg-dark d-inline-block me-5" css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        #B4mad sim racing telemetry collection app
                      </li>
                      <li className="mt-7 text-color-opacity">
                        <i className="rounded-circle bg-dark d-inline-block me-5" css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        Vehicle speed, engine RPM, and accelerometer visualization
                      </li>
                      <li className="mt-7 text-color-opacity">
                        <i className="rounded-circle bg-dark d-inline-block me-5" css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        Export/download your session data
                      </li>
                      <li className="mt-7 text-color-opacity">
                        <i className="rounded-circle bg-dark d-inline-block me-5" css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        Up to 100 sessions stored (earlier sessions automatically purged)
                      </li>
                      <li className="mt-7 text-color-opacity">
                        <i className="rounded-circle bg-dark d-inline-block me-5" css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        Consistency score                        
                      </li>
                    </ul>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 fw-bold pb-3 heading-color">Paid Tier</h3>
                    <p className="gr-text-9 text-color-opacity">
                      Becoming a #B4mad subscriber unlocks all the power of the platform.
                    </p>
                    <ul className="list-unstyled">
                      <li className="mt-7 text-color-opacity">
                        <i className="rounded-circle bg-dark d-inline-block me-5" css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                       Complete telemetry data visualization
                      </li>
                      <li className="mt-7 text-color-opacity">
                        <i className="rounded-circle bg-dark d-inline-block me-5" css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        AI-powered lap analysis and recommendations
                      </li>
                      <li className="mt-7 text-color-opacity">
                        <i className="rounded-circle bg-dark d-inline-block me-5" css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        AI-powered car setup recommendations
                      </li>
                      <li className="mt-7 text-color-opacity">
                        <i className="rounded-circle bg-dark d-inline-block me-5" css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        Third-party data integration access
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default Product;
