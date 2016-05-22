import React, { Component } from 'react';
import io from 'socket.io-client';

import Header from './Header';

class App extends Component {

  constructor(props) {
      super(props)
      this.state = {
        title: 'John',
        connected: false
      }
      this.connect = this.connect.bind(this);
      this.disconnect = this.disconnect.bind(this);
      this.welcome = this.welcome.bind(this);
  }

  componentWillMount() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);
    this.socket.on('welcome', this.welcome);
  }

  connect() {
    this.setState({connected: true});
  }

  disconnect() {
    this.setState({connected: false});
  }

  welcome(serverState) {
    this.setState({title: serverState.title});
  }

  render() {
    return (
      <Header title={this.state.title} status={this.state.connected}/>
    )
  }
}

export default App;
