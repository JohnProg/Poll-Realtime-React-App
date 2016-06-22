import React, { Component } from 'react';
import { Link } from 'react-router';

class Join extends Component {

    render() {
        return (
	      <form action="javascript:void(0)" onSubmit={this.join}>

	        <label> Full Name </label>
	        <input ref="name"
	              className="form-control"
	               placeholder="enter your full name...."
	               required />
	        <button className="btn btn-primary"> Join </button>
	        <Link to="/speaker"> Join as a speaker </Link>
	      </form>
	    );
    }
}

export default Join;
