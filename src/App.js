import React, { Component } from 'react';
import './App.css';
import Login from './view/login.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage:'',
      mainWindow:''
    };
  }
  componentWillMount() {
    var loginPage;
    loginPage = <Login appContext={this}/>;
    this.setState(
      {
        loginPage:loginPage
      }
    );
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.mainWindow}
      </div>
    );
  }
}

export default App;
