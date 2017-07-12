/**
 * Created by nikolaynikiforov on 12/07/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {useFilters,setTitle} from '../actions'

class TitleFilter extends Component{
  changeTitle(event){
    this.props.setTitle(event.target.value)
    this.props.useFilters()
  }
  render(){
    return (
      <div className="filters">Title: <input onChange={this.changeTitle.bind(this)}/></div>
    )
  }
}

export default connect(null, {useFilters,setTitle}) (TitleFilter);