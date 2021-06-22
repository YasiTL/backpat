import React from 'react';
import ChildForm from './StudentForm';
import { Link } from "react-router-dom"
import { Grid, Box, Typography } from "@material-ui/core"

function ChildSignUp() {
    return (
        <div>
            <li>
                <Link to="/">Home</Link>
            </li>
            <Box display="flex" mt={10}>
            <Grid container spacing={3}>
              <Grid item xs />
              <Grid item xs={5}>
                <Box display="flex" justifyContent="center" flexWrap="column">
                  <Typography variant="h2" text-align="center">Add a Student</Typography>
                </Box>
                <Box mt={2} textAlign="center">
                    Being paired up with a tutor is on a first-come, first-serve basis.
                    If there are no tutors available, you will be placed on a waiting list, and we will keep you updated via email.
                    <br/><br/>
                    After signing up, please be sure to check your email for the next steps to become an official Backpat Student.
                    Completing next steps as outlined in our follow up email will ensure you are promptly paired with a tutor as soon as they become available.
                    <br/><br/>
                    Thank you for your patience!
                  </Box>
                <ChildForm />
              </Grid>
              <Grid item xs />
            </Grid>
            </Box>
        </div>
    );
}

export default ChildSignUp;
