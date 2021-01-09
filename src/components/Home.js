import React from 'react';
import backpatlogo from "../assets/BackPatLogo.png"
import teachingimage from '../assets/learningImage.png'
import professorimage from '../assets/professor.png'
import videocallimage from '../assets/videoCall.png'
import {
  Link,
} from "react-router-dom"
import { Box, Button, Grid, Snackbar, Typography } from '@material-ui/core';
import { FormatBold } from '@material-ui/icons';
import DashboardAlert from './Alert/DashboardAlert';



//TODO: Add spacing between body and nav bar; add background to nav bar to make it more distinguishable; Possibly include social media links;
function Home() {
  const [alertOpen, setAlertOpen] = React.useState(true);

  const toggleAlert = () => {
    setAlertOpen(!alertOpen);
  };

    return (
      <div>
      <nav> {/* Nav Bar*/}
         <center>
           <Grid container xs = {12} spacing = {4} padding = {2} direction = 'row' justify = 'space-evenly' alignItems = 'center'>
              <Grid item xs = {3}>
                <Button variant="text" color="secondary" size = "large" component={Link} to="/"><Typography><b>Back</b>Pat Tutoring</Typography></Button>
              </Grid> 
              <Grid item xs = {2}>
                <Button variant="text" color="secondary" size = "large" component={Link} to="/parentsignup"><Typography>Parent Sign Up</Typography></Button>
              </Grid> 
              <Grid item xs = {2}>
                <Button variant="text" color="secondary" size = "large" component={Link} to="/tutorsignup"><Typography>Tutor Sign Up</Typography></Button> 
              </Grid>  
              <Grid item xs = {2}>
                <Button variant="text" color="secondary" size = "large" component={Link} to="/login"><Typography>Login</Typography></Button>
              </Grid>
            </Grid>
         </center>
    </nav>
    <body>  {/*Main Page*/}
    <DashboardAlert alertOpen={alertOpen} toggleAlert={toggleAlert} type="warning" title="To complete your account and begin tutoring, please finish the following:" descriptionItems={["Send us your most recent transcript", "Finish your tutor bio", "Fill in info under 'Tutor Specifics'"]}></DashboardAlert>
     <Grid container spacing = {10} align = 'center' justify = 'center' alignItems = 'center'>
        <Grid item xs = {3}>
          <img src = {backpatlogo} alt ='Logo' width = {350} height = {350} />
        </Grid>
        <Grid item xs = {4}>
          <Box mt = {2} textAlign = 'center' fontSize = {24}>
            <b>Welcome to backpat tutoring!</b>
            <br></br>
          </Box> 
          <Box mt = {2} teaxtAlign = 'center' fontSize = {20}>
            We are a volunteer-based organization committed to providing free virtual tutoring to K-12 students in need,
            especially those with parents that are in healthcare and essential workers.
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing = {10} align = 'center' justify = 'center'>
        <Grid item xs = {3}>
          <img src = {teachingimage} alt = '' width = {250} height = {200} />
        </Grid>
        <Grid item xs = {3}>
          <Box mt = {3} textAlign = 'right'>
            <Typography><b>Free enrichment for K-12</b></Typography>
            <br></br>
            <Typography>100% free, no-charge virtual tutoring for K-12 students</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing = {10} align = 'center' justify = 'center'>
        <Grid item xs = {3}>
          <Box mt = {3} textAlign = 'left'>
            <Typography><b>Caring, Engaging tutors</b></Typography> 
            <br></br>
            <Typography>60+ trained tutors around the world from leading colleges dedicated to helping students succeed</Typography>
          </Box>
        </Grid>
        <Grid item xs = {3}>
          <img src = {professorimage} alt = '' width = {250} height = {200} />
        </Grid>              
      </Grid>       
      <Grid container spacing = {10} align = 'center' justify = 'center'>
        <Grid item xs = {3} >
          <img src = {videocallimage} alt = '' width = {250} height = {200} /> 
        </Grid>
        <Grid item xs = {3}>
          <Box mt = {2} textAlign = 'right'>
            <Typography><b>Receive Help From Anywhere</b></Typography> 
            <br></br>
            <Typography>Virtual tutoring from the comfort of your own designated work space</Typography>
          </Box>
        </Grid>
      </Grid>
    </body>
  </div>
  );
}

export default Home;
