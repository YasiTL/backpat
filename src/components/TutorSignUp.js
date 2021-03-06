import React from "react";
import TutorForm from "./TutorForm";
import { Grid, Box, Typography } from "@material-ui/core";

function TutorSignUp() {
  return (
    <div>
      <Box display="flex" mt={10}>
        <Grid container>
          <Grid item sm />
          <Grid item xs={12} sm={8}>
            <Box display="flex" justifyContent="center" flexWrap="column">
              <Typography variant="h2" align="center">
                Become a Tutor
              </Typography>
            </Box>
            <Box mt={4} ml={3} mr={3}>
              <TutorForm />
            </Box>
            <div className="container" style={{ height: '50px' }}></div>
          </Grid>
          <Grid item sm />
        </Grid>
      </Box>
    </div>
  );
}

export default TutorSignUp;
