/**
 * Created by nikolaynikiforov on 11/07/2017.
 */
import {LOAD_CARDS, MANA_FILTER} from '../actions';

import _ from 'lodash';

export default function (state={"data":[], "filtered":[]}, action) {
  switch (action.type) {
    case LOAD_CARDS:
      const collectible_cards=_.reject(action.payload.data, (card) => !card.img || card.type==="Hero"|| !card.collectible)
      return  {...state, "data": collectible_cards, "filtered":collectible_cards}

    case MANA_FILTER:
      const filtered=_.filter(state.data, (card) => card.cost>=action.payload)
      return {...state,"filtered":filtered}

    default:
      // console.log(state.data);
      return state;
  }
  
}