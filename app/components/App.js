'use strict';

import React, { Component } from 'react';
import io from 'socket.io-client';
import _ from 'lodash';

import Header from './Header';

class App extends Component {

  constructor(props) {
      super(props)
      this.state = {
        title: 'John',
        connected: false,
        status  : 'disconnected',
        title   : '',
        member  : {},
        audience: [],
        speaker : '',
        questions: [],
        currentQuestion: false
      }
      this.connect = this.connect.bind(this);
      this.disconnect = this.disconnect.bind(this);
      this.welcome = this.welcome.bind(this);
      this.joined = this.joined.bind(this);
      this.updateAudience = this.updateAudience.bind(this);
      this.start = this.start.bind(this);
      this.updateState = this.updateState.bind(this);
      this.ask = this.ask.bind(this);
  }

  componentWillMount() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);
    this.socket.on('welcome', this.welcome);
    this.socket.on('joined', this.joined);
    this.socket.on('audience', this.updateAudience);
    this.socket.on('start', this.start);
    this.socket.on('end', this.updateState);
    this.socket.on('ask', this.ask);
  }

  emit(eventName, payload){
    this.socket.emit(eventName, payload);
  }

  connect() {
    var member = (sessionStorage.member) ? JSON.parse(sessionStorage.member): null;

    if (member && member.type ==='audience'){
      this.emit('join', member);
    } else if (member && member.type === 'speaker'){
      this.emit('start', {name: member.name, title : sessionStorage.title});
    }

    this.setState({ status: 'connected'});
  }

  disconnect() {
    this.setState({
      status: 'disconnected',
      title:   'disconnected',
      speaker: ''
    });
  }
  welcome(serverState) {
    this.setState({title: serverState.title});
  }
  joined(member){
     sessionStorage.member = JSON.stringify(member);
     this.setState({ member: member});
  }
  updateAudience(newAudience){
    this.setState({ audience: newAudience});
  }
  start(presentation){
     if( this.state.member.type === 'speaker'){
       sessionStorage.title = presentation.title;
     }
     this.setState(presentation);
  }
  updateState(serverState){
    this.setState(serverState);
  }
  ask(question){
    sessionStorage.answer = '';
    this.setState({ currentQuestion: question });
  }
  /**
   * render
   * @returns {XML}
   */
  render() {
    return (
      <div>
      {this.state.status}
        <Header {...this.state} />
        {_.isNull(this.props.children) ? null : React.cloneElement(
                    this.props.children, {emit: this.emit}, {...this.state}
                )}
      </div>
    )
  }
}

App.propTypes = {
    children: React.PropTypes.node
};

App.defaultProps = {
    children: null
};

export default App;
