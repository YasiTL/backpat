import React from 'react';
import { TextField, Box, Typography, Button} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';


class ClassForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            className: "",
            gradeLevel: "",
            experience: "",
            day: "",
            StartTime: "",
            EndTime: "",
            numOfStudents: ""

        };
    }

    
    render() {
        
        return (
                <div>
                    <Box pl={103.5}>
                        <Button variant="outlined" color="primary"> <EditOutlinedIcon/> &nbsp; Edit user </Button>
                    </Box>

                    <Box pb={3} pl={1}>
                        <Typography variant="h5" gutterbottom>Tutor Experience</Typography>
                    </Box>

                    <Box mb={4}>
                        <TextField
                            required
                            style={{ width: 450, paddingRight: "2%" }}
                            variant = "outlined"
                            name="className"
                            type="text"
                            value={this.state.className}
                            label="Class Name"
                            onChange={e => this.setState({ className: e.target.value })}
                            error={this.state.className !== "" && !this.state.className.match(/^[a-zA-Z]+$/)}
                            helperText={(this.state.className !== "" && !this.state.className.match(/^[a-zA-Z]+$/)) ? "Enter the name of the class you taught" : ""}
                        />
                        <TextField
                            required
                            style={{ width: 450, paddingRight: "2%" }}
                            variant = "outlined"
                            name="gradeLevel"
                            type="text"
                            value={this.state.gradeLevel}
                            label="Grade Level"
                            onChange={e => this.setState({ gradeLevel: e.target.value })}
                            error={this.state.gradeLevel !== "" && !this.state.gradeLevel.match(/^[a-zA-Z]+$/)}
                            helperText={(this.state.gradeLevel !== "" && !this.state.gradeLevel.match(/^[a-zA-Z0-9]+$/)) ? "Enter your grade level" : ""}
                        />
                    </Box>

                    <Box>
                        <TextField
                                required
                                style={{ width: 923.5, paddingRight: "2%" }}
                                variant = "outlined"
                                name="experience"
                                type="text"
                                value={this.state.experience}
                                label="Elaborate on your expertise with this current class"
                                onChange={e => this.setState({ experience: e.target.value })}
                                error={this.state.experience !== "" && !this.state.experience.match(/^[a-zA-Z]+$/)}
                                helperText={(this.state.experience !== "" && !this.state.experience.match(/^[a-zA-Z0-9]+$/)) ? "Please enter a valid response" : ""}
                            />
                        <AddCircleIcon style={{ fontSize: 40, marginTop: 7.5 }}/>
                    </Box>

                    <Box pb={3} pl={1} pt={4}>
                        <Typography variant="h5" gutterbottom>Tutoring Availibility</Typography>
                    </Box>

                    <Box pt={2}>
                        <Typography style={{fontSize:15}}>I am available on: </Typography>
                        <FormControl variant="outlined">
                            <InputLabel style={{ marginLeft: 130, marginTop: -35 }} id="demo-simple-select-outlined-label">Day</InputLabel>
                            <Select
                                style={{ width: 150, marginLeft: 130, marginTop: -35 }}
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={this.state.day}
                                onChange={e => this.setState({ day: e.target.value })}
                                label="Day"
                            >
                                <MenuItem value="Sun">Sunday</MenuItem>
                                <MenuItem value="Mon">Monday</MenuItem>
                                <MenuItem value="Tues">Tuesday</MenuItem>
                                <MenuItem value="Wed">Wednesday</MenuItem>
                                <MenuItem value="Thurs">Thursday</MenuItem>
                                <MenuItem value="Fri">Friday</MenuItem>
                                <MenuItem value="Sat">Saturday</MenuItem>
                            </Select>
                        </FormControl>
                        <Typography style={{fontSize:15, marginTop: -43, marginLeft: 300}}>from: </Typography>
                        <FormControl variant="outlined">
                            <InputLabel style={{ marginLeft: 350, marginTop: -35 }} id="demo-simple-select-outlined-label-d">Start Time</InputLabel>
                            <Select
                                style={{ width: 150, marginLeft: 350, marginTop: -35 }}
                                labelId="demo-simple-select-outlined-label-d"
                                id="demo-simple-select-outlined-d"
                                value={this.state.StartTime}
                                onChange={e => this.setState({ StartTime: e.target.value })}
                                label="StartTime"
                            >
                                <MenuItem value={0}>12:00am</MenuItem>
                                <MenuItem value={1}>1:00am</MenuItem>
                                <MenuItem value={2}>2:00am</MenuItem>
                                <MenuItem value={3}>3:00am</MenuItem>
                                <MenuItem value={4}>4:00am</MenuItem>
                                <MenuItem value={5}>5:00am</MenuItem>
                                <MenuItem value={6}>6:00am</MenuItem>
                                <MenuItem value={7}>7:00am</MenuItem>
                                <MenuItem value={8}>9:00am</MenuItem>
                                <MenuItem value={9}>9:00am</MenuItem>
                                <MenuItem value={10}>10:00am</MenuItem>
                                <MenuItem value={11}>11:00am</MenuItem>
                                <MenuItem value={12}>12:00pm</MenuItem>
                                <MenuItem value={13}>1:00pm</MenuItem>
                                <MenuItem value={14}>2:00pm</MenuItem>
                                <MenuItem value={15}>3:00pm</MenuItem>
                                <MenuItem value={16}>4:00pm</MenuItem>
                                <MenuItem value={17}>5:00pm</MenuItem>
                                <MenuItem value={18}>6:00pm</MenuItem>
                                <MenuItem value={19}>7:00pm</MenuItem>
                                <MenuItem value={20}>8:00pm</MenuItem>
                                <MenuItem value={21}>9:00pm</MenuItem>
                                <MenuItem value={22}>10:00pm</MenuItem>
                                <MenuItem value={23}>11:00pm</MenuItem>
                            </Select>
                        </FormControl>
                        <Typography style={{fontSize:15, marginTop: -43, marginLeft: 520}}>to: </Typography>
                        <FormControl variant="outlined">
                            <InputLabel style={{ marginLeft: 555, marginTop: -35 }} id="demo-simple-select-outlined-label-d-end">End Time</InputLabel>
                            <Select
                                style={{ width: 150, marginLeft: 555, marginTop: -35 }}
                                labelId="demo-simple-select-outlined-label-d-end"
                                id="demo-simple-select-outlined-d-end"
                                value={this.state.EndTime}
                                onChange={e => this.setState({ EndTime: e.target.value })}
                                label="EndTime"
                            >
                                <MenuItem value={0}>12:00am</MenuItem>
                                <MenuItem value={1}>1:00am</MenuItem>
                                <MenuItem value={2}>2:00am</MenuItem>
                                <MenuItem value={3}>3:00am</MenuItem>
                                <MenuItem value={4}>4:00am</MenuItem>
                                <MenuItem value={5}>5:00am</MenuItem>
                                <MenuItem value={6}>6:00am</MenuItem>
                                <MenuItem value={7}>7:00am</MenuItem>
                                <MenuItem value={8}>9:00am</MenuItem>
                                <MenuItem value={9}>9:00am</MenuItem>
                                <MenuItem value={10}>10:00am</MenuItem>
                                <MenuItem value={11}>11:00am</MenuItem>
                                <MenuItem value={12}>12:00pm</MenuItem>
                                <MenuItem value={13}>1:00pm</MenuItem>
                                <MenuItem value={14}>2:00pm</MenuItem>
                                <MenuItem value={15}>3:00pm</MenuItem>
                                <MenuItem value={16}>4:00pm</MenuItem>
                                <MenuItem value={17}>5:00pm</MenuItem>
                                <MenuItem value={18}>6:00pm</MenuItem>
                                <MenuItem value={19}>7:00pm</MenuItem>
                                <MenuItem value={20}>8:00pm</MenuItem>
                                <MenuItem value={21}>9:00pm</MenuItem>
                                <MenuItem value={22}>10:00pm</MenuItem>
                                <MenuItem value={23}>11:00pm</MenuItem>
                            </Select>
                        </FormControl>
                        <AddCircleIcon style={{ fontSize: 40, marginTop: -26.5, marginLeft: 18 }}/>
                    </Box>

                    <Box pt={4}>
                        <Typography style={{fontSize:15}}>Number of students willing to tutor: </Typography>
                        <FormControl variant="outlined">
                            <InputLabel style={{ marginLeft: 240, marginTop: -35 }} id="demo-simple-select-outlined-label-stud">Number</InputLabel>
                            <Select
                                style={{ width: 150, marginLeft: 240, marginTop: -35 }}
                                labelId="demo-simple-select-outlined-label-stud"
                                id="demo-simple-select-outlined-stud"
                                value={this.state.numOfStudents}
                                onChange={e => this.setState({ numOfStudents: e.target.value })}
                                label="number"
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box pt={4}>
                        <CloudUploadIcon style={{ fontSize: 25, marginLeft: 318 }}/>
                        <Typography style={{ fontSize: 15, marginTop: -25}}>Upload your unofficial college transcript here: </Typography> 
                    </Box>

                    <Box pt={4} pl={100}>
                        <Button variant="contained" color="primary"> Save </Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button variant="outlined" color="primary"> Cancel </Button>
                    </Box>
                </div>
        )
    }
}
export default ClassForm 
