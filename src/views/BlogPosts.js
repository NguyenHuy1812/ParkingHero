/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Button, 
  CardHeader
} from "shards-react";

import PageTitle from "../components/common/PageTitle";


var moment = require('moment');
const BlogPosts = ({ bookLot,data, user, token, getUserinfor, checkIn, checkOut }) => {
  const [parking, setParking] = useState('')
  const [original, setOriginal] = useState('')
  const [search, setSearch] = useState( '')
  const id = window.location.pathname.split("/").slice(-1)[0]
  useEffect(() => {
    getUserinfor(token)
  }, [token]);
  useEffect(() => {
    fetch(`https://127.0.0.1:5000/data/building/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
    }).then(results => results.json())
      .then(data => setParking(data.data))
      .catch(function (error) { console.log(error) })
  }, [token, data ])
  useEffect(() => {
    fetch(`https://127.0.0.1:5000/data/building/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
    }).then(results => results.json())
      .then(data => setOriginal(data.data))
      .catch(function (error) { console.log(error) })
  }, [token, data ])
  useEffect(()=>{
    original   &&  setParking({...parking,parkings : original.parkings.filter(park => park.status === search)})
  },[search])
console.log("data in blogpost component", parking)
console.log("original in blogpost component", original)
  return (

    <Container fluid className="main-content-container px-4">
      {/* Page Header */}

      {parking && 
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title={parking.buildingname} subtitle="Building Name" className="text-sm-left" />
        </Row>
      }
        <Row>
        <Button onClick ={()=>setParking(original)} type="button" outline size="sm" theme="primary" className="mb-2 mr-1">
                        All
        </Button>
        <Button onClick ={()=>setSearch('Available')} type="button" outline size="sm" theme="success" className="mb-2 mr-1">
                        Available
        </Button>
        <Button onClick ={()=>setSearch('Booked')} type="button" outline size="sm" theme="danger" className="mb-2 mr-1">
                        Booked!
        </Button>
        </Row>
      {parking &&
        <Row>
          {parking.parkings.map((park, idx) => (
            <Col lg="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post h-100">
                <h5 className="card-title text-fiord-blue"> 
                 {idx + 1}.  Parking name: {park.name} 
               </h5>
               <hr></hr>
                <CardBody >
                <Row>
                    <Col sm = '1'>
                    <div style={{backgroundColor: `${(park.status_color)}`, width: '0.5rem', height: '5rem'}}></div>
                    </Col>
                    <Col sm = '4'>
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
                        Checkin: {moment(park.transaction[0].time_check_in).utc().format('DD-MM-YYYY HH:mm:ss') }  

                      </a>
:  
                        <a className="text-fiord-blue" >
                        Booking:    {moment(park.time_booking).utc().format('DD-MM-YYYY HH:mm:ss') }
                        <a> ( You have 15 minute to check-in ) </a>


                        
                        </a>}
                      </h5>
                     
                    </Col>
                    }
                    
                  </Row>
                 
                </CardBody>
                {user.username && park.owneruser && park.owneruser.name == user.username  && park.transaction && park.transaction[0] && park.transaction.filter(trans => trans.status == 'Checkin').length > 0 ? 
                  
                <CardFooter className="text-muted border-top py-3">
                    <span className="d-inline-block">   
                      
                      <Button onClick ={()=>{checkOut(token,park.id,park.transaction[0].id)}} outline size="sm" theme="primary" className="mb-2 mr-1">
                      CheckOut {park.transaction[0].id}
                      </Button>
                      <Button type="button" outline size="sm" theme="secondary" className="mb-2 mr-1" data-toggle="modal" data-target="#exampleModalLong">
                        Open ticket Parking
                </Button>
              
              {/*modallllllll ##########################Modal */}

              <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <Card>
                          <div class="modal-dialog" role="document" >
                            <Button type="button" class="Close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </Button>
                           
                            <div class="modal-content">
                              <CardHeader class="modal-header">
                              <h4>Ticket Infor</h4>
                                <h5 class="modal-title" id="exampleModalLongTitle">Building:  {park.parkinglot.buildingname}</h5>
                                <h5 class="modal-title" id="exampleModalLongTitle">Park Name: {park.name}</h5>
                              </CardHeader>
                              <CardBody class="modal-body">
                                <Row>
                              <Col>
                              <img
                              src={park.transaction[0].ticket_qrcode}
                          
                              width="200"
                  />
                              </Col>
                              <Col>
                              Time check-in: {moment(park.transaction[park.transaction.length - 1].time_check_in).utc().format('DD-MM-YYYY HH:mm:ss')}
                              </Col>
                                </Row>
                              </CardBody>
                              <div class="modal-footer">
                              <Button data-dismiss="modal" onClick={() => { checkOut(token, park.id, park.transaction[0].id) }} outline size="sm" theme="primary" className="mb-2 mr-1">
                              CheckOut {park.transaction[0].id}
                              </Button>     
                              <Button type="button" outline size="sm" theme="primary" className="mb-2 mr-1" data-dismiss="modal">
                              Close 
                              </Button>     
                               
                              </div>
                            </div>
                          </div>
                        </Card>
                      </div>
                      {/* ################################# */}
                  </span>
                  
                </CardFooter>
                : 
                <CardFooter className="text-muted border-top py-3">
                {user.username && park.owneruser && park.owneruser.name == user.username  &&

                  <span className="d-inline-block">
                   
                    <Button onClick ={()=>{bookLot(token,park.id)}} outline size="sm" theme="danger" className="mb-2 mr-1">
                     {park.status == 'Available' ?
                          'Booking!' : 'Reverse'
                        }
                     </Button>
                     <Button onClick ={()=>{checkIn(token,park.id)}} outline size="sm" theme="warning" className="mb-2 mr-1">
                     Checkin!
                     </Button>
                    
                    </span>
                    }
                    <span className="d-inline-block">   
                      { user.username && park.owneruser == null ? 
                      <Button onClick ={()=>{bookLot(token,park.id)}} outline size="sm" theme="success" className="mb-2 mr-1">
                      Booking!
                      </Button>
                      : null }
                      
                  </span>
                  
                </CardFooter>
                }
              </Card>
            </Col>
          ))}
        </Row>
      }

    </Container>

  );
}
export default BlogPosts;
