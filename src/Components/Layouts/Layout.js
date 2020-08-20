import React, {Component} from 'react';
import Auxiliary from '../../HigherOrderComponents/Auxiliary';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import SideDrawer from '../../Navigation/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((previousState) => {
            console.log(previousState);
           return {showSideDrawer: !previousState.showSideDrawer}
        });
    } 

    render () {
        return (
            <Auxiliary>
                <Header />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler} />
                <Body />
                <Footer />
            </Auxiliary>
        )
    }
}

export default Layout;