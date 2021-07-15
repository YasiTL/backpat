import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { db } from "../../services/firebase"
import firebase from 'firebase';

//Apply the CSS for all element types for all current parent's direct children
const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props) {
  const { row, userType } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  if (userType === "parents") {
    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell>{row.email}</TableCell>
          <TableCell>{row.firstName}</TableCell>
          <TableCell>{row.lastName}</TableCell>
          <TableCell>{row.timezone}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Grid container spacing={3}>
                <Grid xs item>
                  <div><b>Child Name:</b> {row.firstName} {row.lastName}</div>
                  <div><b>Parent Name:</b> </div>
                  <div><b>Email:</b> {row.email}</div>
                  <div><b>Timezone:</b> {row.timezone}</div>
                </Grid>
                <Grid xs item>
                  <div><b>Subjects:</b> {row.subjects}</div>
                  <div><b>Grade Level:</b> {row.gradeLevel}</div>
                  <div><b>Availability:</b> {row.availability}</div>
                  <div><b>Bio:</b> {row.bio}</div>
                </Grid>
              </Grid>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  } else if (userType === "tutors") {
    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell>{row.email}</TableCell>
          <TableCell>{row.firstName}</TableCell>
          <TableCell>{row.lastName}</TableCell>
          <TableCell>{row.timezone}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Grid container spacing={3}>
                <Grid xs item>
                  <div><b>First Name:</b> {row.firstName}</div>
                  <div><b>Last Name:</b> {row.lastName}</div>
                  <div><b>Email:</b> {row.email}</div>
                  <div><b>Phone:</b> {row.phone}</div>
                  <div><b>Timezone:</b> {row.timezone}</div>
                </Grid>
                <Grid xs item>
                  <div><b>Subjects:</b> {row.subjects}</div>
                  <div><b>Experience:</b> {row.experience}</div>
                  <div><b>Availability:</b> {row.availability}</div>
                  <div><b>Experience:</b> {row.experience}</div>
                  <div><b>Bio:</b> {row.bio}</div>
                  <div><b>Request Proof of Volunteer Hours?:</b> {row.isAskingProofOfHours}</div>
                </Grid>
              </Grid>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
}

class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      filteredUserData: [],
      inputValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // On component load, pull in all data from firebase
    this.loadData();
  }

  async loadData() {
    let r = await db.collection("tutors").get();
    firebase.auth().onAuthStateChanged(function (user) {
      if ((user) && (user.email === "backpattutoring@gmail.com")) {

        let data = [];
        r.forEach(doc =>
          data.push(doc.data())
        );
        this.setState({ tutor_data: data });

      }
      else {
        let r = "Error"
        console.log(r)

        window.history.push('/login')

      }
    });

  }

  handleChange(event) {
    //Set inputValue state equal to the user typed value in the inputField
    const textFieldInput = event.target.value
    this.setState({ inputValue: textFieldInput });

    const filteredFromSearchInput = this.state.userData.filter(user => user.email.toLowerCase().includes(textFieldInput.toLowerCase()));
    this.setState({ filteredUserData: filteredFromSearchInput });
  }

  render() {
    return (
      <>
        <TextField
          label="Search by email"
          variant="outlined"
          value={this.state.inputValue}
          onChange={this.handleChange}
          fullWidth />
        <TableContainer>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Email</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Timezone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.filteredUserData.map((row) => (
                <Row key={row.email} row={row} userType={this.props.selectedUserTab} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }
}

export default UserTable;
