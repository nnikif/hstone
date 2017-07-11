/**
 * Created by nikolaynikiforov on 11/07/2017.
 */
import axios from 'axios';
export const LOAD_CARDS='load_cards';
export const CHANGE_SHIFT='change_shift'

const ROOT_URL= "https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/";
const AXIOS_CONFIG = {headers: {"X-Mashape-Key": "Ydtx08KSgqmshZYxyUlxzPfGEOaLp1O7tmUjsnmH6D7WwGjQEV"}}

export function loadCards(card_class) {
  const request=axios.get(`${ROOT_URL}${card_class}`, AXIOS_CONFIG)
  console.log(request)

  return{
    type: LOAD_CARDS,
    payload: request
  }
}

export function changeShift(delta){
  return{
    type: CHANGE_SHIFT,
    payload: {delta}
  }
}