import React from "react";
import { Hidden, Drawer, Avatar, Grid, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import TutorSignUp from '../TutorSignUp';
import Dashboard from './Dashboard';

const drawerWidth = 240;
const routes = [
  {
    path: "/loggedin",
    exact: true,
    mainContent: () => <h1>pants</h1>,
  },
  {
    path: "/bubblegum",
    mainContent: () => <TutorSignUp/>,
  },
  {
    path: "/shoelaces",
    mainContent: () => <h2>Shoelaces</h2>,
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
              alt="Christian Razo"
              className={classes.profile}
            >
              CR
            </Avatar>
          </Grid>
        </Box>
        <Grid item md>
          <Box mt={2} alignContent="center">
            Christian Razo{" "}
            {/* //TODO come up with logic to display correct username*/}
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
              to="/Profile"
            >
              View Profile
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
        <Box mt={10}>
          <Grid container direction="column" justify="flex start">
            <Box alignContent="center" mt={1}>
              <Grid item>
                <Button
                  variant="text"
                  size="large"
                  color="primary"
                  fullWidth={true}
                  component={Link}
                  to="/Dashboard"
                >
                  Dashboard
                </Button>
              </Grid>
            </Box>
            <Box alignContent="center" mt={1}>
              <Grid item>
                <Button
                  variant="text"
                  size="large"
                  color="primary"
                  fullWidth={true}
                  component={Link}
                  to="/Dashboard"
                >
                  Session Log
                </Button>
              </Grid>
            </Box>
            <Box alignContent="center" mt={1}>
              <Grid item>
                <Button
                  variant="text"
                  size="large"
                  color="primary"
                  fullWidth={true}
                  component={Link}
                  to="/Dashboard"
                >
                  Resources
                </Button>
              </Grid>
            </Box>
            <Box alignContent="center" mt={1}>
              <Grid item>
                <Button
                  variant="text"
                  size="large"
                  color="primary"
                  fullWidth={true}
                  component={Link}
                  to="/Dashboard"
                >
                  Tutor Specifics
                </Button>
              </Grid>
            </Box>
            <Box alignContent="center" mt={1}>
              <Grid item>
                <Button
                  variant="text"
                  size="large"
                  color="primary"
                  fullWidth={true}
                  component={Link}
                  to="/Dashboard"
                >
                  Notes and Tools
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
      <Box mt={10}>
        <Grid container direction="column" justify="flex start">
          <Box alignContent="center" mt={1}>
            <Grid item>
              <Button
                variant="text"
                size="large"
                color="primary"
                fullWidth={true}
                component={Link}
                to="/loggedin"
              >
                Dashboard
              </Button>
            </Grid>
          </Box>
          <Box alignContent="center" mt={1}>
            <Grid item>
              <Button
                variant="text"
                size="large"
                color="primary"
                fullWidth={true}
                component={Link}
                to="/shoelaces"
              >
                Session Log
              </Button>
            </Grid>
          </Box>
          <Box alignContent="center" mt={1}>
            <Grid item>
              <Button
                variant="text"
                size="large"
                color="primary"
                fullWidth={true}
                component={Link}
                to="/bubblegum"
              >
                Resources
              </Button>
            </Grid>
          </Box>
          <Box alignContent="center" mt={1}>
            <Grid item>
              <Button
                variant="text"
                size="large"
                color="primary"
                fullWidth={true}
                component={Link}
                to="/SampleFour"
              >
                Notes and Tools
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
            {parentSidenav}
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
