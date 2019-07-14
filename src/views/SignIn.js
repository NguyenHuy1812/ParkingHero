import React from "react";
import { Container, Row, Col , Card  ,CardHeader} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import SignInForm from "../components/components-overview/SignInForm";

const SignIn = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Add New Parking" subtitle="add-new-parking" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="8" className="mb-4">
      <Card small>
            <CardHeader className="border-bottom">
              <h6 className="m-0">Login</h6>
            </CardHeader>
            <SignInForm />
          </Card>

          {/* Complete Form Example */}
          
        </Col>

    </Row>
  </Container>
);

export default SignIn;
