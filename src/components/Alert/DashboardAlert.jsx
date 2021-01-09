import { Snackbar } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab'
import React from 'react'

import './DashboardAlert.css';

  /**
   * 
   * EXAMPLE OF HOW TO TRIGGER DASHBOARD ALERT
   * 
   */
  // const [alertOpen, setAlertOpen] = React.useState(true);

  // const toggleAlert = () => {
  //   setAlertOpen(!alertOpen);
  // };

  /**
   * 
   * EXAMPLE OF HOW TO CALL DASHABORD ALERT
   * 
   */
  // <DashboardAlert alertOpen={alertOpen} toggleAlert={toggleAlert} type="warning" title="To complete your account and begin tutoring, please finish the following:" descriptionItems={["Send us your most recent transcript", "Finish your tutor bio", "Fill in info under 'Tutor Specifics'"]}></DashboardAlert>


export default function DashboardAlert({ vertical = 'top', horizontal = 'center', title, descriptionItems, type, hasIcon = false, alertOpen, toggleAlert }) {
    return (
        <Snackbar anchorOrigin={{ vertical, horizontal }} open={alertOpen} onClose={toggleAlert}>
            <Alert severity={type} icon={hasIcon} onClose={toggleAlert}>
                <AlertTitle className="alert_title">{title}</AlertTitle>
                <ul>
                {
                    descriptionItems.map((value, index) => {
                        return <li className="asterisk">{value}</li>
                    })
                }
                </ul>
            </Alert>
        </Snackbar>
    )
}
