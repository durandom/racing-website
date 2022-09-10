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
                  Development
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
                      We believe in Open Source technology.
                      Scalability and future longevity is realized via cloud-native technology and open-source based components.
                      Development is managed via distributed platforms such as GitHub, and anyone can participate.
                    </p>
                    <p className="gr-text-9 text-color-opacity">
                      Most sim racing programs offer a wealth of professional-motorsports-grade telemetry data.
                      With all of this data available, there is an emerging ecosystem of analysis tools and solutions.
                      #B4mad Racing hopes to bring cloud-native and machine learning technologies into the mix.
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
