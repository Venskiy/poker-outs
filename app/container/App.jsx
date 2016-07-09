import React from 'react';
import {connect} from 'react-redux';
import {selectCard, addCardToPokerTable, removeCardFromPokerTable} from 'actions';

import CardsBlock from './CardsBlock';
import PokerTable from './PokerTable';
import Options from './Options';

const App = React.createClass({
  render() {
    return (
      <div className="Container">
        <div className="CardsAndTable">
          <CardsBlock selectedCard={this.props.selectedCard} addCardToPokerTable={this.props.addCardToPokerTable} />
          <PokerTable selectedCard={this.props.selectedCard} onSelectCard={this.props.onSelectCard} removeCardFromPokerTable={this.props.removeCardFromPokerTable} />
        </div>
        <div className="OptionsAndStatistics">
          <Options />
        </div>
      </div>
    );
  }
});

const mapStateToProps = (state) => ({
  selectedCard: state.selectedCard,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectCard(cardName) {
    dispatch(selectCard(cardName));
  },

  addCardToPokerTable(cardName, selectedCard) {
    dispatch(addCardToPokerTable(cardName));
  },

  removeCardFromPokerTable(cardName) {
    dispatch(removeCardFromPokerTable(cardName));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
