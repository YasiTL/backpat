import React from 'react'

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import WatchLater from '@material-ui/icons/WatchLater';

const rows = [
    { date: '12/21/20 10:00a-11:00a CST', student: 'Bob Johns', parent: 'Mary Johns', class: 'English', meeting_info: 'meet.google.com', feedback: 'COMPLETE' },
    { date: '01/02/21 10:00a-11:00a CST', student: 'Quin Danai', parent: 'Jane Danai', class: 'Math', meeting_info: 'zoom.com', feedback: 'INCOMPLETE' },
    { date: '01/10/21 10:00a-11:00a CST', student: 'Woodie Shannon', parent: 'Joseph Shannon', class: '9th Grade Biology', meeting_info: 'meet.google.com', feedback: 'COMPLETE' },
    { date: '02/24/21 10:00a-11:00a CST', student: 'Bob Johns', parent: 'Mary Johns', class: 'English', meeting_info: 'meet.google.com', feedback: 'PENDING' },
];

function FeedbackStatus(prop) {
    if (prop.status === "COMPLETE") {
        return (
            <React.Fragment>
                <Box flexDirection="column">
                    <CheckCircleIcon style={{ color: '#16c80d' }} />
                    <Typography>Complete!</Typography>
                </Box>
            </React.Fragment>
        )
    } else if (prop.status === "PENDING") {
        return (
            <React.Fragment>
                <Box flexDirection="column">
                    <WatchLater style={{ color: '#ffb836' }} />
                    <Typography>Pending</Typography>
                </Box>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <ErrorIcon style={{ color: '#e61f00' }} />
                <Typography><Link>Click To Complete</Link></Typography>
            </React.Fragment>
        )
    }

}

export default class SessionLog extends React.Component {

    render() {
        return (
            <div>
                <Box pb={5}>
                    <Typography variant="h2" gutterbottom>Session Log</Typography>
                </Box>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Date and Time</TableCell>
                                <TableCell align="center">Meeting Info</TableCell>
                                <TableCell align="center">Students</TableCell>
                                <TableCell align="center">Parent</TableCell>
                                <TableCell align="center">Subject</TableCell>
                                <TableCell align="center">Feedback Form</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell align="center">{row.date}</TableCell>
                                    <TableCell align="center">{row.meeting_info}</TableCell>
                                    <TableCell align="center">{row.student}</TableCell>
                                    <TableCell align="center">{row.parent}</TableCell>
                                    <TableCell align="center">{row.class}</TableCell>
                                    <TableCell align="center"><FeedbackStatus status={row.feedback}></FeedbackStatus></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}