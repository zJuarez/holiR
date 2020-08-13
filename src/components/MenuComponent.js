import React, { Component } from 'react';
import { Col, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'

class Menu extends Component {

      constructor(props) {
            super(props);
      }

      render() {

            const menu = this.props.dishes.map((dish) => {
                  return (

                        <Col key={dish.id} md="5">
                              <Card onClick={() => this.props.onClick(dish.id)}>

                                    <CardImg src={dish.image} alt={dish.name} width="100%" />

                                    <CardImgOverlay>
                                          <CardTitle >{dish.name}</CardTitle>
                                    </CardImgOverlay>

                              </Card>
                        </Col>
                  );
            });

            return (
                  <div className="container">
                        <div className="row">
                              {menu}
                        </div>
                  </div>

            );
      }
}

export default Menu;