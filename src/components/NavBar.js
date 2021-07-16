import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";

function NavBar() {
  return (
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
          <Grid item xs={2}>
            <Button
              variant="text"
              color="secondary"
              size="large"
              component={Link}
              to="/login"
              style={{ opacity: "90%", letterSpacing: "0.05em" }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </center>
    </div>
  );
}

export default NavBar;
