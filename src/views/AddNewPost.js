import React from "react";
import { Container, Row, Col , Card , ListGroupItem ,CardHeader,ListGroup,} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import NormalOutlineButtons from "../components/components-overview/NormalOutlineButtons";
import Forms from "../components/components-overview/Forms";
import FormValidation from "../components/components-overview/FormValidation";
import CompleteFormExample from "../components/components-overview/CompleteFormExample";


const AddNewPost = () => (
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
            <ListGroup flush>
              <ListGroupItem className="p-3">
                {/* Normal Outline Buttons */}
                <strong className="text-muted d-block my-2">
                  Normal Outline Buttons
                </strong>
                <NormalOutlineButtons />
              </ListGroupItem>

              {/* Forms & Form Validation */}
              <ListGroupItem className="p-3">
                <Row>
                  <Forms />
                  <FormValidation />
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>

          {/* Complete Form Example */}
          
        </Col>

    </Row>
  </Container>
);

export default AddNewPost;
