import React from 'react';
import { TextField, Button, Box, Select, MenuItem, InputLabel } from '@material-ui/core';
import InputMask from 'react-input-mask';
import { db } from "../services/firebase"
import firebase from 'firebase'

//import Modal from 'components/modal.jsx';
require('firebase/auth')

//const auth = db.auth();

class ParentForm extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            firstName: "John",
            lastName: "Doe",
            email: "blank@gmail.com",
            password: "password",
            phone: "1234567890",
            timezone: "CST",
            essential: "True"

        };
        //this.handleInputChange = this.handleInputChange.bind(this);
        //onChange={e => this.setState({ firstName: e.target.value})}
    }
    async pushNewParentForm(newParent) {
        // Create an account:
        const emailTemp = newParent.email
        const passwordTemp = newParent.password
        firebase.auth().createUserWithEmailAndPassword(emailTemp,passwordTemp).then(cred => {
            console.log(cred.user);
            const modal = document.querySelector('#modal-signup');
            firebase.auth().M.Modal.getInstance(modal).close();
            firebase.auth().signupForm.reset();
        })

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
                    <TextField
                        required
                        fullWidth
                        name="password"
                        type="text"
                        value={this.state.password}
                        label="Password"
                        onChange={e => this.setState({ password: e.target.value })}
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

