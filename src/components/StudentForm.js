import React from 'react';
import { TextField, Button, Box, Select, MenuItem, MenuList, InputLabel} from '@material-ui/core';


class ChildForm extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            grade: "",
            classes: [],
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
                            InputProps= {{ inputProps: { min: 5, max: 18 } }}
                            value={this.state.age}
                            label="Age"
                            onChange={e => this.setState({ age: e.target.value })}
                        />
                    </Box>
                    <Box mt={4}>
                        <InputLabel id="grade">Grade</InputLabel>
                        <Select
                            required
                            fullWidth
                            labelId="grade"
                            value={this.state.grade}
                            onChange={e => this.setState({ grade: e.target.value })}>
                            <MenuItem value="K">K</MenuItem>
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                            <MenuItem value="5">5</MenuItem>
                            <MenuItem value="6">6</MenuItem>
                            <MenuItem value="7">7</MenuItem>
                            <MenuItem value="8">8</MenuItem>
                            <MenuItem value="9">9</MenuItem>
                            <MenuItem value="10">10</MenuItem>
                            <MenuItem value="11">11</MenuItem>
                            <MenuItem value="12">12</MenuItem>
                        </Select>
                    </Box>
                    <Box mt={4}>
                        <InputLabel id="classes">Class(es)</InputLabel>
                        <Select
                            required 
                            fullWidth
                            multiple
                            value={this.state.classes}
                            onChange={e => this.setState({ classes: [...this.state.classes, e.target.value] })}>
                            <MenuItem value="A+M">Art and Music</MenuItem>
                            <MenuItem value="HUM">English</MenuItem>
                            <MenuItem value="LANG">Foreign Language</MenuItem>
                            <MenuItem value="HIST">History</MenuItem>
                            <MenuItem value="CS">Computer Science</MenuItem>
                            <MenuItem value="MATH">Mathematics</MenuItem>
                            <MenuItem value="SCI">Science</MenuItem>
                        </Select>
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