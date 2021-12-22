import React from "react";
import { Link } from "gatsby";
// import GlobalContext from "../context/GlobalContext";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import JobVideo from "../components/JobVideo";
import icon1 from "../assets/image/inner/icon-bubbles-blue.svg";
import icon2 from "../assets/image/inner/icon-doller-paste.svg";
import icon3 from "../assets/image/inner/icon-user-yellow.svg";
import icon4 from "../assets/image/inner/icon-watch-red.svg";
import icon5 from "../assets/image/inner/icon-keyhole-pink.svg";
import icon6 from "../assets/image/inner/icon-globe-blue.svg";

const JobOpenings = () => {
  // const gContext = useContext(GlobalContext);
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "cta", // cta, account, null
        }}
      >
        <div className="inner-banner bg-default-6 pt-24 pt-lg-30 pb-lg-15">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col xl="8" lg="9">
                <div className="px-md-12 mb-13 text-center">
                  <h2 className="title gr-text-2 mb-8 mb-lg-12 heading-color">
                    Join B4mad Racing
                  </h2>
                  <p className="gr-text-8 mb-0 text-color-opacity">
                    be part of the DAO
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>


        {/* <JobVideo/> */}

        <div className="pb-2 pb-lg-9 pt-13 pt-lg-24 bg-default-6 ">
          <Container>
            <Row className="justify-content-center">
              <Col xl="8" lg="9">
                <div className="px-md-15 text-center mb-13 mb-lg-22">
                  <h2 className="title gr-text-3 mb-9 heading-color">
                    Why you should join us?
                  </h2>
                  <p className="gr-text-8 mb-0 text-color-opacity">
                  Our leadership team ist setting the direction of our products and platform. The driving forces are: community and racing, supported by strong user experience and data science.

The weights and focus might change over time, the initial structure does not imply a hierarchy, nor a static organization. We want to be quick and open to change - a DAO.

The leadership team is steering and controlling our activities.

The leadership team is a critical and initial part of the DAO, and their experience is key to the success, honoring this fact they will receive a significant and equal share of the DAO.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col
                lg="4"
                md="6"
                sm="6"
                xs="8"
                className="mb-md-12 mb-lg-19 mb-9"
              >
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon me-9 mb-9 mb-lg-0">
                    <img src={icon1} alt="" className="w-auto" />
                  </div>
                  <div className="card-texts pe-xl-10">
                    <h3 className="gr-text-6 heading-color mb-7 gr-text-exerpt">
                    passionate sim racers
                    </h3>
                    <p className="gr-text-9 text-color-opacity mb-0">
...
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg="4"
                md="6"
                sm="6"
                xs="8"
                className="mb-md-12 mb-lg-19 mb-9"
              >
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon me-9 mb-9 mb-lg-0">
                    <img src={icon2} alt="" className="w-auto" />
                  </div>
                  <div className="card-texts pe-xl-10">
                    <h3 className="gr-text-6 heading-color mb-7 gr-text-exerpt">
                    forward-looking - innovative
                    </h3>
                    <p className="gr-text-9 text-color-opacity mb-0">
                      ...
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg="4"
                md="6"
                sm="6"
                xs="8"
                className="mb-md-12 mb-lg-19 mb-9"
              >
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon me-9 mb-9 mb-lg-0">
                    <img src={icon3} alt="" className="w-auto" />
                  </div>
                  <div className="card-texts pe-xl-10">
                    <h3 className="gr-text-6 heading-color mb-7 gr-text-exerpt">
                    transparent, inclusive
                    </h3>
                    <p className="gr-text-9 text-color-opacity mb-0">
                      ...
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg="4"
                md="6"
                sm="6"
                xs="8"
                className="mb-md-12 mb-lg-19 mb-9"
              >
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon me-9 mb-9 mb-lg-0">
                    <img src={icon4} alt="" className="w-auto" />
                  </div>
                  <div className="card-texts pe-xl-10">
                    <h3 className="gr-text-6 heading-color mb-7 gr-text-exerpt">
                    community-focused
                    </h3>
                    <p className="gr-text-9 text-color-opacity mb-0">
                      ...
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg="4"
                md="6"
                sm="6"
                xs="8"
                className="mb-md-12 mb-lg-19 mb-9"
              >
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon me-9 mb-9 mb-lg-0">
                    <img src={icon5} alt="" className="w-auto" />
                  </div>
                  <div className="card-texts pe-xl-10">
                    <h3 className="gr-text-6 heading-color mb-7 gr-text-exerpt">
                      revenue participation
                    </h3>
                    <p className="gr-text-9 text-color-opacity mb-0">
                      ...
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg="4"
                md="6"
                sm="6"
                xs="8"
                className="mb-md-12 mb-lg-19 mb-9"
              >
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon me-9 mb-9 mb-lg-0">
                    <img src={icon6} alt="" className="w-auto" />
                  </div>
                  <div className="card-texts pe-xl-10">
                    <h3 className="gr-text-6 heading-color mb-7 gr-text-exerpt">
                      platform economics
                    </h3>
                    <p className="gr-text-9 text-color-opacity mb-0">
                      ...
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="bg-default-2 pt-15 pt-lg-23 pb-13 pb-lg-27">
          <Container>
            <div className="section-title text-center mb-13 mb-lg-20">
              <h2 className="gr-text-3 mb-0 heading-color">Current job openings</h2>
            </div>
            <Row>
              <Col xs="12">
                <div className="px-md-13 px-xl-15">
                  <Link
                    to="/job-community"
                    className="d-flex justify-content-between bg-white rounded-10 px-8 pl-lg-13 pr-lg-11 py-9 py-lg-10 align-items-center mb-5 job-card-hover gr-hover-shadow-5"
                  >
                    <div className="texts">
                      <h3 className="gr-text-6 heading-color fw-bold text-blackish-blue mb-4">
                      Community lead / Marketing{" "}
                      </h3>
                      <p className="gr-text-9 text-color-opacity mb-0 gr-color-blackish-blue-opacity-7">
                        Leadership Team, Remote
                      </p>
                    </div>
                    <div className="card-icon">
                      <i className="fas fa-arrow-right gr-text-8 text-storm"></i>
                    </div>
                  </Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <div className="px-md-13 px-xl-15">
                  <Link
                    to="/job-engineering"
                    className="d-flex justify-content-between bg-white rounded-10 px-8 pl-lg-13 pr-lg-11 py-9 py-lg-10 align-items-center mb-5 job-card-hover gr-hover-shadow-5"
                  >
                    <div className="texts">
                      <h3 className="gr-text-6 heading-color fw-bold text-blackish-blue mb-4">
                      Engineering lead
{" "}
                      </h3>
                      <p className="gr-text-9 text-color-opacity mb-0 gr-color-blackish-blue-opacity-7">
                        Leadership Team, Remote
                      </p>
                    </div>
                    <div className="card-icon">
                      <i className="fas fa-arrow-right gr-text-8 text-storm"></i>
                    </div>
                  </Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <div className="px-md-13 px-xl-15">
                  <Link
                    to="/job-racing"
                    className="d-flex justify-content-between bg-white rounded-10 px-8 pl-lg-13 pr-lg-11 py-9 py-lg-10 align-items-center mb-5 job-card-hover gr-hover-shadow-5"
                  >
                    <div className="texts">
                      <h3 className="gr-text-6 heading-color fw-bold text-blackish-blue mb-4">
                      Racing lead (SME)
{" "}
                      </h3>
                      <p className="gr-text-9 text-color-opacity mb-0 gr-color-blackish-blue-opacity-7">
                        Leadership Team, Remote
                      </p>
                    </div>
                    <div className="card-icon">
                      <i className="fas fa-arrow-right gr-text-8 text-storm"></i>
                    </div>
                  </Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <div className="px-md-13 px-xl-15">
                  <Link
                    to="/job-uxd"
                    className="d-flex justify-content-between bg-white rounded-10 px-8 pl-lg-13 pr-lg-11 py-9 py-lg-10 align-items-center mb-5 job-card-hover gr-hover-shadow-5"
                  >
                    <div className="texts">
                      <h3 className="gr-text-6 heading-color fw-bold text-blackish-blue mb-4">
                      User Experience and Design lead
{" "}
                      </h3>
                      <p className="gr-text-9 text-color-opacity mb-0 gr-color-blackish-blue-opacity-7">
                        Leadership Team, Remote
                      </p>
                    </div>
                    <div className="card-icon">
                      <i className="fas fa-arrow-right gr-text-8 text-storm"></i>
                    </div>
                  </Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <div className="px-md-13 px-xl-15">
                  <Link
                    to="/job-data"
                    className="d-flex justify-content-between bg-white rounded-10 px-8 pl-lg-13 pr-lg-11 py-9 py-lg-10 align-items-center mb-5 job-card-hover gr-hover-shadow-5"
                  >
                    <div className="texts">
                      <h3 className="gr-text-6 heading-color fw-bold text-blackish-blue mb-4">
                      Data science lead (AI)
{" "}
                      </h3>
                      <p className="gr-text-9 text-color-opacity mb-0 gr-color-blackish-blue-opacity-7">
                        Leadership Team, Remote
                      </p>
                    </div>
                    <div className="card-icon">
                      <i className="fas fa-arrow-right gr-text-8 text-storm"></i>
                    </div>
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
