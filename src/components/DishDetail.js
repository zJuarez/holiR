import React from 'react';
import { CardText, Card, CardBody, CardImg, Col, CardTitle, Row, Breadcrumb, BreadcrumbItem, Container} from 'reactstrap'
import {Link} from 'react-router-dom'
import CommentForm from './CommentForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Loading } from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';

function getDate(date) {
      return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(date)));
}

function RenderDish({ dish }) {
      return (
            <Card className="mb-2">
                  <CardImg src={baseUrl+dish.image} alt={dish.name} width="100%" />
                  <CardBody>
                        <CardTitle> {dish.name}</CardTitle>
                        <CardText> {dish.description}</CardText>
                  </CardBody>
            </Card>
      );
}

function getStarsHTML(starsNumber){

      var stars = [];
      const starElement = <FontAwesomeIcon icon={faStar}/>;

      console.log(starsNumber);
      
      for(var i=0; i<starsNumber; i++){
            stars.push(starElement);
      }

      return stars;
}

function RenderComments({ comments, dish, addComment }) {

      let commentsX = comments.map((com) => {

            let stars = getStarsHTML(parseInt(com.rating));

            return (<li> 
                        <b> {com.comment} </b>
                        <div> {stars} </div>
                        <p>{com.author} {getDate(com.date)} </p> 
                  </li>
            );
      });

      return (
                  <div> 
                  <h2 className="my-4"> Comments </h2>
                   <ul> {commentsX}</ul>
                   <CommentForm dish={dish} addComment = {addComment}/>
                   </div>
            );
}


function DishDetail(props) {

      if(props.isLoading) {
            return(        
                        <Row className="justify-content-center">
                              <Loading/>
                        </Row>
            );
      }
      else if (props.errMess) {
            return(
                  <Container>
                        <Row>
                              <h4>{props.errMess}</h4>
                        </Row>
                  </Container>
            );
      }
      else if (props.dish != null) {
            return (
                  <div> 
                  <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>

                  <Row>
                        <Col md="5">
                              <RenderDish dish={props.dish} />
                        </Col>
                        <Col md="5">
                              <RenderComments comments={props.comments} 
                              dish = {props.dish}
                              addComment = {props.addComment}
                              />
                        </Col>
                  </Row>

                  </div> 
            );

      } else {
            return (
                  <div></div>
            );
      }
}

export default DishDetail;