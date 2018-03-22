import React, { Component } from 'react';

import sad from './../images/crying.svg';
import happy from './../images/happy.svg';

class Form extends Component {
  render() {
    return(
      <div>
        <form>
          <p className="date__title"></p>
          <input className="form__date" type="date"></input>
          <div className="icons__box">
            <div className="radio radio__happy">
              <label for="radio">
                <input type="radio" value="happy" name="option" onChange={this.props.handleOption}/>
                <img src={happy} className="icon happy"></img>
              </label>
            </div>
            <div className="radio radio__sad">
              <label for="radio">
                <input type="radio" value="sad" name="option" onChange={this.props.handleOption}/>
                <img src={sad} className="icon sad"></img>
              </label>
            </div>
          </div>
          <div className="form__textarea">
            <input onChange={this.props.handleChange} type="text" className="form__textarea" cols="100" rows="200" placeholder="Write something cool"></input>
          </div>
          <div className="form__buttons">
            <button className="button button__save" onSubmit={this.props.handleSubmit}>Guardar</button>
            <button className="button button__cancel">Cancelar</button>
          </div>
        </form>
      </div>
    )
  };
}

export default Form;
