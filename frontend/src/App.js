import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Notify from './components/Notify';
import PrivateRoute from './components/PrivateRoute';
import SignUp from "./components/SignUp"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
      </Routes>
      <Notify />
    </div>
  );
}

export default App;
