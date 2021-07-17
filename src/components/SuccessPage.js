import React from 'react';
import { Link, Grid, Box, Typography } from "@material-ui/core";

function SuccessPage() {
    return (
        <Grid>
            <Box display="flex" justifyContent="center">
                <Typography variant="h2" align="center">Success!</Typography>
            </Box>
            <Box display="flex" justifyContent="center">
                <Typography variant="div" align="center">
                    We'll send you an email soon.&nbsp;
                    <Link variant="text" color="secondary" component={Link} to="/success">Return to home page.</Link>
                </Typography>
            </Box>
        </Grid>
    );
}

export default SuccessPage;