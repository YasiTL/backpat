import React from 'react';
import { TextField, Button, Box } from '@material-ui/core';


class ChildForm extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            grade: "",
            bio: ""
        };
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log(data)
    }

    render() {
        console.log("ChildForm.js")
        return (
            <form onSubmit={this.handleSubmit} id="ChildForm" autoComplete="off">
                <div>
                    <Box mt={4}>
                        <TextField
                            required
                            fullWidth
                            name="firstName"
                            type="text"
                            value={this.state.firstName}
                            label="Student's First Name"
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
                            label="Student's Last Name"
                            onChange={e => this.setState({ lastName: e.target.value })}
                        />
                    </Box>
                    <Box mt={4}>
                        <TextField
                            required
                            fullWidth
                            name="age"
                            type="number"
                            InputProps= {{ inputProps: { min: 0, max: 99 } }}
                        />
                    </Box>
                </div>
            </form>
        )
    }
}
export default ChildForm

/*
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
                        name="age"
                        type="text"
                        value={this.state.age}
                        label="Age"
                        onChange={e => this.setState({ age: e.target.value })}
                    />
                    <br /><br /><br />
                    <TextField
                        required
                        fullWidth
                        name="grade"
                        type="text"
                        value={this.state.grade}
                        label="Grade Level"
                        onChange={e => this.setState({ grade: e.target.value })}
                    />
                    <br /><br /><br />
                    <TextField
                        required
                        fullWidth
                        name="bio"
                        type="text"
                        value={this.state.bio}
                        label="Bio"
                        onChange={e => this.setState({ bio: e.target.value })}
                    />
                    <br /><br /><br />
                    <p> Please enter the date and time at which your child would be available for tutoring. </p>
                    <input type="date" name="freedate"></input>
                    <input type="time" name="freetime"></input>
                    <br /><br /><br />
                </div>

                <Box display="flex" mt={5} justifyContent="center">
                    <Button variant="contained" alignItems="center" color="primary" type="submit">Submit</Button>
                </Box>
 */