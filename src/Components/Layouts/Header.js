import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function Header(props) {
  function menuButtonClicked(e) {
    e.preventDefault();
    console.log('Menu Button was clicked');
  }

  function threeDotsClicked(e) {
    e.preventDefault();
    console.log('Three Dots was clicked');
  }

  // render: showMenu() {
  //   return <div>
  //       <button onClick={this.showLeft}>Show Left Menu!</button>

  //       <Menu ref="left" alignment="left">
  //           <MenuItem hash="first-page">First Page</MenuItem>
  //           <MenuItem hash="second-page">Second Page</MenuItem>
  //           <MenuItem hash="third-page">Third Page</MenuItem>
  //       </Menu>
        
  //   </div>;
  // }
    return (
      <div className="header">
        <AppBar position="static">
          <Toolbar>
            <div className="hamburger">
              <IconButton edge="start" onClick={menuButtonClicked} className="menuButton" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </div>
            <div className="three-dots">
              <IconButton edge="end" onClick={threeDotsClicked} className="menuButton" color="inherit" aria-label="menu">
                <MoreVertIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>

    );
  }
  
  export default Header;