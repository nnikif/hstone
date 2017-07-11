/**
 * Created by nikolaynikiforov on 11/07/2017.
 */
import {LOAD_CARDS, MANA_FILTER, CHANGE_SHIFT} from '../actions';

import _ from 'lodash';

export default function (state={"data":[], "filtered":[], "shift":0}, action) {
  switch (action.type) {
    case LOAD_CARDS:
      const collectible_cards=_.reject(action.payload.data, (card) => !card.img || card.type==="Hero"|| !card.collectible)
      return  {...state, "data": collectible_cards, "filtered":collectible_cards, "mana":0, "shift":0}

    case MANA_FILTER:
      const filtered=_.filter(state.data, (card) => card.cost>=action.payload)
      return {...state,"filtered":filtered, "mana":action.payload, "shift":0}

    case CHANGE_SHIFT:
    {
      const shifted = state.shift+action.payload
      if ((shifted)>=0 && shifted<state.filtered.length ){
        return {...state, "shift": shifted}
      }
      return state;
    }

    default:
      // console.log(state.data);
      return state;
  }
  
}