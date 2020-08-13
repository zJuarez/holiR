import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Row, Col } from 'reactstrap';

class Header extends Component {
  render() {
    return(
    <React.Fragment>
      <Navbar id="nav" fixed="top">
        <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Jumbotron className="jumbo">
           <div className="container">
               <Row className=" row-header">
                   <Col sm="6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </Col>
               </Row>
           </div>
       </Jumbotron>
    </React.Fragment>
    );
  }
}

export default Header;