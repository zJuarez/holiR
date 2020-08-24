import { COMMENTS } from '../shared/comments';
import { actionTypes } from 'react-redux-form';
import * as ActionTypes from './ActionTypes';

export const Comments = (state =  COMMENTS, action) =>{
      switch(action.type){
            case ActionTypes.ADD_COMMENT :
                  var comment = action.payload;
                  comment.id = state.length;
                  comment.date = new Date().toISOString();

                  // cocnat is pushing, is an inmutable operation to the state
                  return state.concat(comment);

            default:
                  return state;
      }
}