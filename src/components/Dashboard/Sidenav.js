import React from 'react'
import { Hidden, Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth
      },
    content: {
        marginLeft: drawerWidth,
        flexGrow: 1,
      },
}));

function Sidenav(props) {
    const [isMobileDrawerOpen, setMobileDrawer] = React.useState(false);
    const classes = useStyles();

    // This is whats inside of the tutor sidenav
    const tutorSidenav = (
        <div>
            Tutor Sidenav Contents
        </div>

    )

    // This is whats inside of the parent side nav
    const parentSidenav = (
        <div>
            Parent Sidenav Contents
        </div>
    )

    // TODO: Write logic that determines if a parent is logged in, or if a tutor is logged in, and display the correct sidenav accordingly

    return (
        <div>
            <nav>
                <Hidden smUp implementation="js">
                    <Drawer
                        variant="temporary"
                        anchor="left"
                        open={isMobileDrawerOpen}
                        onClose={() => setMobileDrawer(!isMobileDrawerOpen)}
                        classes={{ paper: classes.drawer }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }} >
                        {tutorSidenav}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="js">
                    <Drawer
                        classes={{ paper: classes.drawer }}
                        variant="permanent"
                        open >
                        {tutorSidenav}
                    </Drawer>
                </Hidden>
            </nav>
                <main className={classes.content}>
                    {props.mainContent} {/* //* This content comes from the Dashboard.js component. */}
                </main>
        </div>
    );
}

export default Sidenav;
