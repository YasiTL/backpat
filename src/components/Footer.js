import React from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


function Footer() {
    return (
        <div>
            <footer style={{ maxWidth: "ls", paddingTop: "2%" }}> {/* Footer*/}
                <center>
                    <Box bgcolor="#EF6C00">
                        <Container>
                            <Grid container xs={12} sm={4} mt={3} justify="center">
                                <Box mt={2} display="flex">
                                    <a href="https://www.linkedin.com/company/backpat-tutoring/"><Box color="black"><LinkedInIcon></LinkedInIcon></Box></a>
                                    <a href="https://www.facebook.com/backpattutoring/"><Box color="black"><FacebookIcon></FacebookIcon></Box></a>
                                    <a href="https://www.instagram.com/backpattutoring/"><Box color="black"><InstagramIcon></InstagramIcon></Box></a>
                                </Box>
                            </Grid>
                            <Grid>
                                <Box>
                                    <Typography>Designed and developed by Backpat.</Typography>
                                    <Typography>All rights reserved. &copy; 2021 </Typography>
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