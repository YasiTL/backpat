import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { db } from "../../services/firebase"

//Apply the CSS for all element types for all current parent's direct children
const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  margins: {
    margin-right: '10px',
  }
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

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
                <Box display="flex" alignItems="center" >
                  <div className={classes.margins}>First Name: </div>
                  <TextField defaultValue={row.firstName} />
                </Box>
                <Box display="flex" alignItems="center" >
                  <div>Last Name: </div>
                  <TextField defaultValue={row.lastName} />
                </Box>
                <Box display="flex" alignItems="center" >
                  <div>Email: </div>
                  <TextField defaultValue={row.email} />
                </Box>
                <Box display="flex" alignItems="center" >
                  <div>Phone: </div>
                  <TextField defaultValue={row.phone} />
                </Box>
                <Box display="flex" alignItems="center" >
                  <div>Timezone: </div>
                  <TextField defaultValue={row.timezone} />
                </Box>
              </Grid>
              <Grid xs item>
                <div>Subjects: {row.subjects}</div>
                <div>Experience: {row.experience}</div>
                <div>Availability: {row.availability}</div>
                <div>Experience: {row.experience}</div>
                <div>Bio: {row.bio}</div>
                <div>Request Proof of Volunteer Hours?: {row.isAskingProofOfHours}</div>
              </Grid>
            </Grid>
            <Box mb="3" display="flex" flexDirection="row-reverse">
            <Button variant="contained" color="primary" size="small">Submit</Button>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
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
    const users = await db.collection("tutors").get();
    let data = [];
    users.forEach(doc =>
      data.push(doc.data())
    );
    this.setState({ userData: data });
    this.setState({ filteredUserData: data });
  }

  handleChange(event) {
    //Set inputValue state equal to the user typed value in the inputField
    const textFieldInput = event.target.value
    this.setState({ inputValue: textFieldInput },
      () => { console.log(textFieldInput) });

    const filteredFromSearchInput = this.state.userData.filter(user => user.email.includes(textFieldInput));
    this.setState({ filteredUserData: filteredFromSearchInput });
  }

  render() {
    return (
      <>
        <TextField
          label="Search by User Email"
          variant="outlined"
          value={this.state.inputValue}
          onChange={this.handleChange}
          fullWidth />
        <TableContainer>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell> Email </TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Timezone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.filteredUserData.map((row) => (
                <Row key={row.email} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }
}

export default UserTable;
