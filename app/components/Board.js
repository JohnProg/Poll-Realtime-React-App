import React, { Component } from 'react';

class Board extends Component {

    render() {
        return (
          <header>
            <h1>Board: {this.props.title}</h1>
          </header>
        )
    }
}

Board.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default Board;
