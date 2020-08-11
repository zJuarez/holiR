import React, { Component } from 'react';
import { CardText, Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'

class DishDetail extends Component{


      constructor(props){
            super(props);
      }

      render(){
            var dishX = this.props.dish;

            if(dishX!=null){

                  const comments = dishX.comments.map((com)=> {
                        return(<li> <b> {com.comment} </b><p>{com.author}  {com.date} </p> </li>
                        );
            
            });
                  return(
                        <div className="row"> 
                        <div className="col-md-5 col-12 m-1"> 
                        <Card>
                              <CardImg src={dishX.image} alt={dishX.name} width="100%" />
                              <CardBody>
                                    <CardTitle> {dishX.name}</CardTitle>
                                    <CardText> {dishX.description}</CardText>
                              </CardBody>
                        </Card>
                        </div>

                        <div className="col-md-5 col-12 m-1"> 
                        <Card>
                              <CardBody>
                                    <CardTitle> Comments </CardTitle>
                                     <CardText> <ul> {comments}</ul></CardText>
                              </CardBody>
                        </Card>
                        </div>
                        </div>
                  );

            }else{
                  return(
                        <div></div>
                  );
            }
      }
}

export default DishDetail;