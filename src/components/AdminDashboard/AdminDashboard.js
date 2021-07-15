import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import UserTable from './UserTable';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Tutors" />
          <Tab label="Parents" />
          <Tab label="Admins" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <UserTable selectedUserTab='tutors'></UserTable>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UserTable selectedUserTab='parents'></UserTable>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <UserTable selectedUserTab='admins'></UserTable>
      </TabPanel>
    </div>
  );
}

/*
// Load admin dashboard data if logged into admin email
class AdminDashboard extends React.Component {
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

  render() {
    return (
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell> Email </TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name&nbsp;(g)</TableCell>
              <TableCell align="right">Phone Number&nbsp;(g)</TableCell>
              <TableCell align="right">Timezone&nbsp;(g)</TableCell>
              <TableCell align="right">University&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.tutor_data.map((row) => (
              <Row key={row.email} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}
 */
