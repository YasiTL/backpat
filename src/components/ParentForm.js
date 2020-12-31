import React from 'react';
import { TextField, Button, Box, Select, MenuItem, InputLabel } from '@material-ui/core';
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
                        fullWidth
                        name="firstName"
                        type="text"
                        value={this.state.firstName}
                        label="First Name"
                        onChange={e => this.setState({ firstName: e.target.value })}
                    />
                    <br />
                    <TextField
                        required
                        fullWidth
                        name="lastName"
                        type="text"
                        value={this.state.lastName}
                        label="Last Name"
                        onChange={e => this.setState({ lastName: e.target.value })}
                    />
                    <br />
                    <TextField
                        required
                        fullWidth
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
                            required
                            fullWidth
                            name="phone"
                            label="Phone"
                            ref={this.inputRef}
                            type="text"/>
                    </InputMask>
                    <br />
                    <InputLabel id="timezone-label">Timezone</InputLabel>
                    <Select
                        required
                        fullWidth
                        labelId="timezone-label"
                        value={this.state.timezone}
                        onChange={e => this.setState({ timezone: e.target.value })}>
                        <MenuItem value="PST">Pacific Standard Time</MenuItem>
                        <MenuItem value="MST">Mountain Standard Time</MenuItem>
                        <MenuItem value="CST">Central Standard Time</MenuItem>
                        <MenuItem value="EST">Eastern Standard Time</MenuItem>
                        <MenuItem value="AST">Alaska Standard Time</MenuItem>
                        <MenuItem value="HST">Hawaii-Aleutian Standard Time</MenuItem>
                    </Select>
                    <br />
                </div>

                <Box display="flex" mt={5} justifyContent="center">
                    <Button variant="contained" alignItems="center" color="primary" type="submit">Submit</Button>
                </Box>

            </form>
        )
    }
}
export default ParentForm

