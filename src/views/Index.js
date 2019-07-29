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

const Index = ({handleSubmit, handleChange, user }) => {
  return (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
     {/* ################################## */}
     <Row>
      
      {/* <!-- Navigation --> */}
      <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="#page-top">HERO PARK</a>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto my-2 my-lg-0">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#services">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="https://hero-park.netlify.com//sign-in">Log In</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
      {/* ######################################## */}
    
      {/* ######################################## */}
      <div>
           
            <header className="masthead">
              <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                  <div className="col-lg-10 align-self-end">
                    <h1 className="text-uppercase text-white font-weight-bold">YOUR AWESOME PARKING SOLUTION</h1>
                    <hr className="divider my-4" />
                  </div>
                  <div className="col-lg-8 align-self-baseline">
                    <p className="text-white-75 font-weight-light mb-5"> An awesome app, help users to finding - booking - sharing the parking lots together!!!!!</p>
                    <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                  </div>
                </div>
              </div>
            </header>
            
            <section className="page-section bg-primary" id="about">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 text-center">
                    <h2 className="text-white mt-0">We've got what you need!</h2>
                    <hr className="divider light my-4" />
                    <p className="text-white-50 mb-4">Hero Park have fully solution for every problems with parking lots that you met!!!</p>
                    <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
                  </div>
                </div>
              </div>
            </section>
           
            <section className="page-section" id="services">
              <div className="container">
                <h2 className="text-center mt-0">Our Service</h2>
                <hr className="divider my-4" />
                <div className="row">
                  <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                      <i className="fas fa-4x fa-tasks text-primary mb-4" />
                      <h3 className="h4 mb-2">Easy Manage!</h3>
                      <p className="text-muted mb-0">Make the manage the parking more easy!</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                      <i className="fas fa-4x fa-gem text-primary mb-4" />
                      <h3 className="h4 mb-2">Most convenient!</h3>
                      <p className="text-muted mb-0">Main purpose is making better life!</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                      <i className="fas fa-4x fa-globe text-primary mb-4" />
                      <h3 className="h4 mb-2">Easy to Use</h3>
                      <p className="text-muted mb-0">Friendly and simple to using!</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                      <i className="fas fa-4x fa-heart text-primary mb-4" />
                      <h3 className="h4 mb-2">Support 24/7!</h3>
                      <p className="text-muted mb-0">Nice support everytime you need! </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
           
            <section id="portfolio">
              <div className="container-fluid p-0">
                <div className="row no-gutters">
                  <div className="col-lg-4 col-sm-6">
                      <img className="img-fluid" src="img/img1.jpeg" alt="" />
                      <div className="portfolio-box-caption">
                       
                      </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                   
                      <img className="img-fluid" src="img/img2.jpg" alt="" />
                      <div className="portfolio-box-caption">
                        
                        
                      </div>
                   
                  </div>
                  <div className="col-lg-4 col-sm-6">
                   
                      <img className="img-fluid" src="img/img3.jpg" alt="" />
                      <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">
                          Category
                        </div>
                        
                      </div>
                    
                  </div>
                  <div className="col-lg-4 col-sm-6">
                      <img className="img-fluid" src="img/portfolio/thumbnails/4.jpg" alt="" />
                      <div className="portfolio-box-caption">
                        
                      </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                      <img className="img-fluid" src="img/portfolio/thumbnails/5.jpg" alt="" />
                      <div className="portfolio-box-caption">
                       
                      </div>
                    
                  </div>
                  <div className="col-lg-4 col-sm-6">
                      <img className="img-fluid" src="img/portfolio/thumbnails/6.jpg" alt="" />
                      <div className="portfolio-box-caption p-3">
                        
                      </div>
                    
                  </div>
                </div>
              </div>
            </section>
 
            <section className="page-section bg-dark text-white"
            style={{backgroundImage:'url(img/sign1.jpg)',
            backgroundPositionY: 'center', backgroundPositionX: 'center',
          backgroundSize: 'contain', backgroudRepeat:'no-repeat'}}
            >
              <div className="container text-center">
                
              </div>
            </section>
         
            <section className="page-section" id="contact">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 text-center">
                    <h2 className="mt-0">Let's Get In Touch!</h2>
                    <hr className="divider my-4" />
                    <p className="text-muted mb-5">Ready to start with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                    <i className="fas fa-phone fa-3x mb-3 text-muted" />
                    <div>+84 937-520-735</div>
                  </div>
                  <div className="col-lg-4 mr-auto text-center">
                    <i className="fas fa-envelope fa-3x mb-3 text-muted" />
                    <a className="d-block" href="mailto:contact@yourwebsite.com">contact@heropark.com</a>
                  </div>
                </div>
              </div>
            </section>
            <footer className="bg-light py-5">
              <div className="container">
                <div className="small text-center text-muted">Copyright © 2019 - Hero Park</div>
              </div>
            </footer>
          </div>
    
    
          </Row>
          {/* ################################### */}
  </Container>
)};
export default Index;
