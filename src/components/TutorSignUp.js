import React from 'react';
import TutorForm from './TutorForm';
import { Link } from "react-router-dom"
import { Grid, Box, Typography } from "@material-ui/core"


function TutorSignUp(){    
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
                  <Typography variant="h2" text-align="center">Become a Tutor</Typography>
                </Box>
                <Box mt={2}>
                  <TutorForm/>
                </Box>
              </Grid>
              <Grid item xs />
            </Grid>
            </Box>
        </div>
    )
}

export default TutorSignUp;
