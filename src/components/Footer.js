import React from 'react';
import { BrowserRouter as Link } from "react-router-dom"
import { Box, Container, Grid, Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


function Footer() {
    return (
        <div>
            <footer style={{ maxWidth: "ls", paddingTop: "2%" }} mt={2}> {/* Footer*/}
                <center>
                    <Box bgcolor="#EF6C00">
                        <Container>
                            <Grid item xs={12} sm={4}>
                                <Box><br /></Box>
                                <Box color="black" component={Link} to="https://www.linkedin.com/company/backpat-tutoring/"><LinkedInIcon></LinkedInIcon></Box>
                                <Box color="black" component={Link} to="https://www.facebook.com/backpattutoring/"><FacebookIcon></FacebookIcon></Box>
                                <Box color="black" component={Link} to="https://www.instagram.com/backpattutoring/"><InstagramIcon></InstagramIcon></Box>
                                <Box>
                                    <Typography>Designed and devloped by Backpat.</Typography>
                                    <Typography>All rights reserved. &copy;</Typography>
                                </Box>
                                <Box><br /></Box>
                            </Grid>
                        </Container>
                    </Box>
                </center>
            </footer>
        </div>
    );
}

export default Footer;