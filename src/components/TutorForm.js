import React from 'react'
import { TextField, Button, Box, Select, MenuItem, InputLabel } from '@material-ui/core';
import InputMask from 'react-input-mask';

import "firebase/auth"
import { Firebase } from './Firebase/firebase.js';
const firestore = Firebase.fire.firestore()

// const fb = require('firebase')
// require('firebase/firestore')
// firebase.initializeApp(
//     { apiKey: "AIzaSyCzxBjP_AJsFP3D_QRR6lClDPhJGQvcQ08",
// authDomain: "backpat-93a28.firebaseapp.com",
// databaseURL: "https://backpat-93a28.firebaseio.com",
// projectId: "backpat-93a28",
// storageBucket: "backpat-93a28.appspot.com",
// messagingSenderId: "1083110648310",
// appId: "1:1083110648310:web:d387ae855b693f91277fd7",
// measurementId: "G-V7N7PHR1GC"})


// if (!firebase.apps.length) {
//     firebase.initializeApp({});
//  }else {
//     firebase.app(); // if already initialized, use that one
//  }

class TutorForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "John",
            lastName: "Doe",
            email: "blank@gmail.com",
            phone: "1234567890",
            university: "Illinois Institute of Technology",
            timezone: "CST",
            bio: "beep boop"
        };
        //this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log(data)

        const TutorRef = firestore.collection("tutors").doc(data.firstName).set(data)
        console.log("success")
        //sendToFirebase(data)
    }

    render() {
        console.log("TutorForm.js")
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
                    <TextField
                        required
                        fullWidth
                        name="university"
                        type="text"
                        value={this.state.university}
                        label="Unviersity"
                        onChange={e => this.setState({ university: e.target.value })}
                    />
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
                </div>
                <Box display="flex" mt={5} justifyContent="center">
                    <Button variant="contained" alignItems="center" color="primary" type="submit">Submit</Button>
                </Box>
            </form>
        )
    }
}
export default TutorForm