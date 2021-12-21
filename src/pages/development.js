import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

const TermsConditions = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "account", // cta, account, null
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
                    The fundamental building blocks of software development are modern and forward looking. We believe in Web3 technology for identity management and economics. Scalability and future longevity is realized via cloud-native technology and open-source based components. Whenever possible we’ll use and implement the software stack as open-source software.

Development is executed via distributed platforms such as GitHub and Gitcoin.


                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 fw-bold pb-3 heading-color">Timeline</h3>
                    <p className="gr-text-9 text-color-opacity">
                    Development is dictated by funds available, it will launch with the first funds flowing into the project - either via private series or public funding . The created code and/or other assets are owned by the DAO. The usage licenses will be …


                    </p>
                  </div>
                  <div className="single-block mb-13">
                    <h3 className="gr-text-8 fw-bold heading-color">Phase 0, Round A
</h3>
                    <ul className="list-unstyled">
                      <li className="mt-7 text-color-opacity">
                        <i
                          className="rounded-circle bg-dark d-inline-block me-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                       whitepaper complete ✅

                      </li>
                      <li className="mt-7 text-color-opacity">
                        <i
                          className="rounded-circle bg-dark d-inline-block me-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                       founder funding ✅

                      </li>
                      <li className="mt-7 text-color-opacity">
                        <i
                          className="rounded-circle bg-dark d-inline-block me-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                       community lead position filled

                      </li>
                      <li className="mt-7 text-color-opacity">
                        <i
                          className="rounded-circle bg-dark d-inline-block me-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                       ...

                      </li>
                      <li className="mt-7 text-color-opacity">
                        <i
                          className="rounded-circle bg-dark d-inline-block me-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                       ...

                      </li>
                      <li className="mt-7 text-color-opacity">
                        <i
                          className="rounded-circle bg-dark d-inline-block me-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                       ...

                      </li>
                      <li className="mt-7 text-color-opacity">
                        <i
                          className="rounded-circle bg-dark d-inline-block me-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                       ...

                      </li>
                    </ul>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 fw-bold pb-5 heading-color">
                      Embedded content from other websites
                    </h3>
                    <p className="gr-text-9 pb-5 text-color-opacity">
                      Articles on this site may include embedded content (e.g.
                      videos, images, articles, etc.). Embedded content from
                      other websites behaves in the exact same way as if the
                      visitor has visited the other website.
                    </p>
                    <p className="gr-text-9 text-color-opacity">
                      These websites may collect data about you, use cookies,
                      embed additional third-party tracking, and monitor your
                      interaction with that embedded content, including tracking
                      your interaction with the embedded content if you have an
                      account and are logged in to that website.
                    </p>
                  </div>
                  <div className="single-block pb-11">
                    <h3 className="gr-text-8 fw-bold pb-5 heading-color">
                      Changes about terms
                    </h3>
                    <p className="gr-text-9 pb-5 mb-0 text-color-opacity">
                      If we change our terms of use we will post those changes
                      on this page. Registered users will be sent an email that
                      outlines changes made to the terms of use.
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
