import React, { Component } from 'react';

class Audience extends Component {

    render() {
        return (
          <header>
            <h1>Audience: {this.props.title}</h1>
          </header>
        )
    }
}

Audience.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default Audience;
