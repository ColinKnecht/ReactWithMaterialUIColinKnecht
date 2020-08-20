import React from 'react';

function SlidingMenu() {
      return (
        <div>
            <button onClick={this.showLeft}>Show Left Menu!</button>

            <Menu ref="left" alignment="left">
                <MenuItem hash="first-page">First Page</MenuItem>
                <MenuItem hash="second-page">Second Page</MenuItem>
                <MenuItem hash="third-page">Third Page</MenuItem>
            </Menu>
            
        </div>
      );
    }
    
    export default SlidingMenu;