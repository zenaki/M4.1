import React, { Component } from 'react';
import MainWindow from '../view/mainWindow.js';

import axios from 'axios';
var apiBaseUrl = "http://localhost:4000/api/";

class LoginController extends Component {
  constructor(props) {
    super(props);
  }
  loginHandleClick(event, parent) {
    var self = this;
    console.log('login clicked');
    console.log(parent.state);
    var payload = {
      "username":parent.state.username,
      "password":parent.state.password
    };
    axios.post(apiBaseUrl+'login', payload)
      .then(function(response) {
        console.log('response', response);
      })
      .catch(function(error) {
        console.log('error', error);
        self.openMainWindow();
      });
  }
  openMainWindow() {
    var mainWindow;
    mainWindow = <MainWindow />
    this.props.appContext.setState(
      {
        loginPage:'',
        mainWindow:mainWindow
      }
    );
  }
  render() {
    return <div>{/*Class LoginController*/}</div>
  }
}

export default LoginController;
