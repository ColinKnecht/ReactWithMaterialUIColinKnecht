import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import axios from '../../axios-orders';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

class Body extends Component {
    state = {
        user: {
            email: null,
            id: null,
            ip_address: null,
            name: null,
            pairing: null,
            phone: null,
            pin: null,
            post_data: null,
            timestamp: null
        },
        error: false
    }

    componentWillMount() {
        console.log(this.props);
        axios.get('http://projects.codeandtrust.com/api/user/99')
            .then(response => {
                this.setState({user: response.data});
                console.log(response.data[0]);
            })
            .catch(error => {
                this.setState({error: true});
                console.log('error on componentDidMount');
            });
    }

    pairingChanged() {
        // console.log(e);
        this.props.user.pairing = !this.props.user.pairing;
        // this.setState({this.state.user[0].pairing: this.state.user[0].pairing});
        // console.log(props);
    }

    render() {
        let userName = '';
        let phone = '';
        let email = '';
        let pin = '';
        let pairing = false;

        if (this.state.user[0]) {
            console.log(this.state.user[0].name);
            userName = this.state.user[0].name;
            phone = this.state.user[0].phone;
            email = this.state.user[0].email;
            pin = this.state.user[0].pin;
            pairing = this.state.user[0].pairing === 0 ? false : true ;
        } 
        
        return (
            <div className="body">
                <div className="pic-and-name">
                    <div className="photo-and-add-photo">
                        <img className="my-image" src="https://www.placecage.com/150/150"></img>
                        <div className="add-photo-button">
                            <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
                                <AddAPhotoIcon />
                            </IconButton> 
                        </div>
                    </div> 
                <h1 className="display-name">{userName}</h1>
                </div>
                <form className="app-form" noValidate autoComplete="off">
                    <div className="input-field">
                        <TextField id="standard-basic" label="Name" value={userName} />
                    </div>
                    <div className="input-field">
                        <TextField id="standard-basic" label="Phone" value={phone} />
                    </div>
                    <div className="input-field">
                        <TextField id="standard-basic" label="Email" value={email} />
                    </div>
                    <div className="input-field">
                        <TextField id="standard-basic" label="Password" value="****" />
                    </div>
                    <div className="input-field">
                        <TextField id="standard-basic" label="Pin" value={pin} />
                    </div>
                    <div className="input-field">
                        <Switch
                            checked={pairing}
                            onChange={this.pairingChanged}
                            color="primary"
                            name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                    </div>        
                </form>
            </div>
        );
    }
}

export default Body;