
import './App.css';
import MiniDrawer from './Components/Drawer_and_Appbar/MiniDrawer';
import {BrowserRouter} from 'react-router-dom' 
import DashboardEmploy from './Pages/Employee/Dashboard/DashboardEmploy';




function App() {
  return (
    <>
    <BrowserRouter>
      <MiniDrawer/>   
      
    </BrowserRouter>
    </>
  );
}

export default App;
