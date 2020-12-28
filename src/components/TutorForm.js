import React from 'react'
import { TextField, Button } from '@material-ui/core';
import InputMask from 'react-input-mask';

class TutorForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "john",
            lastName: "doe",
            email: "blank@mailcatch.com",
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
    }


render() {
    console.log("TutorForm.js")
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
                        required
                        name="phone"
                        label="Phone"
                        ref={this.inputRef}
                        type="text"/>
                </InputMask>
                <br />
                <TextField
                    required
                    name="university"
                    type="text"
                    value={this.state.university}
                    label="Unviersity"
                    onChange={e => this.setState({ university: e.target.value })}
                />
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
                <TextField
                    required
                    multiline
                    rows={4}
                    name="bio"
                    type="text"
                    value={this.state.bio}
                    label="Short Bio"
                    onChange={e => this.setState({ bio: e.target.value })}
                />
            </div>
            <p className="full">
                <Button variant="contained" color="primary" type="submit">Submit</Button>
            </p>
        </form>
    )
    
    
}
    }
export default TutorForm