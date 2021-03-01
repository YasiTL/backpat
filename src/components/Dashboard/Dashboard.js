import React from "react";
import Sidenav from "./Sidenav";
import DashboardAlert from "../Alert/DashboardAlert";
import { Typography } from "@material-ui/core";

const divStyle = {
  margin: "50px",
};

// function Dashboard(props) {
//   return (
//     <div>
//       <Sidenav mainContent = {
//       <div>
//         <div style={divStyle}>
//           <Typography variant="h2">Your Dashboard</Typography>
//           <DashboardAlert
//             type="warning"
//             title="To complete your account and begin tutoring, please finish the following:"
//             descriptionItems={[
//               "Send us your most recent transcript",
//               "Finish your tutor bio",
//               "Fill in info under 'Tutor Specifics'",
//             ]}
//           ></DashboardAlert> 
//         </div>
//       </div>
//       }></Sidenav>
//     </div>
//   );
// }

function Dashboard(props) {
  return (
    <Sidenav></Sidenav>
    )
  }

export default Dashboard;
