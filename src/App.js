import React, { Component } from 'react';
import Form from './components/Form';

import '././scss/main.css';

import background from './images/descarga.jpg';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOption = this.handleOption.bind(this);

    this.state = {
      value: '',
      option: '1'
    };

    handleChange(e){
      this.setState({
        value:e.target.value})
    };

    handleSubmit(e){
      e.preventDefault();
    }

    handleOption(e){
      const selected = document.querySelector('input[name="option"]:checked').value;
      this.setState({
        option:e.target.value})
    }

}
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="App-title">Welcome to Life calendar</h1>
        </header>
        <main className="main">
          <div className="main__box">
            <Form onChange={this.handleOption} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
          </div>
        </main>
      </div>
    )
  };
}

export default App;
