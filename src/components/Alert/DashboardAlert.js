import { Typography } from '@material-ui/core';
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
  // <DashboardAlert type="warning" title="To complete your account and begin tutoring, please finish the following:" descriptionItems={["Send us your most recent transcript", "Finish your tutor bio", "Fill in info under 'Tutor Specifics'"]}></DashboardAlert>

  const divStyle = {
    marginTop: "25px"
  };

export default function DashboardAlert({ title, descriptionItems, type, hasIcon = false }) {
    return (
        <div style={divStyle}>
            <Alert severity={type} icon={hasIcon}>
                <AlertTitle className="alert_title"><Typography>{title}</Typography></AlertTitle>
                <ul>
                {
                    descriptionItems.map((value, index) => {
                        return <li className="asterisk"><Typography>{value}</Typography></li>
                    })
                }
                </ul>
            </Alert>
        </div>
    )
}
