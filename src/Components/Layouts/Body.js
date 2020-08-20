import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

function Body(props) {
    function logState(e) {
        e.preventDefault();
        // console.log(props);
    }

    function pairingChanged(e) {
        // console.log(e);
        props.user.pairing = !props.user.pairing;
        // console.log(props);
    }

    return (
        <div className="body">
            <div className="pic-and-name">
                <div className="photo-and-add-photo">
                    <img className="my-image" src="https://www.placecage.com/150/150"></img>
                    <div className="add-photo-button">
                        <IconButton onClick={logState} edge="start" className="menuButton" color="inherit" aria-label="menu">
                            <AddAPhotoIcon />
                        </IconButton> 
                    </div>
                </div> 
            <h1 className="display-name">Dummy Name</h1>
            </div>
            <form className="app-form" noValidate autoComplete="off">
                <div className="input-field">
                    {/* <TextField id="standard-basic" label="Name" value={props.user.name} /> */}
                    <TextField id="standard-basic" label="Name"/>
                </div>
                <div className="input-field">
                    {/* <TextField id="standard-basic" label="Phone" value={props.user.phone} /> */}
                    <TextField id="standard-basic" label="Phone" />
                </div>
                <div className="input-field">
                    {/* <TextField id="standard-basic" label="Email" value={props.user.email} /> */}
                    <TextField id="standard-basic" label="Email" />
                </div>
                <div className="input-field">
                    <TextField id="standard-basic" label="Password" value="****" />
                </div>
                <div className="input-field">
                    {/* <TextField id="standard-basic" label="Pin" value={props.user.pin} /> */}
                    <TextField id="standard-basic" label="Pin" />
                </div>
                <div className="input-field">
                    <Switch
                        //checked={props.user.pairing}
                        onChange={pairingChanged}
                        color="primary"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                </div>
 
                {/* <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                /> */}
            </form>

  
        </div>
    );
}

export default Body;