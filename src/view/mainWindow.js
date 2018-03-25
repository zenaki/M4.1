import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

class MainWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'Dashboard',
      leftMenu: false
    }
  }
  handleToggleLeftMenu(event, title) {
    this.setState({title: title, leftMenu: !this.state.leftMenu});
  }
  handleCloseLeftMenu() {
    this.setState({leftMenu: false});
  }
  render() {
    return(
      <div className="MainWindow">
        <MuiThemeProvider>
          <AppBar
            title={this.state.title}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonClick={(event) => this.handleToggleLeftMenu(event, this.state.title)}
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Drawer
            docked={false}
            width={200}
            open={this.state.leftMenu}
            onRequestChange={(leftMenu) => this.setState({leftMenu})}
          >
            <MenuItem onClick={(event) => this.handleToggleLeftMenu(event, 'Dashboard')}>Dashboard</MenuItem>
            <MenuItem onClick={(event) => this.handleToggleLeftMenu(event, 'Tracking')}>Tracking</MenuItem>
          </Drawer>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default MainWindow;
