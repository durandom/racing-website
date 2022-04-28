import React from "react";
import { Link } from "gatsby";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

const JobOpenings = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "account", // cta, account, null
        }}
      >
        <div className="inner-banner pt-29 pt-lg-30 pb-9 pb-lg-12 bg-default-6">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col xl="8" lg="9">
                <div className="px-md-15 text-center">
                  <h2 className="title gr-text-2 mb-8 mb-lg-10 heading-color">
                  Data science lead (AI)


                  </h2>
                  <p className="gr-text-7 mb-0 mb-lg-13 text-color-opacity">Leadership Team, Remote</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="main-block pb-6 pb-lg-17 bg-default-6">
          <Container>
            <Row className="justify-content-center">
              <Col xl="8" lg="9">
                <div className="single-block mb-12 mb-lg-15">
                  <p className="gr-text-9 text-color-opacity mb-9">
                    Develop machine learning and deep learning models from driver data, working closely with the racing
                    lead and UXD lead
                  </p>
                </div>
                <div className="single-block mb-12 mb-lg-14">
                  <h3 className="gr-text-6 heading-color fw-bold pb-3">
                    Responsibilities
                  </h3>
                  <ul className="list-unstyled">
                    <li className="mt-7 gr-text-9 text-color-opacity">
                      <i
                        className="rounded-circle bg-opposite d-inline-block me-5"
                        css={`
                          width: 9px;
                          height: 9px;
                        `}
                      ></i>
                      work with time-series and large datasets
                    </li>
                    <li className="mt-7 gr-text-9 text-color-opacity">
                      <i
                        className="rounded-circle bg-opposite d-inline-block me-5"
                        css={`
                          width: 9px;
                          height: 9px;
                        `}
                      ></i>
                      building machine and deep learning models
                    </li>
                    <li className="mt-7 gr-text-9 text-color-opacity">
                      <i
                        className="rounded-circle bg-opposite d-inline-block me-5"
                        css={`
                          width: 9px;
                          height: 9px;
                        `}
                      ></i>
                      statistical analysis, classification, and cluster analysis
                    </li>
                    
                  </ul>
                </div>
                <div className="single-block mb-12 mb-lg-15">
                  <h3 className="gr-text-6 heading-color fw-bold mb-9">
                    How to apply
                  </h3>
                  <p className="gr-text-9 text-color-opacity mb-9">
                    Use the contact form
                  </p>
                  <Link to="/contact" className="btn btn-primary mt-3 mt-lg-10">
                    Apply for this job
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default JobOpenings;
