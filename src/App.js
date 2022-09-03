
import './App.css';

import {BrowserRouter, Routes} from 'react-router-dom' 
import DashboardEmploy from './Pages/Employee/Dashboard/DashboardEmploy';
import LoginPage from './Pages/LoginPage';
import ResetPassword from './Pages/ResetPassword';

import Routing from './Components/Routing';
import { useEffect } from 'react';






function App() {
  return (
    <>
    <BrowserRouter>
      <Routing/>   
    </BrowserRouter>
    </>
  );
}


export default App;
