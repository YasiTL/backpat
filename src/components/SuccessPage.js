import React from 'react';
import { Grid, Box, Typography } from "@material-ui/core";

function SuccessPage() {
    return (
        <Grid>
            <Box display="flex" justifyContent="center">
                <Typography variant="h2" align="center">Success!</Typography>
            </Box>
            <Box display="flex" justifyContent="center">
                <Typography variant="div" align="center">
                    We'll send you an email soon.&nbsp;
                    <a href="/" target="_self">Return to home page</a>
                </Typography>
            </Box>
        </Grid>
    );
}

export default SuccessPage;