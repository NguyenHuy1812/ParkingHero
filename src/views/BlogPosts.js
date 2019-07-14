/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";


class BlogPosts extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      // First list of posts.
      PostsListOne: [
        {
          backgroundImage: require("../images/content-management/1.jpeg"),
          category: "Business",
          categoryTheme: "dark",
          author: "Anna Kunis",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "Conduct at an replied removal an amongst",
          body:
            "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
          date: "28 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/2.jpeg"),
          category: "Travel",
          categoryTheme: "info",
          author: "James Jamerson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Off tears are day blind smile alone had ready",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/3.jpeg"),
          category: "Technology",
          categoryTheme: "royal-blue",
          author: "Jimmy Jackson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Difficult in delivered extensive at direction",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/4.jpeg"),
          category: "Business",
          categoryTheme: "warning",
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title: "It so numerous if he may outlived disposal",
          body:
            "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
          date: "29 February 2019"
        }
      ],

      // Second list of posts.
      PostsListTwo: [
        {
          backgroundImage: require("../images/content-management/5.jpeg"),
          category: "Travel",
          categoryTheme: "info",
          author: "Anna Ken",
          authorAvatar: require("../images/avatars/0.jpg"),
          title:
            "Attention he extremity unwilling on otherwise cars backwards yet",
          body:
            "Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/6.jpeg"),
          category: "Business",
          categoryTheme: "dark",
          author: "John James",
          authorAvatar: require("../images/avatars/1.jpg"),
          title:
            "Totally words widow one downs few age every seven if miss part by fact",
          body:
            "Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education to admitted speaking...",
          date: "29 February 2019"
        }
      ],

  }
      
  }

  componentDidMount() {
    this.fetchdata()
    console.log('componentDidmount', this.state.PostsListFive)
    
   
  }
  fetchdata() {
    fetch('http://127.0.0.1:5000/testJson', {
      method: 'GET',
    }).then(results => results.json())
      .then(data => this.setState({ building: data.data[0].building[0],
                                    user :   data.data[0]        
                                                      }))
      .catch(function (error) { console.log(error) });
  }
  render() {
    console.log('hello blogpost', this.props)
    const {
      building
    } = this.state;
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="add-new-parking" subtitle="Components" className="text-sm-left" />
        </Row>

         {building ?
        <Row>
          {building.parkings.map((park, idx) => (
            <Col lg="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post h-100">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url('${park.name}')` }}
                />
                <CardBody>
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="#">
                    Parking name: {park.name}
                    </a>
                  </h5>
                  <p className="card-text"></p>
                </CardBody>
                <CardFooter className="text-muted border-top py-3">
                  <span className="d-inline-block">
                    Owner by: {this.state.user.username}
                    <a className="text-fiord-blue" href = ''>
                    
                    </a>{" "}
                    in Builingname: {this.state.building.buildingname}
                    {/* <a className="text-fiord-blue" href={post.categoryUrl}>
                      {post.category}
                    </a> */}
                  </span>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
         
         : null}
      </Container>
    );
  }
}

export default BlogPosts;
