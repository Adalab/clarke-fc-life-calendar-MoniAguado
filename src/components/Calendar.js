import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class Calendar extends Component {
  render() {
    return(
      <div className="calendar">
        <Link to='/'>
          <div className="calendar__clic">
            <button className="button-plus">+</button>
          </div>
        </Link>
        <div className="calendar__faces">
          <div className="faces"></div>
        </div>
      </div>
    )
  }
}

export default Calendar;
