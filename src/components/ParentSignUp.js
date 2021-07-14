import React from 'react';
import ParentForm from './ParentForm';
import { Grid, Box, Typography } from "@material-ui/core"

function ParentSignUp() {
  return (
    <div>
      <Box display="flex" mt={10}>
        <Grid container spacing={3}>
          <Grid item sm />
          <Grid item xs={12} sm={8}>
            <Box display="flex" justifyContent="center" flexWrap="column">
              <Typography variant="h2" align="center">Get Tutoring</Typography>
            </Box>
            <Box mt={2} ml={3} mr={3} textAlign="center">
              Being paired up with a tutor is on a first-come, first-serve basis.
              If there are no tutors available, you will be placed on a waiting list, and we will keep you updated via email.
              <br /><br />
              After signing up, please be sure to check your email for the next steps to become an official Backpat Student.
              Completing next steps as outlined in our follow up email will ensure you are promptly paired with a tutor as soon as they become available.
              <br /><br />
              Thank you for your patience!
            </Box>
            <Box mt={4} ml={3} mr={3}>
              <ParentForm />
            </Box>
          </Grid>
          <Grid item sm />
        </Grid>
      </Box>
    </div>
  );
}

export default ParentSignUp;
