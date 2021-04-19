import React from "react";
import backpatlogo from "../assets/BackPatLogo.png";
import teachingimage from "../assets/learningImage.png";
import professorimage from "../assets/professor.png";
import videocallimage from "../assets/videoCall.png";
import { Link } from "react-router-dom";
import { Box, Button, Grid, Typography, Hidden } from "@material-ui/core";

//TODO: Add spacing between body and nav bar; add background to nav bar to make it more distinguishable; Possibly include social media links;
function Home() {
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
      <body>
        {" "}
        {/*Main Page*/}
        <Grid
          container
          spacing={10}
          align="center"
          justify="center"
          alignItems="center"
        >
          <Grid item lg={3} xs={12}>
            <img src={backpatlogo} alt="Logo" width={350} height={350} />
          </Grid>
          <Grid item lg={4} xs={12}>
            <Box mt={2} textAlign="center" fontSize={24}>
              <b>Welcome to backpat tutoring!</b>
              <br></br>
            </Box>
            <Box mt={2} textAlign="center" fontSize={20}>
              We are a volunteer-based organization committed to providing free
              virtual tutoring to K-12 students in need, especially those with
              parents that are in healthcare and essential workers.
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={10} align="center" justify="center">
          <Grid item xs={12} lg={3}>
            <img src={teachingimage} alt="" width={250} height={200} />
          </Grid>
          <Grid item lg={3} xs={12}>
            <Box mt={3} textAlign="right" fontSize={20}>
              <Typography>
                <b>Free enrichment for K-12</b>
              </Typography>
              <br></br>
              <Typography variant="body1">
                100% free, no-charge virtual tutoring for K-12 students
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Hidden smUp implementation="js">
          <Grid container spacing={10} align="center" justify="center">
            <Grid item xs={12}>
              <img src={professorimage} alt="" width={250} height={200} />
            </Grid>
            <Grid item xs={12}>
              <Box mt={3} textAlign="left">
                <Typography>
                  <b>Caring, Engaging tutors</b>
                </Typography>
                <br></br>
                <Typography>
                  60+ trained tutors around the world from leading colleges
                  dedicated to helping students succeed
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden smDown implementation="js">
          <Grid container spacing={10} align="center" justify="center">
            <Grid item lg={3}>
              <Box mt={3} textAlign="left">
                <Typography>
                  <b>Caring, Engaging tutors</b>
                </Typography>
                <br></br>
                <Typography variant="body1">
                  60+ trained tutors around the world from leading colleges
                  dedicated to helping students succeed
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={3}>
              <img src={professorimage} alt="" width={250} height={200} />
            </Grid>
          </Grid>
        </Hidden>
        <Grid container spacing={10} align="center" justify="center">
          <Grid item xs={12} lg={3}>
            <img src={videocallimage} alt="" width={250} height={200} />
          </Grid>
          <Grid item xs={12} lg={3}>
            <Box mt={2} textAlign="right">
              <Typography>
                <b>Receive Help From Anywhere</b>
              </Typography>
              <br></br>
              <Typography variant="body1">
                Virtual tutoring from the comfort of your own designated work
                space
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </body>
    </div>
  );
}

export default Home;
