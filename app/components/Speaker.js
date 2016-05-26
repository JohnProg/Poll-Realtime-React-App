import React, { Component } from 'react';

class Speaker extends Component {

    render() {
        return (
          <header>
            <h1>Speaker: {this.props.title}</h1>
          </header>
        )
    }
}

Speaker.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default Speaker;
