import React from 'react';
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
                            <Grid item xs={12} sm={4} container direction="row" style={{ paddingTop: "2%", paddingLeft: "13.5%" }}>
                                <br />
                                <a href="https://www.linkedin.com/company/backpat-tutoring/"><Box color="black"><LinkedInIcon></LinkedInIcon></Box></a>
                                <a href="https://www.facebook.com/backpattutoring/"><Box color="black"><FacebookIcon></FacebookIcon></Box></a>
                                <a href="https://www.instagram.com/backpattutoring/"><Box color="black"><InstagramIcon></InstagramIcon></Box></a>
                            </Grid>
                            <Grid>
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