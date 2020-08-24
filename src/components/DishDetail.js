import React from 'react';
import { CardText, Card, CardBody, CardImg, Col, CardTitle, Row, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap'
import {Link} from 'react-router-dom'
import CommentForm from './CommentForm';

function getDate(date) {
      return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(date)));
}

function RenderDish({ dish }) {
      return (
            <Card className="mb-2">
                  <CardImg src={dish.image} alt={dish.name} width="100%" />
                  <CardBody>
                        <CardTitle> {dish.name}</CardTitle>
                        <CardText> {dish.description}</CardText>
                  </CardBody>
            </Card>
      );
}

function RenderComments({ comments, dish }) {
      let commentsX = comments.map((com) => {
            return (<li> <b> {com.comment} </b><p>{com.author} {getDate(com.date)} </p> </li>
            );
      });

      return (
                  <div> 
                  <h2 className="my-4"> Comments </h2>
                   <ul> {commentsX}</ul>
                   <CommentForm dish={dish}/>
                   </div>
            );
}


function DishDetail(props) {

      console.log(props.dish);

      if (props.dish != null) {
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
                              <RenderComments comments={props.comments} dish = {props.dish}/>
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