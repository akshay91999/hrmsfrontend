
import './App.css';
import MiniDrawer from './Components/MiniDrawer';
import {BrowserRouter} from 'react-router-dom' 



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
