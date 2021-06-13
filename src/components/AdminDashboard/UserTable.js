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
import FormControl from '@material-ui/core/FormControl';

import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { db } from "../../services/firebase"

const UserSearch = ({users}) => {
  // const [users] = React.useState();
  console.log(users)

  return (
    <div>
      <FormControl fullWidth autoComplete="off">
        <TextField id="user-search" label="Search for a User" variant="outlined" />
      </FormControl>
    </div>
  )
}

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
        <TableCell>ID Holder</TableCell>
        <TableCell>{row.email}</TableCell>
        <TableCell>{row.firstName}</TableCell>
        <TableCell>{row.lastName}</TableCell>
        <TableCell>{row.timezone}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div>Currently No Data to Show</div>
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
      tutor_data: [],
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    let r = await db.collection("tutors").get();
    let data = [];
    r.forEach(doc =>
      data.push(doc.data())
    );
    this.setState({ tutor_data: data });
  }

  render() {
    return (
      <>
      <UserSearch users={this.state.tutor_data}></UserSearch>
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>User ID</TableCell>
              <TableCell> Email </TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Timezone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.tutor_data.map((row) => (
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
