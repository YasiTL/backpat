import React from "react";
import clsx from 'clsx';
import "./NavBar.css";
import { Link } from "react-router-dom";
import { makeStyles, Button, Grid, Drawer, IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { MOBILE_WIDTH } from './Breakpoints';
import useScreenDimensions from './ScreenDimensions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: '100%',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '100%',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}))

function NavBar() {
  const { width } = useScreenDimensions();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const drawerOpen = () => {
    setOpen(true);
  }

  const drawerClose = () => {
    setOpen(false);
  }

  return (
    <>
      {width < MOBILE_WIDTH ?
        <>
          <div style={{
            display: "flex",
            width: "auto",
            paddingTop: "20px",
            justifyContent: "space-between",
          }}>
            <Button
              variant="text"
              color="secondary"
              size="large"
              component={Link}
              to="/"
              style={{
                opacity: "90%",
                letterSpacing: "0.15em",
                height: "70px",
                justifyContent: "left",
                marginLeft: "20px",
              }}
            >
              <p style={{ textAlign: "center" }}>
                <b>Back</b>pat<br />Tutoring
              </p>
            </Button>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={drawerOpen}
              edge="start"
              className={clsx(open && classes.hide)}
              style={{ justifyContent: "right", marginRight: "15px" }}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="top"
            open={open}
            classes={{ paper: classes.drawerPaper }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={drawerClose}>
                <CloseIcon />
              </IconButton>
            </div>
            <hr />
            <ul style={{ marginTop: "-55px" }}>
              <li style={{
                textAlign: "center",
                listStyleType: "none",
                marginLeft: "-40px"
              }}>
                <Button
                  variant="text"
                  color="secondary"
                  size="large"
                  component={Link}
                  to="/faq"
                  style={{ opacity: "90%", letterSpacing: "0.05em" }}
                >
                  FAQ
                </Button>
                <hr />
              </li>
              <li style={{
                textAlign: "center",
                listStyleType: "none",
                marginLeft: "-40px"
              }}>
                <Button
                  variant="text"
                  color="secondary"
                  size="large"
                  component={Link}
                  to="/parentsignup"
                  style={{ opacity: "90%", letterSpacing: "0.05em" }}
                >
                  Parent Sign Up
                </Button>
                <hr />
              </li>
              <li style={{
                textAlign: "center",
                listStyleType: "none",
                marginLeft: "-40px"
              }}>
                <Button
                  variant="text"
                  color="secondary"
                  size="large"
                  component={Link}
                  to="/tutorsignup"
                  style={{ opacity: "90%", letterSpacing: "0.05em" }}
                >
                  Tutor Sign Up
                </Button>
              </li>
            </ul>
          </Drawer>
        </> :
        <div class="navBarDesk">
          {" "}
          {/* Nav Bar*/}
          <center>
            <Grid
              container
              xs={12}
              //spacing={4}
              padding={2}
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <Grid item xs={3}>
                <Button
                  variant="text"
                  color="secondary"
                  size="large"
                  component={Link}
                  to="/"
                  style={{
                    opacity: "90%", letterSpacing: "0.15em", height: "40px"
                  }}
                >
                  <p>
                    <b>Back</b>pat Tutoring
                  </p>
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="text"
                  color="secondary"
                  size="large"
                  component={Link}
                  to="/faq"
                  style={{ opacity: "90%", letterSpacing: "0.05em" }}
                >
                  FAQ
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="text"
                  color="secondary"
                  size="large"
                  component={Link}
                  to="/parentsignup"
                  style={{ opacity: "90%", letterSpacing: "0.05em" }}
                >
                  Parent Sign Up
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="text"
                  color="secondary"
                  size="large"
                  component={Link}
                  to="/tutorsignup"
                  style={{ opacity: "90%", letterSpacing: "0.05em" }}
                >
                  Tutor Sign Up
                </Button>
              </Grid>
            </Grid>
          </center>
        </div>
      }
    </>
  );
}

export default NavBar;
