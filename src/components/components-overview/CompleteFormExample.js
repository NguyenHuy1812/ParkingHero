import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormSelect,
  Button
} from "shards-react";
class CompleteFormExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      user: {
         username:'hello Huy',
         password:'password'
        
        }
    }
  }
  handleChange = (event) => {
    console.log('this.state', this.state)
    // this.setState({
    //   ...this.state.user,
    //   user:{
    //     [event.target.name] : event.target.value
    //   }
  // })
      this.setState({
        user:{
           ...this.state.user,
          [event.target.name] : event.target.value
        } 
      }) 
      
    
    event.preventDefault();
  }
handleSubmit = (event) => {
  alert('A name was submitted: ' + this.state.user.username);
  this.loginUser(this.state.user , this.state.password)
  event.preventDefault();
}
loginUser = (username,password, token) => {
  fetch('http://127.0.0.1:5000/testJson', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "user": username, 'password': password })
  }).then(res => res.json())
    .then(res => console.log(res))
}
CompleteForm = () => (
<ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
       
      
          <Form  onSubmit = {(event)=> this.handleSubmit(event)}>
            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feEmailAddress">Email: {this.state.user.username}</label>
                <FormInput
                  onChange = {(event)=> this.handleChange(event)}
                  id="feEmailAddress"
                  type="email"
                  name ='username'
                  placeholder="Email"
                />
              </Col>
              <Col md="6">
                <label htmlFor="fePassword">Password : {this.state.user.password}</label>
                <FormInput
                  onChange = {(event)=> this.handleChange(event)}
                  id="fePassword"
                  type="password"
                  name = "password"
                  placeholder="Password"
                />
              </Col>
            </Row>

            <FormGroup>
              <label htmlFor="feInputAddress">Address</label>
              <FormInput id="feInputAddress" placeholder="1234 Main St" />
            </FormGroup>

            <FormGroup>
              <label htmlFor="feInputAddress2">Address 2</label>
              <FormInput
                id="feInputAddress2"
                placeholder="Apartment, Studio or Floor"
              />
            </FormGroup>

            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feInputCity">City</label>
                <FormInput id="feInputCity" />
              </Col>
              <Col md="4" className="form-group">
                <label htmlFor="feInputState">State</label>
                <FormSelect id="feInputState">
                  <option>Choose...</option>
                  <option>...</option>
                </FormSelect>
              </Col>
              <Col md="2" className="form-group">
                <label htmlFor="feInputZip">Zip</label>
                <FormInput id="feInputZip" />
              </Col>
              <Col md="12" className="form-group">
                <FormCheckbox>
                  {/* eslint-disable-next-line */}I agree with your{" "}
                  <a href="#">Privacy Policy</a>.
                </FormCheckbox>
              </Col>
            </Row>
            <Button >Create New Parking</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
)
  render () {
    console.log('this.state when render', this.state)
    return (
     
      this.CompleteForm()
    )
  }
}




  


export default CompleteFormExample;
