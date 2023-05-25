import Login from './components/Login';
import Signup from './components/Signup';
import React from 'react';
import {BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <div className="container my-3">
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </div>
   </Router>
    </>
  );
}

export default App;
