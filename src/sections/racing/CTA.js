import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col, Button } from "react-bootstrap";

const Cta = () => (
  <>
    {/* <!-- CTA section --> */}
    <div className="cta-section bg-default-2 ">
      <Container>
        <div className="cta-wrapper pt-13 pb-14 py-lg-19 border-top ">
          <Row className="align-items-center justify-content-center">
            <Col lg="6" md="10">
              <div className="cta-text section-title">
                <h2 className="title gr-text-5 mb-7 heading-color">
                  Ready, set, go?
                </h2>
                <p className="gr-text-8 mb-8 mb-lg-0 text-color-opacity">
                  Sign up now for the waitlist
                </p>
              </div>
            </Col>
            <div className="col-lg-4 offset-lg-2 col-md-10">
              <div className="cta-btn text-lg-end">
              <Link to="/contact">
              <Button className="gr-hover-y rounded-8">
                  Join the waitlist
                  </Button>
                </Link>
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  </>
);

export default Cta;
