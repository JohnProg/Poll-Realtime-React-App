import React, { Component } from 'react';

class Display extends Component {

    render() {
        return (this.props.if) ? <div> {this.props.children}</div> : null;
    }
}

export default Display;
