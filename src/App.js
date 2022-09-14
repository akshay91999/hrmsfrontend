
import './App.css';
import {BrowserRouter, Routes} from 'react-router-dom' 
import Routing from './Components/Routing';
import { createContext, useReducer } from 'react';
import {reducer,initialState} from './reducers/userReducer'

export const UserContext=createContext()





function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{ state,dispatch }}>
    <BrowserRouter>
      <Routing/>   
    </BrowserRouter>
    </UserContext.Provider>
  );
}


export default App;
