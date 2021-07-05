import React from 'react';
import backpatlogo from "../assets/BackPatLogo.png"
import teachingimage from '../assets/learningImage.png'
import professorimage from '../assets/professor.png'
import videocallimage from '../assets/videoCall.png'
import {
  BrowserRouter as Router, Switch, Route, Link,
} from "react-router-dom"
import { Box, Button, Grid, Typography } from '@material-ui/core';
import ParentSignUp from './ParentSignUp'
import TutorSignUp from './TutorSignUp'

//TODO: Add spacing between body and nav bar; add background to nav bar to make it more distinguishable; Possibly include social media links;
function Home() {
  return (
    <Router>
      <div>
        <nav> {/* Nav Bar*/}
          <center>
            <Grid container xs={12} spacing={4} padding={2} direction='row' justify='space-evenly' alignItems='center'>
              <Grid item xs={3}>
                <Button variant="text" color="secondary" size="large" component={Link} to="/"><Typography><b>Back</b>Pat Tutoring</Typography></Button>
              </Grid>
              <Grid item xs={2}>
                <Button variant="text" color="secondary" size="large" component={Link} to="/parentsignup"><Typography>Get Tutoring</Typography></Button>
              </Grid>
              <Grid item xs={2}>
                <Button variant="text" color="secondary" size="large" component={Link} to="/tutorsignup"><Typography>Become a Tutor</Typography></Button>
              </Grid>
              <Grid item xs={2}>
                <Button variant="text" color="secondary" size="large"><Typography>FAQ</Typography></Button>
              </Grid>
            </Grid>
          </center>
        </nav>
        <Switch>
          <Route exact path='/' component={MainBody} />
          <Route path='/parentsignup' component={ParentSignUp} />
          <Route path='/tutorsignup' component={TutorSignUp} />
        </Switch>
      </div>
    </Router>
  );
}

function MainBody() {
  return (
    <div>
      <Grid container>
        <Grid item xs></Grid>
        <Grid item xs={7}>
          <Box mt={10}>
            <Grid container direction="flex-start" justify="center">
              <Grid item xs>
                <Box display="flex" justifyContent="center">
                  <img src={backpatlogo} alt='Logo' width={200} />
                </Box>
              </Grid>
              <Grid item xs>
                <Box mt={2} textAlign="center" fontSize={40}>Welcome to Backpat Tutoring!</Box>
                <Box mt={2} textAlign='center' fontSize={20}>
                  We are a volunteer-based organization committed to providing free virtual tutoring to K-12 students in need,
                  especially those with parents that are in healthcare and essential workers.
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box mt={4}>
            <Grid container justify='space-between' alignItems="center">
              <Grid item sm>
                <img src={teachingimage} alt='teacher' width={250} height={200} />
              </Grid>
              <Grid item sm>
                <Box mt={3} textAlign='center'>
                  <Typography><b>Free enrichment for K-12</b></Typography>
                  <Typography>100% free, no-charge virtual tutoring for K-12 students</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box mt={4}>
            <Grid container justify="space-between" alignItems="center">
              <Grid item sm>
                <img src={professorimage} alt='' width={250} height={200} />
              </Grid>
              <Grid item sm>
                <Box mt={3} textAlign='center'>
                  <Typography><b>Caring, Engaging tutors</b></Typography>
                  <Typography>60+ trained tutors around the world from leading colleges dedicated to helping students succeed</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box my={4}>
            <Grid container justify='space-between' alignItems="center">
              <Grid item sm>
                <img src={videocallimage} alt='' width={250} height={200} />
              </Grid>
              <Grid item sm>
                <Box mt={2} textAlign='center'>
                  <Typography><b>Receive Help From Anywhere</b></Typography>
                  <Typography>Virtual tutoring from the comfort of your own designated work space</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
}

export default Home;
