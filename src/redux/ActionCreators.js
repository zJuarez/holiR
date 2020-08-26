import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';

//ACTION
export const addComment = (dishId, rating, author, comment) => ({
      type : ActionTypes.ADD_COMMENT,
      payload : {
            dishId: dishId,
            rating : rating,
            author : author,
            comment : comment
      }
});

//THUNK
export const fetchDishes = () => (dispatch) => {
      dispatch(dishesLoading(true));

      setTimeout(()=>{
            //after 2000
            dispatch(addDishes(DISHES));
      }, 1000);
}

//ACTION
export const dishesLoading = () => ({
      type : ActionTypes.DISHES_LOADING
});
//ACTION
export const dishesFialed = (mes) => ({
      type: ActionTypes.DISHES_FAILED,
      payload : mes
});
//ACTION
export const addDishes = (dishes) => ({
      type: ActionTypes.ADD_DISHES,
      payload : dishes
});