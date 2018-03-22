import React, { Component } from 'react';
import Form from './components/Form';

import '././scss/main.css';

import background from './images/descarga.jpg';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.handleChange = this.handlechange.bind(this);
  //   this.state = {
  //     option: '1'
  //   }
  //
  //   handleChange(e) {
  //     // const icon = document.querySelector('input:checked').value;
  //     this.setState({
  //       option: e.target.value
  //     });
  //   }

// }
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="App-title">Welcome to Life calendar</h1>
        </header>
        <main className="main">
          <div className="main__box">
            <Form />
          </div>
        </main>
      </div>
    )
  };
}

export default App;
