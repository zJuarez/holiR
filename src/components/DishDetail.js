import React from 'react';
import { CardText, Card, CardBody, CardImg, Col, CardTitle, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import {Link} from 'react-router-dom'

function getDate(date) {
      return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(date)));
}

function RenderDish({ dish }) {
      console.log("here");
      return (
            <Card>
                  <CardImg src={dish.image} alt={dish.name} width="100%" />
                  <CardBody>
                        <CardTitle> {dish.name}</CardTitle>
                        <CardText> {dish.description}</CardText>
                  </CardBody>
            </Card>
      );
}

function RenderComments({ comments }) {
      let commentsX = comments.map((com) => {
            return (<li> <b> {com.comment} </b><p>{com.author} {getDate(com.date)} </p> </li>
            );
      });

      return (<Card>
            <CardBody>
                  <CardTitle> Comments </CardTitle>
                  <CardText> <ul> {commentsX}</ul></CardText>
            </CardBody>
      </Card>);
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
                              <RenderComments comments={props.comments}/>
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