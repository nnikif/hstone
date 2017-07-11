/**
 * Created by nikolaynikiforov on 11/07/2017.
 */
import {CHANGE_SHIFT, LOAD_CARDS} from '../actions'

export default function (state=0, action){
  switch (action.type) {
    case CHANGE_SHIFT:
    {
      if ((state+action.payload.delta)>=0){
        return state+action.payload.delta
      }
      return state;
    }
    case LOAD_CARDS:
      return 0;

    default:
      return state;
  }
  }