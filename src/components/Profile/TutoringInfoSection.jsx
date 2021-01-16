import React from 'react';
import { Button, CssBaseline, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
      },
      main: {
        marginLeft: theme.spacing(3),
      },
      form: {
        margin: theme.spacing(0, 5),
      },
      editButton: {
          marginLeft: theme.spacing(30)
      }
  }));  

function TutoringInfoSection() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Grid container>
                <Grid className={classes.main} container direction="row">
                    <Grid>
                        <Typography variant="h4">
                            Tutoring Info
                        </Typography>
                    </Grid>
                    <Grid>
                        <Button className={classes.editButton} variant="contained"><EditIcon />&nbsp;&nbsp;&nbsp;Edit</Button>
                    </Grid>
                </Grid>
                <Grid className={classes.form} item container direction="column">
                    <Grid item>
                        <TextField 
                            margin="normal"
                            fullWidth
                            name="email"
                            label="Email"
                            id="email-field"
                            defaultValue="maryjones@gmail.com"
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            margin="normal"
                            fullWidth
                            name="phoneNumber"
                            label="Phone #"
                            id="phone-number-field"
                            type="phone"
                            defaultValue="(314) 432-1313"
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            margin="normal"
                            fullWidth
                            name="grade"
                            label="Grade"
                            id="grade-field"
                            defaultValue="Sophomore"
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            margin="normal"
                            fullWidth
                            name="university"
                            label="University"
                            id="university-field"
                            defaultValue="Illinois Institute of Technology"
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            margin="normal"
                            fullWidth
                            name="timezone"
                            label="Timezone"
                            id="timezone-field"
                            defaultValue="Central"
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            margin="normal"
                            fullWidth
                            multiline
                            name="bio"
                            label="Bio"
                            id="timezbioone-field"
                            defaultValue="Hello! My name is Jane Doe! I love riding my bike, singing, arts and crafts, and
                            shopping. I would love a tutor that makes the lives of the students I tutor better."
                        />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default TutoringInfoSection
