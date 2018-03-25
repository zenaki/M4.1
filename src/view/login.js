import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import LoginController from '../controller/login.js'

const style = {
  paper: {
    height: 250,
    width: 300,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
  },
  button: {
    margin: 12
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:''
    }
  }
  render() {
    return(
      <div className="LoginScreen">
        <LoginController
          ref="LoginController"
          parentContext={this}
          appContext={this.props.appContext}
        />
        <MuiThemeProvider>
          <Paper
            style={style.paper}
            zDepth={3}>
            <TextField
              floatingLabelText="Username"
              onChange={(event,newValue) => this.setState({username:newValue})}
            /><br />
            <TextField
              floatingLabelText="Password"
              type="password"
              onChange={(event,newValue) => this.setState({password:newValue})}
            /><br />
            <RaisedButton
              label="Login"
              primary={true}
              style={style.button}
              onClick={(event) => this.refs.LoginController.loginHandleClick(event, this)}
            />
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Login;
