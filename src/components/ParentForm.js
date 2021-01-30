import React from 'react';
import { TextField, Button, Box, Select, MenuItem, InputLabel } from '@material-ui/core';
import InputMask from 'react-input-mask';
import { db } from "../services/firebase"

class ParentForm extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            firstName: "John",
            lastName: "Doe",
            email: "blank@gmail.com",
            phone: "1234567890",
            timezone: "CST",
            essential: "True"


        };
        //this.handleInputChange = this.handleInputChange.bind(this);
        //onChange={e => this.setState({ firstName: e.target.value})}
    }
    async pushNewParentForm(newParent) {
     // const res = await db.collection("parents").doc(newParent.email).set(newParent)
        var docRef = await db.collection("parents");
        docRef.doc(newParent.email).set(newParent);
        console.log("Send to firebase successful")
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log(data)
        this.pushNewParentForm(data);

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
                        label="Parent's First Name"
                        onChange={e => this.setState({ firstName: e.target.value })}
                    />
                    <br /><br /><br />
                    <TextField
                        required
                        fullWidth
                        name="lastName"
                        type="text"
                        value={this.state.lastName}
                        label="Last Name"
                        onChange={e => this.setState({ lastName: e.target.value })}
                    />
                    <br /><br /><br />
                    <TextField
                        required
                        fullWidth
                        name="email"
                        type="text"
                        value={this.state.email}
                        label="Email"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <br /><br /><br />
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
                    <br /><br /><br />
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
                    <br /><br /><br />
                </div>

                <Box display="flex" mt={5} justifyContent="center">
                    <Button variant="contained" alignItems="center" color="primary" type="submit">Submit</Button>
                </Box>

            </form>
        )
    }
}
export default ParentForm

