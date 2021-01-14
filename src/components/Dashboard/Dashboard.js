import React from 'react'
import Sidenav from './Sidenav'
import DashboardAlert from '../Alert/DashboardAlert';

const divStyle = {
  margin: "50px"
};


function Dashboard() {
  return (
      <div>
          <Sidenav mainContent={
              <div>
                <div style={divStyle}>
                        <h1>Your Dashboard</h1>
                        <DashboardAlert type="warning" title="To complete your account and begin tutoring, please finish the following:" descriptionItems={["Send us your most recent transcript", "Finish your tutor bio", "Fill in info under 'Tutor Specifics'"]}></DashboardAlert>
                </div>
              </div>
          } >
          </Sidenav>
      </div>
  );
}

export default Dashboard;
  