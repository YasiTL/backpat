import React from 'react';
import backpatlogo from "../assets/BackPatLogo.png"
import teachingimage from '../assets/learningImage.png'
import professorimage from '../assets/professor.png'
import videocallimage from '../assets/videoCall.png'
import {
  Link,
} from "react-router-dom"
import { Box, Button, Grid, Typography } from '@material-ui/core';



//TODO: Add spacing between body and nav bar; add background to nav bar to make it more distinguishable; Possibly include social media links;
function Home() {
  return (
    <div>
      <nav> {/* Nav Bar*/}
        <center>
          <Grid container padding={2} direction='row' justify='space-evenly' alignItems='center'>
            <Grid item xs={3}>
              <Button variant="text" color="secondary" size="large" component={Link} to="/"><Typography><b>Back</b>Pat Tutoring</Typography></Button>
            </Grid>
            <Grid item xs={2}>
              <Button variant="text" color="secondary" size="large" component={Link} to="/parentsignup"><Typography>Parent Sign Up</Typography></Button>
            </Grid>
            <Grid item xs={2}>
              <Button variant="text" color="secondary" size="large" component={Link} to="/tutorsignup"><Typography>Tutor Sign Up</Typography></Button>
            </Grid>
            <Grid item xs={2}>
              <Button variant="text" color="secondary" size="large" component={Link} to="/login"><Typography>Login</Typography></Button>
            </Grid>
          </Grid>
        </center>
      </nav>
      
      {/*Main Page*/}
      <Box mt={10}>
        <Grid container align='center' justify='center' alignItems='center'>
          <Grid item md={1}></Grid>
          <Grid item md>
            <img src={backpatlogo} alt='Logo' width={350} height={350} />
          </Grid>
          <Grid item md >
            <Box mt={2} p={3} textAlign='center' fontSize={24}>
              <Typography variant='h4'>Welcome to Backpat tutoring!</Typography>
              <br></br>
              <Typography>We are a volunteer-based organization committed to providing free virtual tutoring to K-12 students in need, especially those with parents that are in healthcare and essential workers.</Typography>
            </Box>
          </Grid>
          <Grid item md={1}></Grid>
        </Grid>
      </Box>

      <Box mt={10}>
        <Grid container align='center' justify='center'>
          <Grid item md={3}>
            <img src={teachingimage} alt='' width={250} height={200} />
          </Grid>
          <Grid item md={3}>
            <Box mt={3} p={3} textAlign='center'>
              <Typography><b>Free enrichment for K-12</b></Typography>
              <br></br>
              <Typography>100% free, no-charge virtual tutoring for K-12 students</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box mt={5}>
        <Grid container align='center' justify='center'>
          <Grid item md={3}>
            <img src={professorimage} alt='' width={250} height={200} />
          </Grid>
          <Grid item md={3}>
            <Box mt={3} p={3} textAlign='center'>
              <Typography><b>Caring, Engaging Tutors</b></Typography>
              <br></br>
              <Typography>60+ trained tutors around the world from leading colleges dedicated to helping students succeed</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box mt={5}>
        <Grid container align='center' justify='center'>
          <Grid item md={3}>
            <img src={videocallimage} alt='' width={250} height={200} />
          </Grid>
          <Grid item md={3}>
            <Box mt={3} p={3} textAlign='center'>
              <Typography><b>Receive Help From Anywhere</b></Typography>
              <br></br>
              <Typography>Virtual tutoring from the comfort of your own designated work space</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box m={10} textAlign='center'>
        <Typography variant='caption'>&#169; 2021 Backpat Tutoring</Typography>
      </Box>
    </div>
  );
}

export default Home;
