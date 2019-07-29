import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Form,
  Button,
  FormGroup,
  FormInput,
  FormSelect,
  FormCheckbox,
  FormFeedback

} from "shards-react";
import PageTitle from "../components/common/PageTitle";

const SignIn = ({ handleSubmit, handleChange, user, token, checkAcessToken, handleSubmitRegister }) => {
  useEffect(() => {
    checkAcessToken()
  }, [token])
  const locale = [
    'District 1' , 'District 2' ,'District 3','District 3','District 4','District 5', 
    'District 6' , 'District 7', 'District 8' , 'District 9', 'District 10', 'District 11',
    'District 12', 'District GoVap', 'District PhuNhuan', 'District HocMon','District BinhChanh'
  ]
  return (
    <Container fluid className="main-content-container px-4 pb-4 "
    >
      {/* Page Header */}
      <Col sm="12">
        <Row  noGutters className="page-header py-4 text-center">
          <PageTitle  sm="12" title="WELCOME TO HERO PARK!"  className="text-lg-center" />
        </Row>
      </Col>
      <Row>
        {/* Editor */}
        <Col lg = '2'></Col>
        
        <Col lg="8" className="">
          <Card small>
            <CardHeader className="border-bottom">
              <h6 className="m-0">Sign In :</h6>
            </CardHeader>
            {/* <SignInForm handleChange = {handleChange} handleSubmit = {handleSubmit} user = {user}/> */}
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <Row>
                  <Col>
                    <Form >
                      <Row form>
                        <Col md="6">
                          <label htmlFor="feEmailAddress">Username : </label>
                          <FormInput
                            value={user.username}
                            onChange={evt => handleChange(evt)}
                            type="text"
                            name="username"
                            placeholder="Username"
                            required

                          />
                        </Col>
                       
                        <Col md="6">
                          <label htmlFor="fePassword">Password : </label>
                          <FormInput
                            value={user.password}
                            onChange={evt => handleChange(evt)}
                            id="feEmailEmail"
                            type="password"
                            name="password"
                            placeholder="Password"
                          />
                        </Col>
                      </Row>
                      <br></br>
                      <Row form>
                      <Button outline size="sm" theme="primary" className="mb-2 mr-1" onClick={(token) => handleSubmit(token)}>Log In</Button>
                      <Button outline size="sm" theme="primary" className="mb-2 mr-1" href='https://127.0.0.1:5000/login/facebook' >Facebook Login</Button>
                      </Row> 
                     </Form>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
          {/* Complete Form Example */}
        </Col>
        <Col lg = '2'></Col>
        </Row>
        <Row>
        <Col lg = '2'></Col>
        <Col lg="8" className="mb-6">
          <Card small>
            <CardHeader className="border-bottom">
              <h6 className="m-0">Sign up Form:</h6>
            </CardHeader>
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <Row>
                  <Col>
                    <Form  >
                      <Row form >
                        <Col md="6" className="form-group">
                          <label htmlFor="feEmailAddress">Username:  </label>
                          <FormInput
                            onChange={(event) => handleChange(event)}
                            id="feUsername"
                            type="string  "
                            name='susername'
                            placeholder="Username"
                            
                          />
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="feEmailAddress">Email: </label>
                          <FormInput
                            onChange={(event) => handleChange(event)}
                            id="feEmailAddress"
                            type="email"
                            name='semail'
                            placeholder="Email"
                            
                          />
                        </Col>
                        <Col md="6">
                          <label htmlFor="fePassword">Password : </label>
                          <FormInput
                            onChange={(event) => handleChange(event)}
                            id="fePassword"
                            type="password"
                            name="spassword"
                            placeholder="Password"
                            
                          />
                        </Col>
                        <Col md="6">
                          <label htmlFor="fePassword">Confirm Password : </label>
                          <FormInput
                            onChange={(event) => handleChange(event)}
                            id="fePassword"
                            type="password"
                            name="sconfirm"
                            placeholder="Password"
                            
                          />
                        </Col>
                      </Row>

                     

                      <FormGroup>
                          <label htmlFor="feInputAddress">Address</label>
                          <FormSelect
                           id="feInputAddress" placeholder="1234 Main St"
                           onChange={(event) => handleChange(event)}
                           name="saddress"
                           
                          >
                            <option value = ''>Choose...</option>
                          {locale.map((locale, idx)=>
                              
                             <option > {locale}</option>
                          )}
                         </FormSelect>
                        </FormGroup>
                      
                     
                     
                      <Button type = 'submit' onClick ={(evt) => handleSubmitRegister(evt)}   >Sign Up</Button>
                    </Form>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>

          </Card>

        </Col>
        <Col lg = '2'></Col>



      </Row>
      
     
    </Container>
  )
};
export default SignIn;
