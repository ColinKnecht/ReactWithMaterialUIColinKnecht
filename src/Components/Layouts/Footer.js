import React from 'react';
import Button from '@material-ui/core/Button';

function Footer(props) {
    function saveButtonClicked(e) {
        e.preventDefault();
        console.log('Save Button was clicked');
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(props.user)
        };
        
        const request = new Request('http://projects.codeandtrust.com/api/user/create', options);
        // const response = await fetch(request);
        const response = fetch(request);
        // const status = await response.status;
        const status = response.status;
        console.log(JSON.stringify(props.user));
        console.log(request);
        console.log(response);
        console.log(status);
    }

    function cancelButtonClicked(e) {
        e.preventDefault();
        //return it back to normal state before any text was changed
        console.log('Cancel Button was clicked');
    }
    return (
        <div className="footer">
            <div className="cancel-button">
            <Button onClick={cancelButtonClicked} variant="outlined" size="medium" color="primary">
                Cancel
            </Button>
            </div>
            <div className="save-button">
                <Button onClick={saveButtonClicked} variant="contained" size="medium" color="primary">
                    Save
                </Button>
            </div>
        </div>

    );
  }
  
  export default Footer;