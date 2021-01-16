import React from 'react'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import moment from 'moment';

// !! Example of how to use StudentRequestCard Component
// const student = { notificationDate: new Date('2020-12-17T03:24:00'),
//                   studentName: "Marry Jones", 
//                   age:12, 
//                   grade:"7", 
//                   class: "English", 
//                   bio: "Hello! My name is Marry Jones! My son, bob, Loves riding his bike, singing, arts, and crafts, and video games.",
//                   timeAvailibility: ["M 5:30PM-6:30PM", "Tu 2:30PM-4:50PM"]}

// <StudentRequestCard requestObject={ student }></StudentRequestCard>


export default function StudentRequestCard(props) {
    // TODO: Object deconstruction when a more solidified data structure is determined
    const info = props.requestObject;

    return (
        <div>
            <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <Grid container xs>
                        <Grid item>
                            <Box mr={3}>
                            <Typography variant="overline">{moment(info.notificationDate).fromNow()}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography component="h6" variant="h6" gutterbottom>Student Request</Typography>
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <Typography gutterBottom><b>Name: </b>{info.studentName}</Typography>
                                            <Typography gutterBottom><b>Age: </b> {info.age}</Typography>
                                            <Typography gutterBottom><b>Grade: </b>{info.grade}</Typography>
                                            <Typography gutterBottom><b>Class: </b> {info.class} </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography gutterBottom><b>Bio: </b> {info.bio}</Typography>
                                            <Typography gutterBottom><b>Time: </b> {info.timeAvailibility}</Typography>

                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">Accept</Button>
                                    <Button size="small" color="primary">Deny</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </div>
    )

}
