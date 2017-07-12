/**
 * Created by nikolaynikiforov on 10/07/2017.
 */
import React, {Component} from "react";
import Card from './Card';
import SelectCardsType from './SelectCardsType';
import {connect} from 'react-redux';
import {changeShift} from '../actions';
import ManaFilter from './ManaFilter';
import RaceFilter from './RaceFilter'
import DetailFilter from './DetailFilter'
import RarityFilter from './RarityFilter'
import TitleFilter from './TitleFilter'

class CardsPage extends Component {

  nextCards(){
    this.props.changeShift(8);

  }
  prevCards (){
    this.props.changeShift(-8);
  }

  renderCards(start){
    return (this.props.cards.slice(start,start+8).map((card) =>
      <div key={card.cardId}  className="card">  <Card  card={card}/></div>))
  }
  render(){
    return (
      <div><div>
        <SelectCardsType/>
        <RarityFilter/>
        <ManaFilter/>

        <RaceFilter/>
        <DetailFilter/>
        <TitleFilter/>
      </div>
        <div className="filter-footer"></div>
        <div className="eightcards">
        {this.renderCards(this.props.shift)}

        </div>
        <button onClick={this.prevCards.bind(this)}>Prev.</button>
        <button onClick={this.nextCards.bind(this)}>Next</button>
      </div>
    )
  }


}

function mapStateToProps(state) {
  return {shift: state.cards.shift}
}


export default connect(mapStateToProps,{changeShift})(CardsPage);

