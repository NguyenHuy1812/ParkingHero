import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Form,
  FormInput,
  Button

} from "shards-react";
import PageTitle from "../components/common/PageTitle";

const SignUp = ({handleSubmit, handleChange, user }) => {
  return (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Welcome to PakingCar" subtitle="Sign-in please" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="8" className="mb-4">
      <Card small>
            <CardHeader className="border-bottom">
              <h6 className="m-0">SignUp :</h6>
            </CardHeader>
        {/* <SignInForm handleChange = {handleChange} handleSubmit = {handleSubmit} user = {user}/> */}
        <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form >
            <Row form>
            <Col md="4">
                <label htmlFor="feEmailAddress">Username : {user.username}</label>
                <FormInput
                value = {user.username}
                onChange = {evt=>handleChange(evt)}
                type="text"
                name = "username"
                placeholder="Username"
                />
              </Col>
              <Col md="4" className="form-group">
                <label htmlFor="feEmailAddress">
                  Email: {user.email}</label>
                <FormInput
                  onChange = {evt=> handleChange(evt)}
                  value ={user.email}
                  type="email"
                  name ='email'
                  placeholder="Email"
                />
              </Col>
              <Col md="4">
                <label htmlFor="fePassword">Password : {user.password}</label>
                <FormInput
                onChange = {evt=> handleChange(evt)}
                id="feEmailAddress"
                value = {user.password}
                type="password"
                name = "password"
                placeholder="Password"
                />
              </Col>
              
            </Row>
            <Button onClick = {(evt)=>handleSubmit(evt)}>Log In</Button>
            <Button href ='https://127.0.0.1:5000/login/facebook' >Facebook Login</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
          </Card>
          {/* Complete Form Example */}     
        </Col>
    </Row>
  </Container>
)};
export default SignUp;
