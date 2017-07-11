import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CardsPage from './components/CardsPage'
import {loadCards} from './actions'
import {connect} from 'react-redux'


class App extends Component {
  componentDidMount(){
  this.props.loadCards("Druid");
}

  render() {
    if (!this.props.cards){
      return <div>Loading...</div>
    }
    return (
      <div>
        <CardsPage cards={this.props.cards}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {cards: state.cards.filtered }

}

export default connect(mapStateToProps, {loadCards})(App);
