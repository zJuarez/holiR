import React from 'react';
import { Col, Card, Container, CardImg, CardImgOverlay, CardTitle, Row, Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom';
import {Loading} from './LoadingComponent';

function RenderMenuItem({ dish }) {

      return (
            <Card>
                  <Link to={`/menu/${dish.id}`}>
                  <CardImg src={dish.image} alt={dish.name} width="100%" />

                  <CardImgOverlay>
                        <CardTitle >{dish.name}</CardTitle>
                  </CardImgOverlay>
                  </Link>
            </Card>
      );

}

function Menu(props) {

      const menu = props.dishes.dishes.map((dish)=> {return(
            <Col md="5">
            <RenderMenuItem dish={dish}> </RenderMenuItem> 
            </Col>
            
      )});

      if(props.dishes.isLoading) {
            return(
                        <Row className="justify-content-center">
                              <Loading/>
                        </Row>
            );
      }
      else if (props.dishes.errMess) {
            return(
                  
                        <Row>
                              <h4>{props.dishes.errMess}</h4>
                        </Row>
                  
            );
      }
      else {
            return (
            <div> 
            <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>

            <Row>
                  {menu}
            </Row>
            </div>

      );
            }
}
export default Menu;