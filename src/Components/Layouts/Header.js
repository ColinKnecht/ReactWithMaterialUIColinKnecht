import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DrawerToggle from '../../Navigation/DrawerToggle';

class Header extends Component {

  menuButtonClicked(e) {
    e.preventDefault();
    console.log('Menu Button was clicked');
    // <DrawerToggle clicked={this.props.drawerToggleClicked} />
  }

  threeDotsClicked(e) {
    e.preventDefault();
    console.log('Three Dots was clicked');
  }

  render () {
    console.log(this.props);
    return (
      <div className="header">

        <AppBar position="static">
          <Toolbar>
            <div className="hamburger">
              <IconButton edge="start" onClick={this.menuButtonClicked} className="menuButton" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </div>

            <div className="three-dots">
              <IconButton edge="end" onClick={this.threeDotsClicked} className="menuButton" color="inherit" aria-label="menu">
                <MoreVertIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  }

  export default Header;