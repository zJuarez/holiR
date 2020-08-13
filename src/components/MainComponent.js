import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import '../App.css';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishDetail'
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
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/" target="_blank" > Ristorante Zeta</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes = {this.state.dishes} onClick = {(dishID)=>this.onDishSelect(dishID)}/>
      <DishDetail dish = {this.state.dishes.filter((dishX) => this.state.selectedDish===dishX.id)[0]}/>
      </div>
  );
  }
}

export default Main;
