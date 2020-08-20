import React from 'react';
import Auxiliary from '../HigherOrderComponents/Auxiliary';
import Backdrop from '../UI/Backdrop';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    console.log(props);
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closed} />
            <div>SideDrawer is here</div>
        </Auxiliary>
    );
}; 

export default sideDrawer;