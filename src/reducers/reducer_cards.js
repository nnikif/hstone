/**
 * Created by nikolaynikiforov on 11/07/2017.
 */
import {LOAD_CARDS} from '../actions';

import _ from 'lodash';

export default function (state=[], action) {
  switch (action.type) {
    case LOAD_CARDS:
      return  _.reject(action.payload.data, (card) => !card.img || card.type==="Hero")

    default:
      return state;
  }
  
}