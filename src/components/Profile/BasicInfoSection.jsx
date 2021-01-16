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
          marginLeft: theme.spacing(35)
      }
  }));  

function BasicInfoSection() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Grid container>
                <Grid className={classes.main} container direction="row">
                    <Grid>
                        <Typography variant="h4">
                            Basic Info
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
                            name="name"
                            label="Name"
                            id="name-field"
                            defaultValue="John Doe"
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            id="password-field"
                            type="password"
                            defaultValue="12345678"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default BasicInfoSection
