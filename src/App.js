
import './App.css';
import MiniDrawer from './Components/Drawer_and_Appbar/MiniDrawer';
import {BrowserRouter, Routes} from 'react-router-dom' 
import DashboardEmploy from './Pages/Employee/Dashboard/DashboardEmploy';
import LoginPage from './Pages/LoginPage';
import ResetPassword from './Pages/ResetPassword';
import EmployMovements from './Pages/HrAnalytics/EmployMovements';
import GenderAnalysis from './Pages/HrAnalytics/GenderAnalysis';
import { Paper } from '@mui/material';
import { Container } from '@mui/system';






function App() {
  return (
    <>
    <BrowserRouter>
      <MiniDrawer/>   
      {/* <LoginPage/> */}
      {/* <ResetPassword/> */}
      {/* <EmployMovements/> */}
      {/* <EmpMove/> */}
       
      {/* <GenderAnalysis/> */}
     
      

    </BrowserRouter>
    </>
  );
}


export default App;
