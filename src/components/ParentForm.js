import React from 'react';
import TermsofService from "../assets/backpatTermsOfService.pdf";
import { TextField, Button, Box, Select, MenuItem, InputLabel, Checkbox } from '@material-ui/core';
import InputMask from 'react-input-mask';
import firebase from 'firebase';
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
            password: "",
            timezone: "",
            bio: ""

        };
    }
    async pushNewParentForm(newParent) {
        // Create an account:
        const emailTemp = newParent.email
        const passwordTemp = newParent.password
        firebase.auth().createUserWithEmailAndPassword(emailTemp,passwordTemp);
        // Create user data collection/document:
        var docRef = db.collection("parents");
        await docRef.doc(newParent.email).set(newParent);
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        this.pushNewParentForm(data);

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} id="ParentForm" autoComplete="off">
                <div>
                    <Box mb={4}>
                        <TextField
                            required
                            fullWidth
                            name="firstName"
                            type="text"
                            value={this.state.firstName}
                            label="First Name"
                            onChange={e => this.setState({ firstName: e.target.value })}
                            error={this.state.firstName !== "" && this.state.firstName.match(/[^\\p{P}|^\\d+]+/)}
                            helperText={(this.state.firstName !== "" && this.state.firstName.match(/[^\\p{P}|^\\d+]+/)) ? "Enter your first name." : ""}
                        />
                    </Box>
                    <Box mb={4}>
                    <TextField
                        required
                        fullWidth
                        name="lastName"
                        type="text"
                        value={this.state.lastName}
                        label="Last Name"
                        onChange={e => this.setState({ lastName: e.target.value })}
                        error={this.state.lastName !== "" && this.state.lastName.match(/[^\\p{P}|^\\d+]+/)}
                        helperText={(this.state.lastName !== "" && this.state.lastName.match(/[^\\p{P}|^\\d+]+/)) ? "Enter your last name." : ""}
                    />
                    </Box>
                    <Box mb={4}>
                    <TextField
                        required
                        fullWidth
                        name="email"
                        type="email"
                        value={this.state.email}
                        label="Email"
                        onChange={e => this.setState({ email: e.target.value })}
                        error={this.state.email !== "" && !this.state.email.match(/^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i)}
                        helperText={(this.state.email !== "" && !this.state.email.match(/^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i)) ? "Must enter a valid email address." : ""}
                    />
                    </Box>
                    <Box mb={4}>
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
                            type="text"
                            error={this.state.phone !== "" && this.state.phone.includes("_")}
                            helperText={(this.state.phone !== "" && this.state.phone.includes("_")) ? "Must enter a valid phone number." : ""}
                            />
                    </InputMask>
                    </Box>
                    <Box mb={4}>
                    <TextField
                        required
                        fullWidth
                        name="password"
                        type="password"
                        value={this.state.password}
                        label="Password"
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    </Box>
                    <Box mb={4} mt={6}>
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
                    <Box mb={4}>
                    <TextField
                        required
                        fullWidth
                        multiline
                        rows={4}
                        name="bio"
                        type="text"
                        value={this.state.bio}
                        label="Short Bio"
                        onChange={e => this.setState({ bio: e.target.value })}
                    />
                    </Box>
                    <Checkbox
                        required>
                    </Checkbox> I agree to the <a href={TermsofService} target="_blank" rel="noopener noreferrer">Terms of Service</a>
                </div>
                <Box display="flex" mt={5} justifyContent="center">
                    <Button variant="contained" alignItems="center" color="primary" type="submit">Submit</Button>
                </Box>
            </form>
        )
    }
}
export default ParentForm

