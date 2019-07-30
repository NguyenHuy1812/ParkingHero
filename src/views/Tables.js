import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, CardFooter } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import Moment from 'react-moment';
var moment = require('moment');


const Tables = ({ data, user, token, getUserinfor }) => {
  const [page,setPage] = useState({
                          page1: '',
                          page2: 'none',
                          page3: 'none'
  })
  useEffect(() => {
    getUserinfor(token)
  }, [token])
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Order History" subtitle="History transaction" className="text-sm-left" />
      </Row>

      {/* Default Light Table */}
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Your history booking</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              {/* ############################### */}
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
                <tbody className = "pagination-container">
                
                  {data && data.transactions && data.transactions.filter(
                                          tran => tran.status === 'success').slice(0,20).map((trans, idx) =>
                    
                   <tr  data-page = '1' style = {{display: page.page1}}>
                      <td> {idx + 1} </td>
                      <td>{trans.id}</td>
                      <td> {moment(trans.time_check_in).utc().format('DD-MM-YYYY HH:mm:ss')}</td>
                      {trans.time_check_out ?
                        <td>  {moment(trans.time_check_out).utc().format('DD-MM-YYYY HH:mm:ss')}</td> :
                        <td></td>}
                      {trans.time_check_out ?
                        <td> <Moment to={trans.time_check_out}>{trans.time_check_in}</Moment></td> :
                        <td>
                        </td>
                      }
                      <td>{trans.price} $</td>
                      <td>{trans.status}</td>
                      <td>{trans.totalbill} $</td>


                    </tr>
           
                  )}
                  {data && data.transactions && data.transactions.filter(
                                          tran => tran.status === 'success').slice(20,40).map((trans, idx) =>
                    
                   <tr  data-page = '2' style = {{display: page.page2}}>
                      <td> {idx + 21} </td>
                      <td>{trans.id}</td>
                      <td> {moment(trans.time_check_in).utc().format('DD-MM-YYYY HH:mm:ss')}</td>
                      {trans.time_check_out ?
                        <td>  {moment(trans.time_check_out).utc().format('DD-MM-YYYY HH:mm:ss')}</td> :
                        <td></td>}
                      {trans.time_check_out ?
                        <td> <Moment to={trans.time_check_out}>{trans.time_check_in}</Moment></td> :
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
              {/* 3######################### */}
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

      {/* Default Dark Table */}

    </Container>
  )
};

export default Tables;
