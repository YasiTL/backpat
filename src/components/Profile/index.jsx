import React from 'react';
import Sidenav from '../Dashboard/Sidenav';
import BasicInfoSection from './BasicInfoSection';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TutoringInfoSection from './TutoringInfoSection';

const useStyles = makeStyles((theme) => ({
    title: {
        margin: theme.spacing(8, 4)
    },
    mainContent: {
        marginTop: theme.spacing(5)
    },
    sectionContainer: {
        border: 'solid lightGrey 0.25px',
        margin: theme.spacing(3)
    }
}));

export default function Profile() {
    const classes = useStyles();

    return (
        <div>
            <Sidenav
                mainContent={
                    <div>
                        <div><Typography className={classes.title} align='center' variant="h2" component="h3">Profile</Typography></div>
                        <div className={classes.sectionContainer}>
                            <div className={classes.mainContent}><BasicInfoSection /></div>
                            <div className={classes.mainContent}><TutoringInfoSection /></div>
                        </div>
                    </div>
                }
            ></Sidenav>
        </div>
    )
}
