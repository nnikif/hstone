/**
 * Created by nikolaynikiforov on 11/07/2017.
 */
import React, {Component} from 'react';
import {loadCards} from '../actions';
import {connect} from 'react-redux';


class SelectCardsType extends Component {
  renderClass(event){
    this.props.loadCards(event.target.value)
  }
  render(){

    return(
      <select onChange={this.renderClass.bind(this)} name="class">
        <option value="Druid">Druid</option>
        <option value="Hunter">Hunter</option>
        <option value="Mage">Mage</option>
        <option value="Neutral">Neutral</option>

        <option value="Paladin">Paladin</option>
        <option value="Priest">Priest</option>
        <option value="Rogue">Rogue</option>
        <option value="Shaman">Shaman</option>
        <option value="Warlock">Warlock</option>
        <option value="Warrior">Warrior</option>
      </select>
    )
  }
}

export default connect(null, {loadCards})(SelectCardsType);