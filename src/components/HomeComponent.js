import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';

function RenderCard({item, isLoading, errMess}) {

    if(isLoading){
        return(
            <Loading/>
        );
    }
    else if (errMess){
        return(
        <div> <h4> {errMess} </h4></div>
        );
    }
    else{
    return(
        <Card>
          <Link to={item.category?  `/menu/${item.id}` : "/"}>
            <CardImg src={baseUrl + item.image} alt={item.name} />
          </Link>
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
    }
}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} 
                    isLoading = {props.dishesLoading} 
                    errMess = {props.dishesErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} 
                    isLoading = {props.promosLoading}
                    errMess = {props.promosErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;