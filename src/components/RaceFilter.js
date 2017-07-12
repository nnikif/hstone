/**
 * Created by nikolaynikiforov on 12/07/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {useFilters,setRace} from '../actions'

class RaceFilter extends Component{
  changeRace(event){
    this.props.setRace(event.target.value)
    this.props.useFilters()
  }
  render(){
    return (
      <div className="filters">Race: <input onChange={this.changeRace.bind(this)}/></div>
    )
  }
}

export default connect(null, {useFilters,setRace}) (RaceFilter);