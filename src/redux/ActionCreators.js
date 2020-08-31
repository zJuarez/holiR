import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

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

      return fetch(baseUrl + 'dishes')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
}

//ACTION
export const dishesLoading = () => ({
      type : ActionTypes.DISHES_LOADING
});
//ACTION
export const dishesFailed = (mes) => ({
      type: ActionTypes.DISHES_FAILED,
      payload : mes
});
//ACTION
export const addDishes = (dishes) => ({
      type: ActionTypes.ADD_DISHES,
      payload : dishes
});

// thunk
export const fetchComments = () => (dispatch) => {
      return fetch(baseUrl + 'comments')
      .then(response => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
        error => {
              var errmess = new Error(error.message);
              throw errmess;
        })
      .then(response => response.json())
      .then(comments => dispatch(addComments(comments)))
      .catch(error => dispatch(commentsFailed(error.message)));
}

//ACTION
export const commentsFailed = (mes) => ({
      type: ActionTypes.COMMENTS_FAILED,
      payload : mes
});
//ACTION
export const addComments = (comments) => ({
      type: ActionTypes.ADD_COMMENTS,
      payload : comments
});

//THUNK
export const fetchPromos = () => (dispatch) => {
      dispatch(promosLoading(true));

      return fetch(baseUrl + 'promotions')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}

//ACTION
export const promosLoading = () => ({
      type : ActionTypes.PROMOS_LOADING
});
//ACTION
export const promosFailed = (mes) => ({
      type: ActionTypes.PROMOS_FAILED,
      payload : mes
});
//ACTION
export const addPromos = (promos) => ({
      type: ActionTypes.ADD_PROMOS,
      payload : promos
});
