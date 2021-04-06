import React from 'react';
import { TextField, Button, Box, Select, MenuItem, InputLabel } from '@material-ui/core';
import InputMask from 'react-input-mask';
import { db } from "../services/firebase"

class ParentForm extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            timezone: "",
            essential: ""
        };
        //this.handleInputChange = this.handleInputChange.bind(this);
        //onChange={e => this.setState({ firstName: e.target.value})}
    }
    async pushNewParentForm(newParent) {
        var docRef = db.collection("parents");
        await docRef.doc(newParent.email).set(newParent);
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        this.pushNewParentForm(data);

    }

    render() {
        console.log("ParentForm.js")
        return (
            <form onSubmit={this.handleSubmit} id="ParentForm" autoComplete="off">
                <div>
                    <Box mt={4}>
                        <TextField
                            required
                            fullWidth
                            name="firstName"
                            type="text"
                            value={this.state.firstName}
                            label="Parent's First Name"
                            onChange={e => this.setState({ firstName: e.target.value })}
                        />
                    </Box>
                    <Box mt={4}>
                        <TextField
                            required
                            fullWidth
                            name="lastName"
                            type="text"
                            value={this.state.lastName}
                            label="Parent's Last Name"
                            onChange={e => this.setState({ lastName: e.target.value })}
                        />
                    </Box>
                    <Box mt={4}>
                        <TextField
                            required
                            fullWidth
                            name="email"
                            type="text"
                            value={this.state.email}
                            label="Parent's Email"
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                    </Box>
                    <Box mt={4}>
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
                                type="text" />
                        </InputMask>
                    </Box>
                    <Box mt={6}>
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
                    </Box>
                </div>

                <Box display="flex" mt={5} justifyContent="center">
                    <Button variant="contained" alignItems="center" color="primary" type="submit">Submit</Button>
                </Box>

            </form>
        )
    }
}
export default ParentForm

