import React from "react";
import List from "@mui/material/List";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import ListelementDrawer from "./ListelementDrawer";
import HandshakeIcon from "@mui/icons-material/Handshake";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import ArticleIcon from "@mui/icons-material/Article";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import ElderlyIcon from "@mui/icons-material/Elderly";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import PreviewIcon from "@mui/icons-material/Preview";
import ListDashboard from "./ListDashboard";
import ListEmpmngmnt from "./ListEmpmngmnt";
import ListRecmngmnt from "./ListRecmngmnt";
import ListAttmngmnt from "./ListAttmngmnt";
import ListLeavemngmnt from "./ListLeavemngmnt";
import ListLearningmngmnt from "./ListLearningmngmnt";
import ListTravelmngmnt from "./ListTravelmngmnt";
import ListTaskmngmnt from "./ListTaskmngmnt";
import ListHranalytics from "./ListHranalytics";
import ListTraining from "./ListTraining";
import ListGrievance from "./ListGrievance";
import ListVisitormngmnt from "./ListVisitormngmnt";
import ListPayrollmngmnt from "./ListPayrollmngmnt";
import ListTimesheet from "./ListTimesheet";

function Drawerlist() {
  let navigate = useNavigate();

  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          background: "linear-gradient(#8B8B8B,#1565C0)",
          color: "white",
        }}
        component="nav"
      >
        {/* <ListelementDrawer
          name="DASHBOARD"
          click={() => navigate("/")}
          icon={DashboardIcon}
          inner={false}
        />
        <ListelementDrawer
          name="EMP.MANAGEMENT"
          click1={() => navigate("/addemployee")}
          click2={() => navigate("/employeelist")}
          icon={GroupsIcon}
          inner={true}
          innericon1={AddIcon}
          innername1="ADD EMPLOYEE"
          innericon2={RemoveRedEyeOutlinedIcon}
          innername2="VIEW EMPLOYEE"
        />
        <ListelementDrawer
          name="REC.MANAGEMENT"
          click1={() => navigate("/addvaccancy")}
          click2={() => navigate("/viewvaccancy")}
          click3={() => navigate("/candidatelist")}
          icon={HandshakeIcon}
          inner={true}
          innericon1={DynamicFormIcon}
          innername1="Add Vaccany"
          innericon2={PreviewIcon}
          innername2="VIEW VACCANCY"
          innericon3={PreviewIcon}
          innername3="CANDIDATE LIST"
        />
        <ListelementDrawer
          name="ATT.MANAGEMENT "
          icon={FingerprintIcon}
          inner={false}
        />
        <ListelementDrawer
          name="LEAVE MANAGEMENT "
          icon={ArticleIcon}
          inner={false}
        />
        <ListelementDrawer
          name="PAYROLL MANAGEMENT "
          icon={CurrencyRupeeIcon}
          inne={false}
        />
        <ListelementDrawer
          name="LEARNING"
          icon={LocalLibraryIcon}
          inner={false}
        />
        <ListelementDrawer
          name="TIMESHEET"
          icon={AccessTimeFilledIcon}
          innr={false}
        />
        <ListelementDrawer
          name="TRAVEL MANAGEMENT"
          icon={EmojiTransportationIcon}
          iner={false}
        />
        <ListelementDrawer
          name="TASK MANAGEMENT"
          icon={AssignmentIndIcon}
          inner={false}
        />
        <ListelementDrawer
          name="HR ANALYTICS"
          icon={AnalyticsIcon}
          inner={false}
        />
        <ListelementDrawer
          name="PERFORMANCE"
          icon={LeaderboardIcon}
          inner={false}
        />
        <ListelementDrawer
          name="TRAINING"
          icon={ModelTrainingIcon}
          inner={false}
        />
        <ListelementDrawer name="VISITOR" icon={ElderlyIcon} inner={false} />
        <ListelementDrawer
          name="GRIEVANCE"
          icon={MarkAsUnreadIcon}
          inner={false}
        /> */}
        <ListDashboard/>
        <ListEmpmngmnt/>
        <ListRecmngmnt/>
        <ListAttmngmnt/>
        <ListLeavemngmnt/>
        <ListLearningmngmnt/>
        <ListTravelmngmnt/>
        <ListTaskmngmnt/>
        <ListHranalytics/>
        <ListTraining/>
        <ListGrievance/>
        <ListVisitormngmnt/>
        <ListPayrollmngmnt/>
        <ListTimesheet/>
      </List>
    </>
  );
}
export default Drawerlist;
