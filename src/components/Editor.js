import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import sad from './../images/crying.svg';
import happy from './../images/happy.svg';

class Form extends Component {
  render() {
    return(
      <div>
        <form>
          <p className="date__title"></p>
          <input className="form__date" type="date" onChange={this.props.calendar}></input>
          <div className="icons__box">
            <div className="radio radio__happy">
              <label for="o1">
                <input type="radio" value="happy" id="o1" name="option" onChange={this.props.happy}/>
                <img src={happy} className="icon happy"></img>
              </label>
            </div>
            <div className="radio radio__sad">
              <label for="o2">
                <input type="radio" value="sad" id="o2" name="option" onChange={this.props.sad}/>
                <img src={sad} className="icon sad"></img>
              </label>
            </div>
          </div>
          <div className="form__textarea">
            <input onChange={this.props.message} type="text" className="form__textarea" cols="100" rows="200" placeholder="Write something cool"></input>
          </div>
          <div className="form__buttons">
            <Link to='/calendar'>
              <button className="button button__save" onSubmit={this.props.handleSubmit}>Guardar</button>
            </Link>
            <Link to='/calendar'>
              <button className="button button__cancel" onSubmit={this.props.handleSubmit}>Cancelar</button>
            </Link>
          </div>
        </form>
      </div>
    )
  };
}

export default Form;
