import React from 'react'
import Sidenav from './Sidenav'
function Dashboard() {
  return (
      <div>
          <Sidenav mainContent={
              <div>
                  Main Content! 
              </div>
          } >
          </Sidenav>
      </div>
  );
}

export default Dashboard;
  