import React from 'react';
import {connect} from 'react-redux';

import Player from 'components/Player';
import Board from 'components/Board';

const PokerTable = ({playersAmount}) => {
  const amount = parseInt(playersAmount, 10);

  return <div className="PokerTable">
    {[...Array(amount)].map((x, i) =>
      <Player number={i + 1} />
    )}
    <Board />
    <div>{playersAmount}</div>
  </div>;
}

const mapStateToProps = (state) => ({
  playersAmount: state.playersAmount
});

export default connect(mapStateToProps)(PokerTable);
