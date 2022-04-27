import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import imgT1 from "../../assets/image/racing/goern.png";
import imgT2 from "../../assets/image/racing/durandom.png";
import imgT3 from "../../assets/image/racing/ejacobs.jpg";
import imgT4 from "../../assets/image/racing/favpng_helmet-euclidean-vector.png";
import imgT5 from "../../assets/image/racing/favpng_helmet-euclidean-vector.png";
import imgT6 from "../../assets/image/racing/favpng_helmet-euclidean-vector.png";
import imgT7 from "../../assets/image/racing/favpng_helmet-euclidean-vector.png";
import imgT8 from "../../assets/image/telemedicine/png/team-8.png";
import imgT9 from "../../assets/image/telemedicine/png/team-9.png";

const Team = () => {
  return (
    <>
      {/* <!-- Team Area --> */}
      <div className="team-section py-10 py-lg-10 bg-default-2">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="7" md="9">
              <div className="section-title text-center mb-13 mb-lg-23 px-lg-7">
                <h2 className="title gr-text-4 mb-6 heading-color">Leadership Team</h2>
                <p className="gr-text-8 mb-0 text-color-opacity">
                Our team sets the direction for the projects that make up our solution. 
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link to="/job-openings" className="widget-img me-7">
                  <img src={imgT1} alt="" className=" circle-78" />
                </Link>
                <div className="widget-text">
                  <Link to="/job-openings">
                    <h3 className="name gr-text-7 heading-color mb-6">Christoph G&ouml;rn</h3>
                  </Link>
                  <h5 className="gr-text-12 pb-1 text-green text-uppercase">
                     Founder
                  </h5>
                  <p className="gr-text-11 mb-0 text-color-opacity">
                    Long time Open Source hacker with a passion for AiDevSecOps and Web3
                    <br/>
                  <a href="http://www.linkedin.com/in/goern">linkedin.com/in/goern</a>
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link to="/job-openings" className="widget-img me-7">
                  <img src={imgT2} alt="" className=" circle-78" />
                </Link>
                <div className="widget-text">
                  <Link to="/job-openings">
                    <h3 className="name gr-text-7 heading-color mb-6 heading-color">Marcel Hild</h3>
                  </Link>
                  <h5 className="gr-text-12 pb-1 text-green text-uppercase">
                     Founder
                  </h5>
                  <p className="gr-text-11 text-color-opacity mb-0 text-color-opacity">
                  Long time Open Source hacker with a passion for data and operations
                    <br/>
                  <a href="http://www.linkedin.com/in/marcelhild">linkedin.com/in/marcelhild</a>
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link to="/job-openings" className="widget-img me-7">
                  <img src={imgT3} alt="" className="circle-78" />
                </Link>
                <div className="widget-text">
                  <Link to="/job-openings">
                    <h3 className="name gr-text-7 heading-color mb-6 heading-color">Erik Jacobs</h3>
                  </Link>
                  <h5 className="gr-text-12 pb-1 text-green text-uppercase">
                     Community/Marketing
                  </h5>
                  <p className="gr-text-11 text-color-opacity mb-0 text-color-opacity">
                  Technical marketing and communications expert with a background in motorsports. 
                    <br/>
                  <a href="http://www.linkedin.com/in/erikmjacobs">linkedin.com/in/erikmjacobs</a>
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link to="/job-openings" className="widget-img me-7">
                  <img src={imgT4} alt="" className="circle-78" />
                </Link>
                <div className="widget-text">
                  <Link to="/job-openings">
                    <h3 className="name gr-text-7 heading-color mb-6">Engineering Lead</h3>
                  </Link>
                  <h5 className="gr-text-12 pb-1 text-green text-uppercase">
                     Position Open
                  </h5>
                  <p className="gr-text-11 text-color-opacity mb-0">
                  This role is defining the core technological aspects of the platform and our service delivery.
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link to="/job-openings" className="widget-img me-7">
                  <img src={imgT5} alt="" className="circle-78" />
                </Link>
                <div className="widget-text">
                  <Link to="/job-openings">
                    <h3 className="name gr-text-7 heading-color mb-6">
                    Racing lead
                    </h3>
                  </Link>
                  <h5 className="gr-text-12 pb-1 text-green text-uppercase">
                     Position Open
                  </h5>
               <p className="gr-text-11 text-color-opacity mb-0">
                  The racing lead bridges the gap from physical high-profile racing to our platform of sim-racers, bringing in real-world experience.


                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link to="/job-openings" className="widget-img me-7">
                  <img src={imgT6} alt="" className="circle-78" />
                </Link>
                <div className="widget-text">
                  <Link to="/job-openings">
                    <h3 className="name gr-text-7 heading-color mb-6">User Experience and Design lead</h3>
                  </Link>
                  <h5 className="gr-text-12 pb-1 text-green text-uppercase">
                     Position Open
                  </h5>
               <p className="gr-text-11 text-color-opacity mb-0">
                  Create a highly recognizable and concise user experience across all media used by the platform.
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              xs="9"
              md="6"
              className="px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link to="/job-openings" className="widget-img me-7">
                  <img src={imgT7} alt="" className="circle-78" />
                </Link>
                <div className="widget-text">
                  <Link to="/job-openings">
                    <h3 className="name gr-text-7 heading-color mb-6">Data science lead (AI)</h3>
                  </Link>
                  <h5 className="gr-text-12 pb-1 text-green text-uppercase">
                     Position Open
                  </h5>
                 <p className="gr-text-11 text-color-opacity mb-0">
                  This role opens the potential of the data aggregated by our platform, enabling us and our partners to provide unique services.
                  </p>
                </div>
              </div>
            </Col>
            {/* <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link to="/job-openings" className="widget-img me-7">
                  <img src={imgT8} alt="" className="circle-78" />
                </Link>
                <div className="widget-text">
                  <Link to="/job-openings">
                    <h3 className="name gr-text-7 heading-color mb-6">Dr. Ella Gonzales</h3>
                  </Link>
                  <p className="gr-text-11 text-color-opacity mb-0">
                    MBBS, MD (Cardiology) <br />
                    Senior Consultant
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link to="/job-openings" className="widget-img me-7">
                  <img src={imgT9} alt="" className="circle-78" />
                </Link>
                <div className="widget-text">
                  <Link to="/job-openings">
                    <h3 className="name gr-text-7 heading-color mb-6">Dr. Olive Farmer</h3>
                  </Link>
                  <p className="gr-text-11 text-color-opacity mb-0">
                    MBBS, MD (Cardiology) <br />
                    Senior Consultant
                  </p>
                </div>
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Team;
