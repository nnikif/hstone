/**
 * Created by nikolaynikiforov on 11/07/2017.
 */
import { combineReducers } from 'redux';
import CardsReducer from './reducer_cards'
import ShiftReducer from './reducer_shift'

const rootReducer = combineReducers({
  cards: CardsReducer,
  shift: ShiftReducer
  }
)

export default rootReducer;