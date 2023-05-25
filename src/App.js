import Login from './components/Login';
import Signup from './components/Signup';
import Provider from './components/Provider';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Task from './components/Task';

function App() {
  return (
    <>
    <Router>
      <div className="container my-3">
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="provider" element={<Provider/>} />
          <Route exact path="/provider/task" element={<Task/>} />
        </Routes>
      </div>
   </Router>
    </>
  );
}

export default App;