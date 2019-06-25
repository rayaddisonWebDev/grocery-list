import React from 'react';


// hook this button up to the new endpoint
//on button click create a textbox that lets the user put in a new item
//press enter to submit that item to the database

class Button extends React.Component {
    render() {
        return (
            <div className="huge teal ui button">Add Another Item</div>
        )
    }
}

export default Button;