import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainFooter from "../components/layout/MainFooter";

const SignInLayout = ({ children, noNavbar, noFooter }) => (
  <Container fluid>
    <Row>
      {/* <MainSidebar /> */}
      <Col
        className="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset:  3 }}
        sm="12"
        tag="main"
      >
        {/* {!noNavbar && <MainNavbar />} */}
        {children}
        {!noFooter && <MainFooter />}
      </Col>
    </Row>
  </Container>
);

SignInLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

SignInLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default SignInLayout;
