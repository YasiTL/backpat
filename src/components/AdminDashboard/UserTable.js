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

//Apply the CSS for all element types for all current parent's direct children
const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
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
                <div>First Name: <TextField defaultValue={row.firstName}/></div>
                <div>Last Name: <TextField defaultValue={row.lastName}/></div>
                <div>Email: <TextField defaultValue={row.email}/></div>
                <div>Phone: <TextField defaultValue={row.phone}/></div>
                <div>Timezone: <TextField defaultValue={row.timezone}/></div>
              </Grid>
              <Grid xs item>
                <div>Subjects: <TextField defaultValue={row.subjects}/></div>
                <div>Experience: <TextField defaultValue={row.experience}/></div>
                <div>Availability: <TextField defaultValue={row.availability}/></div>
                <div>Experience: <TextField defaultValue={row.experience}/></div>
                <div>Bio: <TextField defaultValue={row.bio}/></div>
                <div>Request Proof of Volunteer Hours?: <TextField defaultValue={row.isAskingProofOfHours}/></div>
              </Grid>
            </Grid>
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
