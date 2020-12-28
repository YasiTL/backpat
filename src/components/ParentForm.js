import { TextField, Button } from '@material-ui/core';
import React from 'react';
import InputMask from 'react-input-mask';

class ParentForm extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            firstName: "john",
            lastName: "doe",
            email: "blank@mailcatch.com",
            phone: "1234567890",
            timezone: "CST",
            essential: "True"


        };
        //this.handleInputChange = this.handleInputChange.bind(this);
        //onChange={e => this.setState({ firstName: e.target.value})}
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log(data)
    }

    render() {
        console.log("ParentForm.js")
        return (
            <form onSubmit={this.handleSubmit} id="ParentForm" autoComplete="off">
                <div>                        
                    <TextField
                        required
                        name="firstName"
                        type="text"
                        value={this.state.firstName}
                        label="First Name"
                        onChange={e => this.setState({ firstName: e.target.value })}
                    />
                    <br />
                    <TextField
                        required
                        name="lastName"
                        type="text"
                        value={this.state.lastName}
                        label="Last Name"
                        onChange={e => this.setState({ lastName: e.target.value })}
                    />
                    <br />
                    <TextField
                        required
                        name="email"
                        type="text"
                        value={this.state.email}
                        label="Email"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <br />
                    <InputMask
                        mask="(999)-999-9999"
                        value={this.state.phone}
                        onChange={e => this.setState({ phone: e.target.value })}
                        >
                        <TextField
                            ref={this.inputRef}
                            type="text"/>
                    </InputMask>
                    <br />
                    <TextField
                        required
                        name="timezone"
                        type="text"
                        value={this.state.timezone}
                        label="Timezone"
                        onChange={e => this.setState({ timezone: e.target.value })}
                    />
                    <br />
                </div>

                <p className="full">
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                </p>

            </form>
        )
    }
}
export default ParentForm

