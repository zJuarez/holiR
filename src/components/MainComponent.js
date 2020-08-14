import React, {Component} from 'react';
import { Row, Col, Container} from 'reactstrap';
import '../App.css';
import {DISHES} from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './MenuComponent';
import DishDetail from './DishDetail';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';

class Main extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes:DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishID){
      this.setState({
            selectedDish:dishID
      });
}

  render(){
      const HomePage = () => {
            return(
                <Home />
            );
          }

  return (
    <div className="App">
      <Header/>
      <Container> 
      <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />
      </Switch>
      </Container>
      <Footer/>
      </div>
  );
  }
}

export default Main;
