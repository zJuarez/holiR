import React, { Component } from 'react';
import { Form, FormGroup, Label, Input,Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Row, Modal, ModalHeader, ModalBody, Button} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUtensils, faIdCardAlt, faInfoCircle, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <Row className="mt-4 mb-1"> 
                            <FormGroup check className="col-8 ml-4">
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button className ="mr-4 col" type="submit" value="submit" color="primary">Login</Button>
                            </Row>
                        </Form>
                    
                    </ModalBody>
                </Modal>

                <Navbar dark expand="md" id="nav">
                    <div className="container">
                        <NavbarBrand className="col-md-1 " href="/"><img src={'assets/images/logo.png'} height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse className="mr-auto col-md-3" isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link " to='/home'><FontAwesomeIcon icon={faHome} /> </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'><FontAwesomeIcon icon={faInfoCircle} /> </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link " to='/menu'><FontAwesomeIcon icon={faUtensils} /> </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'><FontAwesomeIcon icon={faIdCardAlt} /></NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        <Button className="ml-auto" onClick={this.toggleModal}><FontAwesomeIcon icon={faSignInAlt}/>  Login</Button>
                        
                    </div>
                </Navbar>
                <Jumbotron className="mb-4" >
                    <div className="container">
                        <Row className="justify-content-center"> 
                            <div className="col-12 col-md-6 text-center">
                                <h1>Ristorante con Fusion</h1>
                                <p className="lead mt-3">We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                            </Row>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}
export default Header;