import React, { useState, useEffect } from "react";
import {
  CardBody, CardFooter, Container, Button, Row, Col, Card,
  Form,
  FormGroup,
  FormInput,
  ListGroup,
  ListGroupItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  CardHeader,FormTextarea, 
  FormSelect
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
var moment = require('moment');


const ManageBuilding = ({ checkOut, bookLot, data, user, token, deleteParkingLot, checkIn, addMoreParkingLot, getUserinfor }) => {
  const [parking, setParking] = useState('')
  const [price, setPrice] = useState(0)
  const locale = [
    'District 1' , 'District 2' ,'District 3','District 3','District 4','District 5', 
    'District 6' , 'District 7', 'District 8' , 'District 9', 'District 10', 'District 11',
    'District 12', 'District GoVap', 'District PhuNhuan', 'District HocMon','District BinhChanh'
  ]
  const [building, setBuilding] = useState({
    buildingname: '',
    buildingcontact: '',
    location: '',
    description: '',
    totalparkingslot: ''
  })
  const [parkingedit, setParkingedit] = useState({
    name : '',
    price : ''
  })
  useEffect(() => {
    getUserinfor(token)
  }, [token, building]);
  const editParking = (token, idx, name, price) =>{
    fetch(`https://127.0.0.1:5000/parking/edit/${idx}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },body: JSON.stringify({
        "parkingname": name,
        "parkingprice": price,
        
      })
    }).then(results => results.json())
      .then(results => alert(results))
      window.location.replace(`http://localhost:3000/manage/building  `)
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
      .then(data => setParking(data.data))
      .catch(function (error) { console.log(error) })
  }, [token, data])
  const addBuilding = (token, buildingname, buildingcontact, location, description, totalparkingslot) => {
    
    fetch('https://127.0.0.1:5000/addbuilding', {
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
      .then(res => alert(res))
      alert('Success add building...')
  }
  console.log('##########',parking)
  return (
    // Having building handle  =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    parking && parking.parkings ?
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        {/* adding new parking in here############################################# */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Add New Parking" subtitle="add-new-parking" className="text-sm-left" />
        </Row>
        {data ?
          <Row>
            {/* Editor */}
            <Col lg="8" className="mb-4">
              <Card small>
                <CardHeader className="border-bottom">
                  <h6 className="m-0">Add 1 Parking</h6>
                  <FormGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon >
                        <InputGroupText>Your price per hour</InputGroupText>
                      </InputGroupAddon>
                      <FormInput type="number" placeholder="Your price per hour" onChange={(evt) => setPrice(parseFloat(evt.target.value))} />
                    </InputGroup>
                  </FormGroup>
                  <Button outline size="sm" theme="secondary" className="mb-2 mr-1"
                    onClick={() => addMoreParkingLot(token, data.building[0].id, price)}>
                    Add 1 parking
                 </Button>
                </CardHeader>
              </Card>
            </Col>

          </Row>
          : null}

       {/* Show list parkinggggg##################################################### */}

        {parking &&
          <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title={parking.buildingname} subtitle="Building Name" className="text-sm-left" />
          </Row>
        }

        {parking &&
          <Row>
            {parking.parkings.map((park, idx) => (
              <Col lg="6" sm="12" className="mb-4" key={idx}>
                <Card small className="card-post h-100">
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="#">
                      No{idx+1}: {park.name}
                    </a>
                  </h5>
                  <CardBody >
                    <Row  sm='12'>
                      <Col sm='1'>
                        <div style={{ backgroundColor: `${(park.status_color)}`, width: '0.5rem', height: '5rem' }}></div>
                      </Col>
                      <Col sm='4'>
                        <h5 className="card-title">
                          <a className="text-fiord-blue" href="#">
                            Status: {park.status}
                          </a>
                        </h5>
                        <h5> Price: {park.price} $ / hour</h5>
                        {/* <h5> You have 15 minute to checkin</h5> */}
                      </Col>
                      {park.owneruser &&
                      <Col sm='7'>
                          <h5 className="card-title">
                            <a className="text-fiord-blue" >
                              Book by:   {park.owneruser.name}
                            </a>
                          </h5>
                          <h5 className="card-title">
                            {park.transaction && park.transaction[0] && park.transaction.filter(trans => trans.status == 'Checkin').length > 0 ?
                              <a className="text-fiord-blue" >
                              Checkin: {moment(park.transaction[park.transaction.length - 1].time_check_in).utc().format('DD-MM-YYYY HH:mm:ss')}
                              </a>
                              :
                              <a className="text-fiord-blue" >
                                Booking:    {moment(park.time_booking).utc().format('DD-MM-YYYY HH:mm:ss')}
                              </a>}
                          </h5>
                        </Col>
                      }
                    </Row>
                  </CardBody>
                  {user.username && park.owneruser && park.owneruser.name == user.username && park.transaction && park.transaction[0] && park.transaction.filter(trans => trans.status == 'Checkin').length > 0 ?
                    //If current user the same with book_by user
                    <CardFooter className="text-muted border-top py-3">
                      <span className="d-inline-block">
 
                        <Button onClick={() => { checkOut(token, park.id, park.transaction[0].id) }} outline size="sm" theme="primary" className="mb-2 mr-1">
                          CheckOut {park.transaction[0].id} 
                        </Button>
                      </span>
                      <Button onClick={() => { deleteParkingLot(token, park.id) }} outline size="sm" theme="danger" className="mb-2 mr-1">
                        Delete!!!!
            </Button>
                    </CardFooter>
                    :
                    //If current user not the same( can )
                    <CardFooter className="text-muted border-top py-3">
                      {user.username && park.owneruser  &&

                        <span className="d-inline-block">

                          <Button onClick={() => { bookLot(token, park.id) }} outline size="sm" theme="danger" className="mb-2 mr-1">
                            Reverse!
                          </Button>
                          <Button onClick={() => { checkIn(token, park.id) }} outline size="sm" theme="warning" className="mb-2 mr-1">
                            Checkin!
               </Button>
                        </span>
                      }
                      {user.username && park.owneruser == null &&
                      <span className="d-inline-block">
                        
                          <Button onClick={() => { bookLot(token, park.id) }} outline size="sm" theme="success" className="mb-2 mr-1">
                            Booking!     
                  </Button>
                  <Button onClick={() => { deleteParkingLot(token, park.id) }} outline size="sm" theme="danger" className="mb-2 mr-1">
                Delete!!!!
                  </Button>   
                      </span>
                      }
                      
                  
     <Button type="button" outline size="sm" theme="secondary" className="mb-2 mr-1" data-toggle="modal" data-target="#exampleModalLong">
 Edit Parking
    </Button>



{/* ##########################Modal */}

<div stlye={{backgroundColor: '#f5f6f8'}} class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <Card>
  <div class="modal-dialog" role="document">
  <Button type="button" class="Close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </Button>
    <div class="modal-content">
      <CardHeader class="modal-header">     
        <h5 class="modal-title" id="exampleModalLongTitle">No{idx+1}. {park.name}</h5>
      </CardHeader>
      <CardBody class="modal-body">
      <FormGroup>
                    <InputGroup className="mb-3">
                    <InputGroupAddon >
                        <InputGroupText>Parking Name</InputGroupText>
                      </InputGroupAddon>
                      <FormInput type="text" value ={parkingedit.name} placeholder="Parking Name" onChange={(evt) => setParkingedit({...parkingedit,  name: evt.target.value})} />
                   </InputGroup>
                      <InputGroup className="mb-3">
                      <InputGroupAddon >
                        <InputGroupText>Your price per hour</InputGroupText>
                      </InputGroupAddon>
                      <FormInput type="number" value ={parkingedit.price} placeholder="Your price per hour" onChange={(evt) => setParkingedit({...parkingedit, price: parseFloat(evt.target.value)})} />
                    </InputGroup>
      </FormGroup>
      </CardBody>
      <div class="modal-footer">
        <button type="button"  class="btn btn-primany" data-dismiss="modal">Close</button>
        <button type="button" data-dismiss="modal" onClick = {()=>editParking(token, park.id , parkingedit.name, parkingedit.price)} class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
  </Card>
</div>
{/* ################################# */}
                    </CardFooter>
                  }           
</Card>

              </Col>
            ))}
          </Row>
        }
        {/* // endedd######################################### */}
      </Container>
      :
      // Not have building
      <Container>
  {/* ######################################### */}
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
                            <FormInput placeholder="Building Name" onChange={(evt) => { setBuilding({ ...building, buildingname: evt.target.value }) }} />
                          </Col>
                          {/* Last Name */}
                          <Col md="6" className="form-group">
                            <label htmlFor="feLastName">Contact</label>
                            <FormInput placeholder="Building Contact" onChange={(evt) => { setBuilding({ ...building, buildingcontact: evt.target.value }) }} />
                          </Col>
                        </Row>
                        <Row form>
                          {/* Location */}
                          <Col md="6" className="form-group">
                            <label htmlFor="feFirstName">Building Location</label>
                            <FormInput placeholder="Location" onChange={(evt) => { setBuilding({ ...building, location: evt.target.value }) }} />
                          </Col>
                          {/* Total Slot */}
                          <Col md="6" className="form-group">
                            <label htmlFor="feLastName">Total slot</label>
                            <FormSelect
                            placeholder="Total Slot" 
                            onChange={(evt) => { setBuilding({ ...building, totalparkingslot: evt.target.value }) }}
                          >
                          {locale.map((locale, idx)=>
                             <option > {locale}</option>
                          )}
                         </FormSelect>
                            <FormInput 
                            />
                          </Col>
                        </Row>
                        <Row form>
                          {/* Description */}
                          <Col md="12" className="form-group">
                            <label htmlFor="feDescription">Description</label>
                            <FormTextarea placeholder=" Description" onChange={(evt) => { setBuilding({ ...building, description: evt.target.value }) }} />

                          </Col>
                        </Row>
                        <Button outline size="sm" theme="primary" className="mb-2 mr-1"
                  onClick={() => { addBuilding(token, building.buildingname, building.buildingcontact, building.location, building.description, building.totalparkingslot) }}>
                  Add now!
      </Button>
                      </Form>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        {/* ######################################### */}
      </Container>



  )
}



export default ManageBuilding;
