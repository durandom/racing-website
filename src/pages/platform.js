import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

const TermsConditions = () => {
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
                  Platform and Products
                  </h2>
                  <p className="gr-text-8 mb-13 text-color-opacity">
                    
                  </p>
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
                    #B4mad Racing is a platform that enables multiple future products. At its core, there is a driver identity system and a telemetry data collection platform to build personalized sim racing products. Data transformation and analytics pipelines are an integral part of the platform.
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 fw-bold pb-3 heading-color">Driver Identity</h3>
                    <p className="gr-text-9 text-color-opacity">
                    Users can sign up and claim a unique driver name and populate their profile. All data can be changed later, but all changes are recorded on a public blockchain. By using Web3 technology cheating and manipulation of past records becomes unblushable. 

                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 fw-bold pb-3 heading-color">Telemetry Collection
</h3>
                    <p className="gr-text-9 text-color-opacity">
                    This is a foundational building block for most products. It consists of lightweight software that is installed on the local machine - or network - which collects the raw telemetry stream and uploads it to a service running on the internet. The service extracts all known telemetry into a common format and stores it in a database.

                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 fw-bold pb-3 heading-color">Data Pipelines
</h3>
                    <p className="gr-text-9 text-color-opacity">
                    All the telemetry data is processed by a pipeline architecture. It is used to provide statistics on the profile page. The data is also made accessible via views which can be pushed into data products by 3rd parties.

                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 fw-bold pb-3 heading-color">Free Tier
</h3>
                    <p className="gr-text-9 text-color-opacity">
                    Users can visualize telemetry data on specialized dashboards and compare their metrics over time and with other users.
A ranking system assigns scores to races and practice runs so that users can see themselves ranked in different leagues and classes.
This is mainly statistical analysis and visualization.
All the data is owned by the driver and can be downloaded by the driver.

                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 fw-bold pb-3 heading-color">Paid Tiers</h3>
                    <p className="gr-text-9 text-color-opacity">
                    <ul className="list-unstyled">
                      <li className="mt-7 text-color-opacity">
                        <i className="rounded-circle bg-dark d-inline-block me-5" css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                       Complete telemetry data

                      </li>
                      <li className="mt-7 text-color-opacity">
                        <i className="rounded-circle bg-dark d-inline-block me-5" css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
Driving Style analysis (early breaker, rowdy, coward)

                      </li>
                      <li className="mt-7 text-color-opacity">
                        <i className="rounded-circle bg-dark d-inline-block me-5" css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
Driving recommendations	

                      </li>
                      <li className="mt-7 text-color-opacity">
                        <i className="rounded-circle bg-dark d-inline-block me-5" css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
AI co-driver, the driving school

                      </li>
                      <li className="mt-7 text-color-opacity">
                        <i className="rounded-circle bg-dark d-inline-block me-5" css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
Car setups (AI generated, personalized on driving style)

                      </li>
                      <li className="mt-7 text-color-opacity">
                        <i className="rounded-circle bg-dark d-inline-block me-5" css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
NFT Livery - you own your unique livery

                      </li>
                      <li className="mt-7 text-color-opacity">
                        <i className="rounded-circle bg-dark d-inline-block me-5" css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
reusable data pipes for 3rd party products - this is Twitter for telemetry

                      </li>
                      <li className="mt-7 text-color-opacity">
                        <i className="rounded-circle bg-dark d-inline-block me-5" css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
cross-game championship series

                      </li>
                      <li className="mt-7 text-color-opacity">
                        <i className="rounded-circle bg-dark d-inline-block me-5" css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
Coaching by a professional - pro-level rated by platform

                      </li>
                      </ul>
                    </p>
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
export default TermsConditions;
