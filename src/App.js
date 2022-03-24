import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Board from './components/dashboard/Board';
import Home from './components/dashboard/Home';
import Login from './components/auth/login/Login';
import Summary from './components/dashboard/Summary';


const App = () => {
  return (
    <div>  
      <Login/>
      <Home/>
      <Summary/>
      <Board/>
  
    </div>
  )
}

export default App
