import React from 'react';
import { Col, Card, CardImg, CardImgOverlay, CardTitle, Row} from 'reactstrap'


function RenderMenuItem({ dish, onClick }) {

      return (
            <Card onClick={() => onClick(dish.id)}>

                  <CardImg src={dish.image} alt={dish.name} width="100%" />

                  <CardImgOverlay>
                        <CardTitle >{dish.name}</CardTitle>
                  </CardImgOverlay>

            </Card>
      );

}

function Menu(props) {

      const menu = props.dishes.map((dish)=> {return(
            <Col md="5">
            <RenderMenuItem dish={dish} onClick={()=> props.onClick(dish.id)}> </RenderMenuItem> 
            </Col>
            
      )});

      return (
            <Row>
                  {menu}
            </Row>

      );
}
export default Menu;