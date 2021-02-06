import React from 'react';
import { Button, CssBaseline, Fab, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

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
          marginRight: theme.spacing(5)
      },
      childTitle: {
          marginTop: theme.spacing(2)
      },
      addChildBtn: {
          marginBottom: theme.spacing(2)
      }
  }));  

function ParentInfoSection() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Grid container>
                <Grid className={classes.main} container direction="row">
                    <Grid justify="flex-start">
                        <Typography variant="h4">
                            Tutoring Info
                        </Typography>
                    </Grid>
                    <Grid container
                        direction="row"
                        justify="flex-end"
                        alignItems="center">
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
                            name="timezone"
                            label="Timezone"
                            id="timezone-field"
                            defaultValue="Central"
                        />
                    </Grid>
                    <Grid container direction="row">
                        <Grid item>
                            <Typography className={classes.childTitle} variant="h6" gutterBottom>
                                Add Child
                            </Typography>
                        </Grid>
                        <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className={classes.addChildBtn}>
                            <Fab size="small" color="primary" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default ParentInfoSection;
