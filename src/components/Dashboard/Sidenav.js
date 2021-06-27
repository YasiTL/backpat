
import React from "react";
import { Hidden, Drawer, Avatar, Grid, Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import SessionLog from '../SessionLog';
import TutorSpecifics from '../TutorSpecifics';
import Profile from '../Profile/ProfilePage.jsx';
import SampleProfile from '../../assets/sampleprofile.jpg'

const drawerWidth = 240;
const routes = [
  {  //TODO:Implement authorization to ensure client can only access accepted dashboard 
    path: "/profile",
    exact: true,
    mainContent: () => <Profile/>,
  },
  {
    path: "/dashboard",
    exact: true,
    mainContent: () => <h1>dashboardhome</h1>,
  },
  {
    path: "/sessionlog",
    mainContent: () => <SessionLog/>,
  },
  {
    path: "/addchild",
    mainContent: () => <h1>add child component here</h1>,
  },
  {
    path: "/tutorspecifics",
    mainContent: () => <TutorSpecifics/>,
  },
  {
    path: "/resources",
    mainContent: () => <h1>add Resources Here</h1>,
  },
];

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  content: {
    marginLeft: drawerWidth,
    flexGrow: 1,
  },
  profile: {
    height: theme.spacing(15),
    width: theme.spacing(15),
  },
}));

function Sidenav(props) {
  const [isMobileDrawerOpen, setMobileDrawer] = React.useState(false);
  /*const [profileSrc, setProfile] = React.useState()*/
  const classes = useStyles();

  const profileGrid = (
    <Box mt={5}>
      <Grid
        container
        wrap="nowrap"
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Box alignContent="center">
          <Grid item md={2}>
            <Avatar
              sizes="large"
              src = {SampleProfile}
              alt="Christian Razo"
              className={classes.profile} 
            >
            </Avatar>
          </Grid>
        </Box>
        <Grid item md>
          <Box mt={2} alignContent="center">
            Christian Razo
            {/* //TODO come up with logic to display correct username
            */}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box md={2} alignContent="center">
            <Button
              variant="text"
              size="medium"
              color="primary"
              fullWidth={true}
              component={Link}
              to="/profile"
            >
              <Typography>View Profile</Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

 // This is whats inside of the tutor sidenav
  const tutorSidenav = (
    <div>
      {profileGrid}
      <hr></hr>
        <Box mt={4}> {/*10*/}
          <Grid container direction="column" justify="flex start">
            <Box alignContent="center" mt={1} mb = {2}>
              <Grid item>
                <Button
                  variant="text"
                  size="large"
                  color="primary"
                  fullWidth={true}
                  component={Link}
                  to="/dashboard"
                >
                  <Typography>Dashboard</Typography>
                </Button>
              </Grid>
            </Box>
            <Box alignContent="center" mt={1} mb = {2}>
              <Grid item>
                <Button
                  variant="text"
                  size="large"
                  color="primary"
                  fullWidth={true}
                  component={Link}
                  to="/sessionlog"
                >
                  <Typography>Session Log</Typography>
                </Button>
              </Grid>
            </Box>
            <Box alignContent="center" mt={1} mb = {2}>
              <Grid item>
                <Button
                  variant="text"
                  size="large"
                  color="primary"
                  fullWidth={true}
                  component={Link}
                  to="/resources"
                >
                  <Typography>Resources</Typography>
                </Button>
              </Grid>
            </Box>
            <Box alignContent="center" mt={1} mb = {2}>
              <Grid item>
                <Button
                  variant="text"
                  size="large"
                  color="primary"
                  fullWidth={true}
                  component={Link}
                  to="/tutorspecifics"
                >
                  <Typography>Tutor Specifics</Typography>
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Box>
    </div>
  );

  // This is whats inside of the parent side nav
  const parentSidenav = (
    <div>
      {profileGrid}
      <hr></hr>
      <Box mt={10}>
        <Grid container direction="column" justify="flex start">
          <Box alignContent="center" mt={1} mb = {2}>
            <Grid item>
              <Button
                variant="text"
                size="large"
                color="primary"
                fullWidth={true}
                component={Link}
                to="/dashboard"
              >
                <Typography>Dashboard</Typography>
              </Button>
            </Grid>
          </Box>
          <Box alignContent="center" mt={1} mb = {2}>
            <Grid item>
              <Button
                variant="text"
                size="large"
                color="primary"
                fullWidth={true}
                component={Link}
                to="/sessionlog"
              >
                <Typography>Session Log</Typography>
              </Button>
            </Grid>
          </Box>
          <Box alignContent="center" mt={1} mb = {2}>
            <Grid item>
              <Button
                variant="text"
                size="large"
                color="primary"
                fullWidth={true}
                component={Link}
                to="/addchild"
              >
                <Typography>Add Child</Typography>
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </div>
  );

  // TODO: Write logic that determines if a parent is logged in, or if a tutor is logged in, and display the correct sidenav accordingly

  return (
    <div>
        <Router>
      <nav>
        <Hidden smUp implementation="js">
          {" "}
          {/*Mobile view drawer*/}
          <Drawer
            variant="temporary"
            anchor="left"
            open={isMobileDrawerOpen}
            onClose={() => setMobileDrawer(!isMobileDrawerOpen)}
            classes={{ paper: classes.drawer }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {tutorSidenav}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="js">
          {" "}
          {/*desktop view drawer*/}
          <Drawer classes={{ paper: classes.drawer }} variant="permanent" open>
            {true &&
              tutorSidenav}
            {false &&
              parentSidenav}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
             {props.mainContent} 
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.mainContent/>}
              />
            ))}
          </Switch>
      </main>
      </Router>
    </div>
    
  );
}

export default Sidenav;
