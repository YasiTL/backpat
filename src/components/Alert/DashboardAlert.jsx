import { Snackbar } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab'
import React from 'react'

import './DashboardAlert.css';

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
