import React from 'react';
import { Col, Card, CardImg, CardImgOverlay, CardTitle, Row, Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom';

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

      const menu = props.dishes.map((dish)=> {return(
            <Col md="5">
            <RenderMenuItem dish={dish}> </RenderMenuItem> 
            </Col>
            
      )});

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
export default Menu;