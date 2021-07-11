import React from "react";
import { Grid, Box, Typography, Link, Button } from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';

function ParentProfile() {
    const styleFont = {
        heading: {
            fontSize: 30
        },
        text: {
            fontSize: 20,
            color: "black"
        },
        link: {
            fontSize: 20,
            textDecorationLine: "underline"
        },
        row: {
            flex: 1,
            flexDirection: "row"
        }
    };

    return(
        <div>
            <Box display="flex" mt={5} mb={5}>
            <Grid container >
              <Grid item sm/>
              <Grid item xs={10} sm={11}>
                <Box display="flex" justifyContent="center" flexWrap="column">
                  <Typography variant="h3" align="center">Profile</Typography>
                </Box>
                <Box border={1} mt={4}>
                    <Box mt={4}>
                        <Box display="flex" justifyContent="space-between" ml={4} mr={4}>
                            <div style={styleFont.heading}>Basic Info</div>
                            <Box 
                                direction="row"
                                justify="flex-end"
                                alignItems="center"
                            >
                                <Button
                                    variant="contained"
                                    style={{background: 'transparent'}}
                                    startIcon={<CreateIcon />}
                                >
                                    Edit User
                                </Button>
                            </Box>
                        </Box>
                        <Box display="flex" ml={4} mr={4} borderBottom={1} color="primary.main">
                            <p style={styleFont.text}>Name</p>
                            <Box ml={8}>
                                <p style={styleFont.text}>Mary Jones</p>
                            </Box>
                        </Box>
                        <Box display="flex" ml={4} mr={4} borderBottom={1} color="primary.main">
                            <p style={styleFont.text}>Password</p>
                            <Box display="flex" ml={4}>
                                <p style={styleFont.text}>*****</p>
                            </Box>
                        </Box>
                    </Box>
                    <Box mt={4}>
                        <Box display="flex" justifyContent="space-between" ml={4} mr={4}>
                            <div style={styleFont.heading}>Tutoring Info</div>
                            <Grid 
                                direction="row"
                                justify="flex-end"
                                alignItems="center"
                            >
                                <Button
                                    variant="contained"
                                    style={{background: 'transparent'}}
                                    startIcon={<CreateIcon />}
                                >
                                    Edit User
                                </Button>
                            </Grid>
                        </Box>
                        <Box display="flex" ml={4} mr={4} borderBottom={1} color="primary.main">
                            <p style={styleFont.text}>Email</p>
                            <Box display="flex" ml={9}>
                                <p style={styleFont.text}>maryjones@gmail.com</p>
                            </Box>
                        </Box>
                        <Box display="flex" ml={4} mr={4} borderBottom={1} color="primary.main">
                            <p style={styleFont.text}>Timezone</p>
                            <Box display="flex" ml={4}>
                                <p style={styleFont.text}>Central</p>
                            </Box>
                        </Box>
                        <Box display="flex" ml={4}>
                            <p style={styleFont.text}>Child(s)</p>
                            <Box display="flex" ml={6}>
                                <p style={styleFont.link}><Link to={'/'} color="black" onClick={(<p></p>)}>Add a child</Link></p>
                            </Box>
                        </Box>
                    </Box>
                </Box>
              </Grid>
              <Grid item sm/>
            </Grid>
            </Box>
        </div>
    )
}

export default ParentProfile;