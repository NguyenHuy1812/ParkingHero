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
  FormSelect
} from "shards-react";

import PageTitle from "../components/common/PageTitle"



const AllBuildingNearly = ({ bookLot, data, token, deleteParkingLot, getUserinfor }) => {
  const [building, setBuilding] = useState('')
  const [original, setOriginal] = useState('')
  const locale = [
    'District 1' , 'District 2' ,'District 3','District 3','District 4','District 5', 
    'District 6' , 'District 7', 'District 8' , 'District 9', 'District 10', 'District 11',
    'District 12', 'District GoVap', 'District PhuNhuan', 'District HocMon','District BinhChanh'
  ]
  const [search, setSearch] = useState('')
  useEffect(() => {
    fetch('https://hero-park.herokuapp.com/data/building', {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
    }).then(results => results.json())
      .then(data => setBuilding(data.data))
      .catch(function (error) { console.log(error) }
      )      
  }, [token, data , search ==='All' ])
  useEffect(() => {
    fetch('https://hero-park.herokuapp.com/data/building', {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
    }).then(results => results.json())
      .then(data => setOriginal(data.data))
      .catch(function (error) { console.log(error) }
      )
  }, [token, data , search ==='All' ])
  useEffect(()=>{
    original   &&  setBuilding(original.filter(build => build.location === search))
  },[search])
  useEffect(() => { getUserinfor(token) }, [token])
  console.log('this building', building,'orifinal',  original, search)

  return (

    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Your nearly Building" subtitle="Components" className="text-sm-left" />
      <Row>
        Select nearly building
        <FormSelect onChange = {(evt)=>setSearch(evt.target.value)}>
          <option value ='All'>All</option>
        { original && locale.map((locale, idx)=>
    
                              <option value ={locale}> {locale} (Total building: {original.filter(build =>build.location == locale).length}) </option>
                           )}
        </FormSelect>
      </Row>
      </Row>
      {building && building[0] && building[0].parkings &&
        <Row>
          {building.map((name, idx) => (
            <Col lg="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post h-100">
                <Row>
                  <Col sm = '1'></Col>
                  <Col><h4 className="card-title text-fiord-blue">
               
               Building : {name.buildingname}
            
           </h4></Col>
                </Row>
                <Row>
                  <Col sm ='1'>
                  </Col>
                  <Col sm= '5'>
                  <h5 className="card-title text-fiord-blue">
                 
                    Location: {name.location}
                 
                </h5>
                  </Col>
                <Col sm= '6'>
                <h5>Contact: {name.buildingcontact} </h5>

                </Col>
                </Row>
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
                </CardBody>
                <CardFooter className="text-muted border-top py-3">
                  <span className="d-inline-block">

                    <Button  outline size="sm" theme="secondary" className="mb-2 mr-1">
                    <Link to={"/parking-slot/" + name.id}> list of parking for this</Link>
               </Button>

                  </span>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      
      }



    </Container>
  );
}


export default AllBuildingNearly;
