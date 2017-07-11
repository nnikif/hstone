/**
 * Created by nikolaynikiforov on 11/07/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {manaFilter} from '../actions'

class ManaFilter extends Component {
  updateFilter(event){
    this.props.manaFilter(event.target.value)
  }
  renderOptions(){
    const mana_choices=[...Array(11).keys()]
    return mana_choices.map((mana) => <option key={mana} value={mana}>{mana}</option> )
  }
  render() {
    return(
      <div className="filters">Mana:<select onChange={this.updateFilter.bind(this)} name="mana">
        {this.renderOptions()}
      </select></div>
    )
  }
}

export default connect(null, {manaFilter})(ManaFilter);