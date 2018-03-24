import React, { Component } from 'react';
import Editor from './components/Editor';
import Calendar from './components/Calendar';
import { Link, Route, Switch } from 'react-router-dom';

import '././scss/main.css';

import background from './images/descarga.jpg';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleDate = this.handleDate.bind(this);
    this.handleHappy = this.handleHappy.bind(this);
    this.handleSad = this.handleSad.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


    this.state = {
      date: '',
      smile: true,
      cry: false,
      value: ''

    };
  }

    handleDate(e) {
      const calendar = e.target.value
      this.setState({
        date: calendar
      })
    }

    handleHappy(e){
      const smileFace = document.querySelector('input[name="option"]:checked').value;
      this.setState({
        smile: !smileFace})
    }

    handleSad(e){
      const sadFace = document.querySelector('input[name="option"]:checked').value;
      this.setState({
        cry: !sadFace})
    }

    handleText(e){
      this.setState({
        value:e.target.value})
    };

    handleSubmit(e){
      e.preventDefault();
    }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="App-title">Welcome to Life calendar</h1>
        </header>
        <main className="main">
          <div className="main__box">
            <Switch>
              <Route exact path='/' render={() =>
                <Editor calendar={this.handleDate}
                  happy={this.handleHappy}
                  sad={this.handleSad}
                  message={this.handleText}
                  onSubmit={this.handleSubmit}/>}
              />
              <Route path='/calendar' render={() =>
                <Calendar />}
              />
            </Switch>
          </div>





        </main>
      </div>
    )
  };
}

export default App;
