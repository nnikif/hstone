/**
 * Created by nikolaynikiforov on 12/07/2017.
 */
import React, {Component} from 'react';
import {useFilters, updateRarity} from '../actions';
import {connect} from 'react-redux';

class RarityFilter extends Component{
  changeRarity(event){
    this.props.updateRarity(event.target.value);
    this.props.useFilters()

  }
  render(){
    return(
      <div className="filters">
      <select value={this.props.rarity} onChange={this.changeRarity.bind(this)} name="Rarity">
        <option value="Any">Any</option>
        <option value="Free">Free</option>
        <option value="Common">Common</option>
        <option value="Rare">Rare</option>
        <option value="Epic">Epic</option>s
        <option value="Legendary">Legendary</option>

      </select></div>
    )
  }}

  function mapStateToProps(state) {
  return{
    rarity: state.rarity
  }

  }

export default connect(mapStateToProps, {useFilters,updateRarity})(RarityFilter);