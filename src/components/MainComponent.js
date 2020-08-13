import React, {Component} from 'react';
import { Row, Col} from 'reactstrap';
import '../App.css';
import {DISHES} from '../shared/dishes';
import Menu from './MenuComponent';
import DishDetail from './DishDetail';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

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
  return (
    <div className="App">
      <Header/>
      <div className="container">
      <Menu dishes = {this.state.dishes} onClick = {(dishID)=>this.onDishSelect(dishID)}/>
      <DishDetail dish = {this.state.dishes.filter((dishX) => this.state.selectedDish===dishX.id)[0]}/>
      </div>
      <Footer/>
      </div>
  );
  }
}

export default Main;
