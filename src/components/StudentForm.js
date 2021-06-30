import React from 'react';
import { TextField, Button, Box, Select, MenuItem, InputLabel, Checkbox, Grid} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const subjects = [
    {class: "Art and Music", value: "A+M"},
    {class: "English", value: "HUM"},
    {class: "Foreign Language", value: "LANG"},
    {class: "History", value: "HIST"},
    {class: "Computer Science", value: "CS"},
    {class: "Science", value: "SCI"},
    {class: "Other", value: "MISC"}
];

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
            misc: "",
            availability: [{day: "", startTime: "12:00", endTime: "12:00"}],
            bio: ""
        };
    }

    handleAvailability = (e, index) => {
       let list = [...this.state.availability];
       list[index][e.target.name] = e.target.value;
       this.setState({ availability: list });
    }

    handleAddInput = () => {
        this.setState({ availability: [...this.state.availability, {day: "", startTime: "12:00", endTime: "12:00"}] });
    }

    handleRemoveInput = (index) => {
        this.setState({
            availability: this.state.availability.filter((s, sindex) => index !== sindex)
        });
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
                        <Autocomplete
                            multiple
                            disableCloseOnSelect
                            id="classes"
                            options={subjects}
                            getOptionLabel={option => option.class}
                            onChange={(e, v) => this.setState({ classes: v })}
                            renderOption={(option, { selected }) => (
                                <React.Fragment>
                                  <Checkbox
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    checked={selected}
                                  />
                                  {option.class}
                                </React.Fragment>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    required
                                    variant="standard"
                                    label="Classes"
                                    placeholder="Select class(es)"
                                />
                            )}
                        />
                    </Box>
                    <Box mt={4}>
                        <TextField
                            fullWidth
                            name="misc"
                            type="text"
                            value={this.state.misc}
                            label='If "Other" or "Foregin Language" selected, please list the subject(s) or language(s).'
                            onChange={e => this.setState({ misc: e.target.value })}
                        />
                    </Box>    
                    <Box mt={4}>
                        <div> Select day(s) and time availble: </div>
                        {this.state.availability.map((val, index) => {
                            return(
                                <div key={index}>
                                    <Box mt={3}>
                                        <Grid container spacing={15}>
                                            <Grid item xs={1.5}>
                                                <InputLabel id="day">Day</InputLabel>
                                                <Select
                                                    required
                                                    autoWidth
                                                    name="day"
                                                    id="day"
                                                    labelId="day"
                                                    value={val.day}
                                                    onChange={e => this.handleAvailability(e, index)} 
                                                    >
                                                    <MenuItem value="MON">Monday</MenuItem>
                                                    <MenuItem value="TUES">Tuesday</MenuItem>
                                                    <MenuItem value="WED">Wednesday</MenuItem>
                                                    <MenuItem value="THURS">Thursday</MenuItem>
                                                    <MenuItem value="FRI">Friday</MenuItem>
                                                    <MenuItem value="SAT">Saturday</MenuItem>
                                                    <MenuItem value="SUN">Sunday</MenuItem>
                                                </Select>
                                            </Grid>
                                            <div style={{position: "relative", top: "10px", wordSpacing: "5px"}}>&nbsp; from &nbsp;</div>
                                            <Grid item xs={1.5}>
                                                <TextField
                                                    required
                                                    name="startTime"
                                                    label="Start Time"
                                                    type="time"
                                                    inputProps={{
                                                        step: 900, //15 min interval
                                                    }}
                                                    value={val.startTime}
                                                    onChange={e => this.handleAvailability(e, index)}
                                                />
                                            </Grid>
                                            <div style={{position: "relative", top: "10px", wordSpacing: "5px"}}>&nbsp; to &nbsp;</div>
                                            <Grid item xs={1.5}>
                                                <TextField
                                                    required
                                                    name="endTime"
                                                    label="End Time"
                                                    type="time"
                                                    inputProps={{
                                                        step: 900, //15 min interval
                                                    }}
                                                    value={val.endTime}
                                                    onChange={e => this.handleAvailability(e, index)}
                                                />
                                            </Grid>
                                            <div style={{position: "relative", top: "10px", wordSpacing: "5px"}}>&nbsp; &nbsp;</div>
                                            { index === 0  ?
                                                <Button 
                                                size="small" 
                                                variant="contained" 
                                                alignItmes="center" 
                                                color="seconday" 
                                                style={{maxWidth: '60px', maxHeight: '35px', minWidth: '20px'}}
                                                onClick={() => {this.handleAddInput()}}>Add</Button>
                                                : <div></div>
                                            }
                                            { index !== 0 ?                                         
                                                <Button 
                                                size="small" 
                                                variant="contained" 
                                                alignItmes="center" 
                                                color="seconday"
                                                style={{maxWidth: '60px', maxHeight: '35px'}}
                                                onClick={() => this.handleRemoveInput(index)}>Remove</Button>
                                                : <div></div>
                                            }
                                        </Grid>
                                    </Box>
                                </div>
                            )
                        })}
                    </Box>
                    <Box mt={3}>
                        <TextField
                            required
                            fullWidth
                            name="bio"
                            type="text"
                            value={this.state.bio}
                            label="Bio"
                            placeholder="Brief bio of student"
                            onChange={e => this.setState({ bio: e.target.value })}
                        />
                    </Box>
                </div>        
                <Box display="flex" mt={5} justifyContent="center">
                    <Button variant="contained" alignItems="center" color="primary" type="submit">Submit</Button>
                </Box>
            </form>
        )
    }
}
export default ChildForm