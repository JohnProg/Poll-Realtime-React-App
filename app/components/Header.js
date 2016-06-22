import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
          <header>
            <h1>{this.props.title} {this.props.status}</h1>
          </header>
        )
    }
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default Header;
