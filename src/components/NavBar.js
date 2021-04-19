import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid, Typography, Hidden } from "@material-ui/core";

function NavBar() {
  return (
    <div>
      <nav>
        {" "}
        {/* Nav Bar*/}
        <center>
          <Grid
            container
            xs={12}
            spacing={4}
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
              >
                <Typography>
                  <b>Back</b>Pat Tutoring
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="text"
                color="secondary"
                size="large"
                component={Link}
                to="/parentsignup"
              >
                <Typography>Parent Sign Up</Typography>
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="text"
                color="secondary"
                size="large"
                component={Link}
                to="/tutorsignup"
              >
                <Typography>Tutor Sign Up</Typography>
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="text"
                color="secondary"
                size="large"
                component={Link}
                to="/login"
              >
                <Typography>Login</Typography>
              </Button>
            </Grid>
          </Grid>
        </center>
      </nav>
    </div>
  );
}

export default NavBar;
