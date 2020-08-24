import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Label, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component {

      constructor(props) {
            super(props);

            this.state = {
                  isModalOpen: false
            }

            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
      }

      toggleModal() {
            this.setState({
                  isModalOpen: !this.state.isModalOpen
            });
      }

      handleSubmit(values) {
            this.toggleModal();
            console.log('submit button pressed');
            console.log('Current State is: ' + JSON.stringify(values));
            alert('Current State is: ' + JSON.stringify(values));
      }

      render() {
            const closeBtn = <button className="close" onClick={this.toggleModal}>&times;</button>;
            return (
                  <div>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                              <ModalHeader close={closeBtn}> How was {this.props.dish.name}! </ModalHeader>
                              <ModalBody>
                                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                          <Row className="form-group">
                                                <Label className="col-12" htmlFor="rating" >Rating</Label>
                                                <Col>
                                                      <Control.select model=".rating" id="rating" name="rating" className="form-control" >
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                      </Control.select>
                                                </Col>
                                          </Row>
                                          <Row className="form-group">
                                                <Label className="col-12" htmlFor="name" >Name</Label>
                                                <Col>
                                                      <Control.text model=".name" id="name" name="name"
                                                            className="form-control"
                                                            validators={{
                                                                  required, minLength: minLength(3), maxLength: maxLength(15)
                                                            }}
                                                      />
                                                      <Errors
                                                            className="text-danger"
                                                            model=".name"
                                                            show="touched"
                                                            messages={{
                                                                  required: 'Required',
                                                                  minLength: 'Must be greater than 2 characters',
                                                                  maxLength: 'Must be 15 characters or less'
                                                            }}
                                                      />
                                                </Col>
                                          </Row>
                                          <Row className="form-group">
                                                <Label className="col-12" htmlFor="comment">Comment</Label>
                                                <Col>
                                                      <Control.textarea model=".comment" id="comment"
                                                            rows="6"
                                                            name="comment"
                                                            className="form-control"
                                                            validators={{
                                                                  required
                                                            }}
                                                      />
                                                      <Errors
                                                            className="text-danger"
                                                            model=".comment"
                                                            show="touched"
                                                            messages={{
                                                                  required: 'Required',
                                                             }}
                                                      />
                                                </Col>
                                          </Row>
                                          <Row className="form-group">
                                                <Col>
                                                      <Button type="submit" color="primary">
                                                            Send Comments
                                                      </Button>
                                                </Col>
                                          </Row>
                                    </LocalForm>
                              </ModalBody>
                        </Modal>
                        <div className="my-4 mr-auto btn btn-outline-primary" onClick={this.toggleModal}>Submit Comment <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon> </div>
                  </div>

            );
      }

}

export default CommentForm;