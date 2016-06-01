import React, { Component } from 'react';
import { Link } from 'react-router';

class Whoops404 extends Component {
    render() {
        return (
          <div id="not-found">
            <h1> Whoops... </h1>
            <p> We cannot find the page that you have requested.
                Were upi looking for one of these?</p>
            <Link to="/"> Join as Audience </Link>
            <Link to="/speaker"> Start the presentation </Link>
            <Link to="/board"> View the Board </Link>
          </div>
        )
    }
}

export default Whoops404;
