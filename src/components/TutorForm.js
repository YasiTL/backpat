import React from 'react'
import TermsofService from "../assets/backpatTermsOfService.pdf";
import { TextField, Button, Box, Select, MenuItem, InputLabel, Checkbox } from '@material-ui/core';
import InputMask from 'react-input-mask';
import firebase from 'firebase';
import { db } from "../services/firebase"

class TutorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            university: "",
            timezone: "",
            bio: ""
        };
    }

    async pushNewTutorForm(newTutor) {
        // Create an account:
        const emailTemp = newTutor.email
        const passwordTemp = newTutor.password
        firebase.auth().createUserWithEmailAndPassword(emailTemp, passwordTemp);
        // Create user data collection/document:
        var docRef = db.collection("tutors");
        await docRef.doc(newTutor.email).set(newTutor);

        //window.history.push('/successpage')
        //return res.redirect('/successPage');
        window.location.href = ('/success');
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state;
        this.pushNewTutorForm(data);

    }

    render() {
        console.log("TutorForm.js")
        return (
            <form onSubmit={this.handleSubmit} id="TutorForm" autoComplete="off">
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
                            error={this.state.firstName !== "" && !this.state.firstName.match(/^[a-zA-Z]+$/)}
                            helperText={(this.state.firstName !== "" && !this.state.firstName.match(/^[a-zA-Z]+$/)) ? "Enter your first name." : ""}
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
                            error={this.state.lastName !== "" && !this.state.lastName.match(/^[a-zA-Z]+$/)}
                            helperText={(this.state.lastName !== "" && !this.state.lastName.match(/^[a-zA-Z]+$/)) ? "Enter your last name." : ""}
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
                            error={this.state.password !== "" && !this.state.password.match(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/)}
                            helperText={(this.state.password !== "" && !this.state.password.match(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/)) ? "Minimum eight characters including one number and one special character" : ""}
                        />
                    </Box>
                    <Box mb={4}>
                        <TextField
                            required
                            fullWidth
                            name="university"
                            type="text"
                            value={this.state.university}
                            label="University"
                            onChange={e => this.setState({ university: e.target.value })}
                            error={this.state.university !== "" && !this.state.university.replace(/\s/g, "").length}
                            helperText={(this.state.university !== "" && !this.state.university.replace(/\s/g, "").length) ? "Enter your university." : ""}
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
                            error={this.state.bio !== "" && !this.state.bio.replace(/\s/g, "").length}
                            helperText={(this.state.bio !== "" && !this.state.bio.replace(/\s/g, "").length) ? "Tell us about yourself!" : ""}
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
export default TutorForm
