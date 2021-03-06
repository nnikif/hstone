/**
 * Created by nikolaynikiforov on 11/07/2017.
 */
import axios from 'axios';
export const LOAD_CARDS='load_cards';
export const CHANGE_SHIFT='change_shift';
export const MANA_FILTER='mana_filter';
export const USE_FILTERS='use_filters';
export const SET_RACE='set_race';
export const SET_DETAIL='set_detail';
export const SET_RARITY='set_rarity';
export const SET_TITLE='set_title';

const ROOT_URL= "https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/";
const AXIOS_CONFIG = {headers: {"X-Mashape-Key": "Ydtx08KSgqmshZYxyUlxzPfGEOaLp1O7tmUjsnmH6D7WwGjQEV"}}


export function loadCards(card_class) {
  return (dispatch) =>{
    const request=axios.get(`${ROOT_URL}${card_class}`, AXIOS_CONFIG)
    dispatch({
      type:LOAD_CARDS,
      payload:request
    })
      .then (()=>dispatch({
      type: USE_FILTERS
    }))
  }

}

export function changeShift(delta){
  return{
    type: CHANGE_SHIFT,
    payload: delta
  }
}

export function manaFilter(mana){
  return{
    type: MANA_FILTER,
    payload: mana
  }
}

export function useFilters(){
  return {
    type: USE_FILTERS
  }
}

export function setRace (race){
  return{
    type: SET_RACE,
    payload:race
  }
}
export function setDetail (detail){
  return{
    type: SET_DETAIL,
    payload:detail
  }
}

export function updateRarity(rarity) {
  return {
    type: SET_RARITY,
    payload: rarity
  }

}
export function setTitle(title) {
  return{
    type: SET_TITLE,
    payload:title
  }

}
