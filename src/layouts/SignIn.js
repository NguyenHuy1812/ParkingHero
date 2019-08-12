import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainFooter from "../components/layout/MainFooter";

const SignInLayout = ({ children, noNavbar, noFooter }) => (
  <Container
  // style ={{
  //   backgroundImage:'url("../img/hero.jpg")',
  //   // background: 'linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url("../img/hero.jpg")',
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundAttachment: 'scroll',
  //   backgroundZize: 'cover',
  //   width: '100%'
  // }}
  >
    <Row>
      {/* <MainSidebar /> */}
      <Col
        className="main-content p-0"
        lg={{ size: 12, offset: '' }}
        md={{ size: 12  , offset:  "" }}
        sm="12"
        tag="main"
      >
        {/* {!noNavbar && <MainNavbar />} */}
        {children}
        
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
