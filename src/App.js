import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Board from './components/Board';
import Home from './components/Home';
import Login from './components/Login';
import Summary from './components/Summary';


const App = () => {
  return (
    <div>  
      <Login/>  
  
    </div>
  )
}

export default App
