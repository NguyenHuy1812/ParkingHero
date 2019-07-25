import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItem,
  Card,
  CardHeader,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  FormFeedback

} from "shards-react";

import PageTitle from "../components/common/PageTitle";



const UserProfileLite = ({ user, data, getUserinfor, token }) => {

  const [userinfor, setUserinfor] = useState({})
  const [building, setBuilding] = useState()
  const locale = [
    'District 1' , 'District 2' ,'District 3','District 3','District 4','District 5', 
    'District 6' , 'District 7', 'District 8' , 'District 9', 'District 10', 'District 11',
    'District 12', 'District GoVap', 'District PhuNhuan', 'District HocMon','District BinhChanh'
  ]
  const [error, setError] = useState({
    firstname : '',
    lastname : '',
    email : ''

  })
  
  // useEffect(() => {
  //   getUserinfor(token)
  // }, [token])
  useEffect(() => {
    setUserinfor(user)
  }, [user])
  const updateUser = (token, firstname, lastname, email, phone, address) => {
    console.log('hello')
    fetch('https://127.0.0.1:5000/user/data', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
      body: JSON.stringify({ "firstname": firstname, 'lastname': lastname, 'email': email,'test':'test',  'phone': phone  , 'address': address})
    }).then(res => res.json())
      .then(res => {
        if (res === 'success!'){
        alert('Updated!!!!')}else{
         setError(res)
         console.log('reroeroeroeoreoreoroer',res.firstname[0] )
        }
    })
  }
  const updateBuilding = (token, buildingname, buildingcontact, location, description, totalparkingslot) => {
    alert('Success updated!!!!!...')
    fetch('https://127.0.0.1:5000/updatebuilding', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
      body: JSON.stringify({
        "buildingname": buildingname,
        "buildingcontact": buildingcontact,
        "location": location,
        "description": description,
        "totalparkingslot": totalparkingslot
      })
    }).then(res => res.json())
  }
  useEffect(() => {
    fetch(`https://127.0.0.1:5000/manage/building`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
    }).then(results => results.json())
      .then(data => setBuilding(data.data))
      .catch(function (error) { console.log(error) })
  }, [token, data])
  console.log('res cylelce', error)
  return (
    // User Profile ####################################
    <Container fluid className="main-content-container px-4">
      
      <Row noGutters className="page-header py-4">
        {/* user Details */}
        <PageTitle title="User Profile" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
      </Row>
      {userinfor.profile ?
        <Row>
          {/* user details  */}
          <Col lg="4">
            <Card small className="mb-4 pt-3">
              <CardHeader className="border-bottom text-center">
                <div className="mb-3 mx-auto">
                  <img
                    className="rounded-circle"
                    src={user.profile[0].avatar_url}
                    alt={user.username}
                    width="110"
                  />
                </div>
                <h4 className="mb-0">{user.username}</h4>
                <span className="text-muted d-block mb-2"> {user.profile[0].first_name}  {user.profile[0].last_name}</span>
                <Button pill outline size="sm" className="mb-2">
                  <i className="material-icons mr-1">person_add</i> Follow
      </Button>
              </CardHeader>
              <ListGroup flush>
                <ListGroupItem className="px-4">
                  <div className="progress-wrapper">
                    <strong className="text-muted d-block mb-2">
                      Contact: {userinfor.profile[0].phone}
                    </strong>
                    <strong className="text-muted d-block mb-2">
                      Email: {userinfor.email}
                    </strong>

                  </div>
                </ListGroupItem>
                <ListGroupItem className="p-4">
                  <strong className="text-muted d-block mb-2">
                    Address: {user.profile[0].address}
                  </strong>

                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          {/* user editting */}
          <Col lg="8">
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Account Details</h6>
              </CardHeader>
              <ListGroup flush>
                <ListGroupItem className="p-3">
                  <Row>
                    <Col>
                      <Form>
                        <Row form>
                          {/* First Name */}
                          <Col md="6" className="form-group">
                            <label htmlFor="feFirstName">First Name</label>
                            <FormGroup>
                            <FormInput
                           
                            required
                            id="feFirstName"
                              placeholder="First Name"
                              name='username'
                              value={userinfor.profile[0].first_name}
                              onChange={(evt) => setUserinfor({
                                ...userinfor,
                                ...userinfor.profile.map(prof => prof.first_name = evt.target.value)
                              })}
                              />
                              </FormGroup>
                          </Col>
                          {/* Last Name */}
                          <Col md="6" className="form-group">
                            <label htmlFor="feLastName">Last Name</label>
                            <FormInput
                            required
                          
                              id="feLastName"
                              placeholder="Last Name"
                              value={userinfor.profile[0].last_name}
                              onChange={(evt) => setUserinfor({
                                ...userinfor,
                                ...userinfor.profile.map(prof => prof.last_name = evt.target.value)
                              })}
                            />
                          </Col>
                        </Row>
                        <Row form>
                          {/* Email */}
                          <Col md="6" className="form-group">
                            <label htmlFor="feEmail">Email {userinfor.email} </label>
                            <FormInput
                            required
                          
                              type="email"
                              id="feEmail"
                              placeholder="Email Address"
                              value={userinfor.email}
                              onChange={(evt) => setUserinfor({ ...userinfor, email: evt.target.value })}
                              autoComplete="email"
                            />
                          </Col>
                          {/* Password */}
                          <Col md="6" className="form-group">
                            <label htmlFor="fePassword">Contact</label>
                            <FormInput
                            
                            
                              type="contact"
                              id="feContact"
                              placeholder="Contact"
                              value={userinfor.profile[0].phone}
                              onChange={(evt) => setUserinfor({ ...userinfor, 
                                ...userinfor.profile.map(prof => prof.phone = evt.target.value)
                              })}
                              
                            />
                          </Col>
                        </Row>
                        <FormGroup>
                          <label htmlFor="feAddress">Address</label>
                          <FormSelect
                          required
                          
                           value={userinfor.profile[0].address}
                           onChange={(evt) => setUserinfor({
                             ...userinfor,
                             ...userinfor.profile.map(prof => prof.address = evt.target.value)
                           })}
                          >
                          
                          {locale.map((locale, idx)=>
                             <option > {locale}</option>
                          )}
                         </FormSelect>
                         <FormFeedback valid>The first name looks good!</FormFeedback>
                        </FormGroup>
                  
                        <Button theme="accent" onClick={() => { updateUser(token, userinfor.profile[0].first_name, userinfor.profile[0].last_name, userinfor.email, userinfor.profile[0].phone,  userinfor.profile[0].address ) }}>Update Account</Button>
                      </Form>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        :
        null
      }
      <Row noGutters className="page-header py-4">
        <PageTitle title="Building Details" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
      </Row>
      {building && building.parkings ?
        <Row>
          {/* user details  */}
          <Col lg="4">
            <Card small className="mb-4 pt-3">
              <CardHeader className="border-bottom text-center">
                <div className="mb-3 mx-auto">

                  <img
                    className="rounded-circle"
                    src={building.image_url}
                    alt='image'
                    width="110"
                  />
                </div>
                <h4 className="mb-0">{building.buildingname}</h4>
                <span className="text-muted d-block mb-2">Location: {building.location}</span>
                <Button pill outline size="sm" className="mb-2">
                  <i className="material-icons mr-1">person_add</i> Follow
      </Button>
              </CardHeader>
              <ListGroup flush>
                <ListGroupItem className="px-4">
                  <div className="progress-wrapper">
                    <strong className="text-muted d-block mb-2">
                      Contact: {building.buildingcontact}
                    </strong>

                  </div>
                </ListGroupItem>
                <ListGroupItem className="p-4">
                  <strong className="text-muted d-block mb-2">
                    <span>Total Slot:  {building.parkings.length}</span>

                  </strong>
                  <span>Description: {building.description}</span>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          {/* Building*/}
          <Col lg="8">
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Building Details</h6>
              </CardHeader>
              <ListGroup flush>
                <ListGroupItem className="p-3">
                  <Row>
                    <Col>
                      <Form>
                        <Row form>
                          {/* First Name */}
                          <Col md="6" className="form-group">
                            <label htmlFor="feFirstName">Building name</label>
                            <FormInput
                              id="feFirstName"
                              placeholder="First Name"
                              name='username'
                              value={building.buildingname}
                              onChange={(evt) => setBuilding({
                                ...building,
                                buildingname: evt.target.value
                              })
                              }
                            />
                          </Col>
                          {/* Last Name */}
                          <Col md="6" className="form-group">
                            <label htmlFor="feLastName">Contact</label>
                            <FormInput
                              id="feLastName"
                              placeholder="Last Name"
                              value={building.buildingcontact}
                              onChange={(evt) => setBuilding({
                                ...building,
                                buildingcontact: evt.target.value
                              })}
                            />
                          </Col>
                        </Row>

                        <FormGroup>
                          <label htmlFor="feAddress">Address</label>
                          <FormSelect
                           id="feAddress"
                           placeholder="Address"
                           value={building.location}
                           onChange={(evt) => setBuilding({
                             ...building,
                             location: evt.target.value
                           })} 
                          >
                          
                          {locale.map((locale, idx)=>
                             <option > {locale}</option>
                          )}
                         
                          </FormSelect>
                          
                        </FormGroup>


                        <Row form>
                          {/* Description */}
                          <Col md="12" className="form-group">
                            <label htmlFor="feDescription">Description</label>
                            <FormTextarea id="feDescription" rows="5"
                              value={building.description}
                              onChange={(evt) => setBuilding({
                                ...building,
                                description: evt.target.value
                              })}
                            />
                          </Col>
                        </Row>
                        <Button theme="accent" onClick={() => {
                          updateBuilding(token, building.buildingname,
                            building.buildingcontact, building.location, building.description, building.totalparkingslot)
                        }}
                        >Update Building information</Button>
                      </Form>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        :
        null
      }

    </Container>
  )
}



export default UserProfileLite;
