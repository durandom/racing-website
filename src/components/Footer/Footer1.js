import React, { useContext } from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import Logo from "../Logo";

const Footer = () => {
  const gContext = useContext(GlobalContext);

  const linkClassName =
    gContext.footer.theme === "dark"
      ? "gr-text-color gr-hover-text-green"
      : "gr-text-color gr-hover-text-blue";

  const iconClassName =
    gContext.footer.theme === "dark"
      ? "text-storm gr-hover-text-green"
      : "gr-text-color gr-hover-text-blue";

  return (
    <>
      <div
        className={`footer-section pt-15 pt-lg-25 pb-lg-21 ${
          gContext.footer.theme === "dark"
            ? "dark-mode-texts bg-blackish-blue"
            : ""
        }`}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="3" md="4">
              <Logo
                white={gContext.footer.theme === "dark"}
                className="footer-logo mb-11"
              />
              <p className="gr-text-11 text-color-opacity">
              Your trusted Track Record to accelerate your racing career
              </p>
              <ul className="social-icons py-7 list-unstyled mb-7 mb-lg-0">
                <li className="me-2">
                  <Link to="https://twitter.com/b4racer" className={iconClassName}>
                    <i className="icon icon-logo-twitter"></i>
                  </Link>
                </li>
                <li className="me-2">
                  <Link to="https://discord.gg/MaUQuSGSbJ" className={iconClassName}>
                    <i className="icon icon-logo-slack"></i>
                  </Link>
                </li>
                <li className="me-2">
                  <Link to="https://github.com/b4mad/racing" className={iconClassName}>
                    <i className="icon icon-logo-dribbble"></i>
                  </Link>
                </li>
                {/* <li className="me-2">
                  <Link to="/" className={iconClassName}>
                    <i className="icon icon-logo-linkedin"></i>
                  </Link>
                </li> */}
              </ul>
            </Col>
            <Col lg="8" md="8" className="offset-lg-1">
              <Row>
                <Col xs="6" lg="3">
                  <div className="single-footer mb-13 mb-lg-9">
                    <p className="footer-title gr-text-11 text-color-opacity mb-7">Project</p>
                    <ul className="footer-list list-unstyled gr-text-9">
                      <li className="py-2">
                        <Link to="/about" className={linkClassName}>
                          About us
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/platform" className={linkClassName}>
                          Platform
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/development" className={linkClassName}>
                          Development
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs="6" lg="3">
                  <div className="single-footer mb-13 mb-lg-9">
                    <p className="footer-title gr-text-11 text-color-opacity mb-7">Community</p>
                    <ul className="footer-list list-unstyled gr-text-9">
                      <li className="py-2">
                        <Link to="/tokenomics" className={linkClassName}>
                          Tokenomics
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/contact" className={linkClassName}>
                          Join the Team
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs="6" lg="3">
                  <div className="single-footer mb-13 mb-lg-9">
                    <p className="footer-title gr-text-11 text-color-opacity mb-7">Links</p>
                    <ul className="footer-list list-unstyled gr-text-9">
                      <li className="py-2">
                        <Link to="https://twitter.com/b4racer" className={linkClassName}>
                          Twitter
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="https://discord.gg/MaUQuSGSbJ" className={linkClassName}>
                          Discord
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="https://github.com/b4mad/racing" className={linkClassName}>
                          GitHub
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                {/* <Col xs="6" lg="3">
                  <div className="single-footer mb-13 mb-lg-9">
                    <p className="footer-title gr-text-11 text-color-opacity mb-7">Legal</p>
                    <ul className="footer-list list-unstyled gr-text-9">
                      <li className="py-2">
                        <Link to="/" className={linkClassName}>
                          Privacy Policy
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/" className={linkClassName}>
                          Terms &amp; Conditions
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/" className={linkClassName}>
                          Return Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col> */}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
