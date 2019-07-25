import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  Button
} from "shards-react";

const SignInForm = () =>(
<ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form >
            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feEmailAddress">Email: </label>
                <FormInput
                 
                  id="feEmailAddress"
                  type="email"
                  name ='email'
                  placeholder="Email"
                />
              </Col>
              <Col md="6">
                <label htmlFor="fePassword">Password :  </label>
                <FormInput
               
                
                type="password"
                name = "password"
                placeholder="Password"
                />
              </Col>
            </Row>
            <Button >Log In</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
) 

export default SignInForm;
