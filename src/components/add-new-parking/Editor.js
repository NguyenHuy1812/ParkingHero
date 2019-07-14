import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const Editor = () => (
  <Card small className="mb-3">
    <CardBody>
      <Form className="add-new-parking">
        <FormInput size="lg" className="mb-3" placeholder="Your Post Title" />
        <ReactQuill className="add-new-parking__editor mb-1" />
      </Form>
    </CardBody>
  </Card>
);

export default Editor;
