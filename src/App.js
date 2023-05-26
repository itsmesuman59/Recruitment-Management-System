import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Provider from './components/Provider';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Task from './components/Task';

function App() {
  return (
    <>
    <Router>
      <div className="container-flex">
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="provider" element={<Provider/>} />
          <Route exact path="/provider/task" element={<Task/>} />
          <Route exact path="/provider/task/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
   </Router>
    </>
  );
}

export default App;