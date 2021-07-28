import React from 'react'
import { Typography, Box} from '@material-ui/core';
import ClassForm from "./ClassForm";

class TutorSpecifics extends React.Component {
    render() {
        return (
            <div>
                <Box pb={3} pl={3} pt={2}>
                    <Typography variant="h3" gutterbottom>Tutor Specifics</Typography>
                </Box>
                <Box mt={2} ml={3} mr={3}>
              <ClassForm />
            </Box>
            </div>
        )
    }
}
export default TutorSpecifics