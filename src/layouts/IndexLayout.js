import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainFooter from "../components/layout/MainFooter";

const IndexLayout = ({ children, noNavbar, noFooter }) => (
  <Container fluid>
    <Row>
      {/* <MainSidebar /> */}
      
        {/* {!noNavbar && <MainNavbar />} */}
        {children}
        
      
    </Row>
  </Container>
);

IndexLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

IndexLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default IndexLayout;
