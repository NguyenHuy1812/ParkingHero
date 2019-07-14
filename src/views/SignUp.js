import React from "react";
import { Container, Row, Col , Card , ListGroupItem ,CardHeader,ListGroup,} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import NormalOutlineButtons from "../components/components-overview/NormalOutlineButtons";
import Forms from "../components/components-overview/Forms";
import FormValidation from "../components/components-overview/FormValidation";
import CompleteFormExample from "../components/components-overview/CompleteFormExample";




const SignUp = () => (
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
              <h6 className="m-0">Form Example</h6>
            </CardHeader>
            <CompleteFormExample />
          </Card>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Form Inputs</h6>
            </CardHeader>
          </Card>

          {/* Complete Form Example */}
          
        </Col>

    </Row>
  </Container>
);

export default SignUp;
