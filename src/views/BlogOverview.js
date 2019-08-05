import React, { useEffect , useState } from "react";
import { Link } from 'react-router-dom'

import {
  Container, Button, Row, Col, Card, CardHeader,CardBody,CardFooter,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Moment from 'react-moment';

var moment = require('moment');


const BlogOverview = ({getUserinfor, token, data, user, checkOut,checkIn,bookLot, transaction  }) => {
  const [page,setPage] = useState({
    page1: '',
    page2: 'none',
    page3: 'none'
})
  
  // const [value, setValue] = useState(0)
  // setTimeout(()=> setValue(value+ 1), 3000)
  useEffect(() => { getUserinfor(token) }, [token])
  
  return (

    <  Container fluid className="main-content-container px-4 pb-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Your current check-in lot" subtitle="add-new-parking" className="text-sm-left" />
      </Row>
      
{/* // ################################# */}
{data  ?
  <Row>
    {data.parkings.map((park, idx) => (
      <Col lg="6" sm="12" className="mb-4" key={idx}>
        <Card small className="card-post h-100">
          <h5 className="card-title text-fiord-blue">
            
          {idx + 1}. Parking Name:  {park.name} 
           
          </h5>
          <hr/>
          <CardBody >
            <Row>
              <Col sm='1'>
                <div style={{ backgroundColor: `${(park.status_color)}`, width: '0.5rem', height: '5rem' }}></div>
              </Col>
              <Col sm='4'>
                <h5 className="card-title text-fiord-blue"> 
                    Status: {park.status}
                </h5>
                <h5> Price: {park.price} $ / hour</h5>
                {/* <h5> You have 15 minute to checkin</h5> */}
              </Col>
              {park.owneruser &&
                <Col sm='7'>
                  <h5 className="card-title text-fiord-blue">
                    Building name:   {park.parkinglot.buildingname}
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
                <Button type="button" outline size="sm" theme="primary" className="mb-2 mr-1" data-toggle="modal" data-target={"#exampleModalLong"+ park.transaction[0].id}>
                        Open ticket Parking
                </Button>
              </span>
              {/*modallllllll ##########################Modal */}

              <div class="modal fade" id={"exampleModalLong"+ park.transaction[0].id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <Card>
                          <div class="modal-dialog" role="document" >
                           
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
                              <h5>
                                Book by:  {park.owneruser.name}
                              </h5>
                              <h5>
                              Time check-in: {moment(park.transaction[park.transaction.length - 1].time_check_in).utc().format('DD-MM-YYYY HH:mm:ss')}
                             </h5>
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
            </CardFooter>
            :
            //If current user not the same( can )
            <CardFooter className="text-muted border-top py-3">
              {user.username && park.owneruser && park.owneruser.name == user.username &&

                <span className="d-inline-block">

                  <Button onClick={() => { bookLot(token, park.id) }} outline size="sm" theme="danger" className="mb-2 mr-1">
                    {park.status == 'Available' ?
                      'Booking!' : 'Reverse'
                    }
                  </Button>
                  <Button onClick={() => { checkIn(token, park.id) }} outline size="sm" theme="warning" className="mb-2 mr-1">
                    Checkin!
       </Button>
                </span>
              }
              <span className="d-inline-block">
                {user.username && park.owneruser == null ?
                  <Button onClick={() => { bookLot(token, park.id) }} outline size="sm" theme="success" className="mb-2 mr-1">
                    Booking!
        </Button>
                  : null}
              </span>
      
                      
            </CardFooter>
          }
        </Card>
      </Col>
    ))}
  </Row>:
  null}




{/* // ################################ */}

<Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Your order now booking</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Order
                  </th>
                  
                  <th scope="col" className="border-0">
                    Time Check in
                  </th>
                  <th scope="col" className="border-0">
                    Time Check out
                  </th>
                  <th scope="col" className="border-0">
                    Total time
                  </th>
                  <th scope="col" className="border-0">
                    Price /hour
                  </th>
                  <th scope="col" className="border-0">
                    Status
                  </th>
                 
                  <th scope="col" className="border-0">
                    Total Bill
                  </th>
                </tr>
              </thead>
              <tbody>
             { transaction &&  transaction.filter(tran=>tran.status === 'Checkin').map((trans, idx)=>
                <tr>
                    <td> {idx + 1 } </td>
                    <td>{trans.id}</td>
                    <td> {moment(trans.time_check_in).utc().format('DD-MM-YYYY HH:mm:ss') }</td>
                    {trans.time_check_out ?
                    <td>  {moment(trans.time_check_out).utc().format('DD-MM-YYYY HH:mm:ss')}</td>:
                    <td></td>}
                    {trans.time_check_out ?
                    <td> <Moment to ={trans.time_check_out}>{trans.time_check_in}</Moment></td> : 
                    <td>
                    </td>
                     }
                     <td>{trans.price} $</td>
                    <td>{trans.status}</td>
                    <td>{trans.totalbill} $</td>

                    
                    </tr>
              )}  
                
                
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
     
    <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Your Buidling information" subtitle="Current situation" className="text-sm-left" />
      </Row>
    {/* building infor */}
   
      {data.building && data.building[0] && data.building[0].parkings &&
        <Row>
          {data.building.map((name, idx) => (
            <Col lg="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post h-100">
                <h5 className="card-title text-fiord-blue">
               
                    Building : {name.buildingname}
                 
                </h5>
                <h5 className="card-title text-fiord-blue">    
                    Location:{name.street_location} - {name.location}
                </h5>
                {/* <h5><h5>Your building in
                come: {total[0][1]} $</h5></h5> */}
                <CardBody >
                  <Row>
                    <Col sm='1'>
                      {name.parkings.filter(parking => parking.status == 'Available').length === 0 ?
                        <div style={{ backgroundColor: `red`, width: '0.5rem', height: '5rem' }}></div>
                        :
                        <div style={{ backgroundColor: `green`, width: '0.5rem', height: '5rem' }}></div>
                      }
                    </Col>
                    <Col sm='5'>
                    
                        <h5 className="text-fiord-blue">
                          Total Lot:  {name.parkings.length}
                        </h5>
          
                    </Col>
                    <Col sm='6'>
                      <h5 className="card-title text-fiord-blue">
                        
                          Available Lot:  {name.parkings.filter(parking => parking.status === 'Available').length}
                      
                      </h5>
                      <h5 className="card-title">
                      </h5>
                      <p className="card-text"></p>
                    </Col>
                  </Row>
                  <Row>
                    
                  </Row>
                  
                </CardBody>
                <CardFooter className="text-muted border-top py-3">
                  <span className="d-inline-block">

                    <Button  outline size="sm" theme="secondary" className="mb-2 mr-1">
                    <Link to={`/parking-slot/${name.id}`}> list of parking for this</Link>
               </Button>

                  </span>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      
      }
    {/* buidling infor########################### */}
    {/* talble black for building infor */}
    <Row>
      <Col>
        <Card small className="mb-4 overflow-hidden">
          <CardHeader className="bg-dark">
            <h6 className="m-0 text-white">Your building recently transactions </h6>
          </CardHeader>
          <CardBody className="bg-dark p-0 pb-3">
            <table className="table table-dark mb-0">
              <thead className="thead-dark">
              <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Order
                  </th>
                  
                  <th scope="col" className="border-0">
                    Time Check in
                  </th>
                  <th scope="col" className="border-0">
                    Time Check out
                  </th>
                  <th scope="col" className="border-0">
                    Total time
                  </th>
                  <th scope="col" className="border-0">
                    Price /hour
                  </th>
                  <th scope="col" className="border-0">
                    Status
                  </th>
                 
                  <th scope="col" className="border-0">
                    Total Bill
                  </th>
                </tr>
              </thead>
              <tbody className = "pagination-container">
              {data && data.building && data.building[0] && data.building[0].totaltransaction &&
              data.building[0].totaltransaction.slice(0,20).map((trans, idx)=>
              <tr data-page = '1' style = {{display: page.page1}}>
              <td> {idx + 1} </td>
              <td>{trans.id}</td>
              <td> {moment(trans.time_check_in).utc().format('DD-MM-YYYY HH:mm:ss') }</td>
              {trans.time_check_out ?
              <td>  {moment(trans.time_check_out).utc().format('DD-MM-YYYY HH:mm:ss')}</td>:
              <td></td>}
              {trans.time_check_out ?
              <td> <Moment to ={trans.time_check_out}>{trans.time_check_in}</Moment></td> 
              : 
              <td>
              </td>
               }
               <td>{trans.price} $</td>
              <td>{trans.status}</td>
              <td>{trans.totalbill} $</td>

              
              </tr>
              )}  
              {data && data.building && data.building[0] && data.building[0].totaltransaction &&
              data.building[0].totaltransaction.slice(20,40).map((trans, idx)=>
              <tr data-page = '2' style = {{display: page.page2}}>
              <td> {idx + 21} </td>
              <td>{trans.id}</td>
              <td> {moment(trans.time_check_in).utc().format('DD-MM-YYYY HH:mm:ss') }</td>
              {trans.time_check_out ?
              <td>  {moment(trans.time_check_out).utc().format('DD-MM-YYYY HH:mm:ss')}</td>:
              <td></td>}
              {trans.time_check_out ?
              <td> <Moment to ={trans.time_check_out}>{trans.time_check_in}</Moment></td> : 
              <td>
              </td>
               }
               <td>{trans.price} $</td>
              <td>{trans.status}</td>
              <td>{trans.totalbill} $</td>

              
              </tr>
              )}  
              </tbody>
            </table>
          
          </CardBody>
          <CardFooter>
          <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                  <li class="page-item"><a onClick = {()=>setPage({page1: '', page2: 'none', page3: 'none'})}class="page-link" href="#">1</a></li>
                  <li class="page-item"><a onClick = {()=>setPage({page1: 'none', page2: '', page3: 'none'})} class="page-link" href="#">2</a></li>
                  <li class="page-item"><a onClick = {()=>setPage({page1: 'none', page2: 'none', page3: ''})}class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
              </nav>
          </CardFooter>
        </Card>
      </Col>
    </Row>
    {/* end############################## */}



    </Container>
  )
};



export default BlogOverview;
