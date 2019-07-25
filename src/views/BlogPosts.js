/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Countdown from 'react-countdown-now';
import Moment from 'react-moment';

var moment = require('moment');
const BlogPosts = ({ bookLot,data, user, token, getUserinfor, checkIn, checkOut }) => {
  const [parking, setParking] = useState('')
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
  }, [token, data])
  
  const hello = () =>{ alert("hello")}
console.log("data in blogpost component", parking)
  return (

    <Container fluid className="main-content-container px-4">
      {/* Page Header */}

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
                    Parking name: {park.name} {idx + 1}
                  </a>
                </h5>
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
