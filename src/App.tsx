import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {  } from 'react-router-dom';
import './App.css';
import Game from './components/game/Game';
import Home from './components/home/Home';
import HowTo from './components/howTo/HowTo';
import Menu from './components/nav/Menu';

let data = require("./data/data.json")
function App() {
  // console.log(data)
  return (  
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home/>}>
          </Route>
          <Route path='/game' element={<Game data={data}/>}>
          </Route>
          <Route path='/howTo' element={<HowTo/>}>
          </Route>
        </Routes>
        
      </BrowserRouter>
  );
}

export default App;
