import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Provider from './components/Provider';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Task from './components/Task';
import axios from 'axios';
import {useState, useEffect} from "react";

function App() {
  const[getData,setData] = useState([]);
  useEffect(()=>{
    async function getAllData(){
      try{
        const datas = await axios.get("http://127.0.0.1:8000/api/signup");
        console.log(datas.data);
        setData(datas.data);
      }
      catch(error)
      {
        console.log(error);
      }
    }
    getAllData();
  },[]);
  return (
<div className="App">
  {
    getData.map((std, i)=>{
      return(
        <h2>{std.id}<br/>{std.name}<br/>{std.email}<br/>{std.password}</h2>
      )
    })
  }
</div>
/* <Router>
      <div className="container-flex">
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="provider" element={<Provider/>} />
          <Route exact path="/provider/task" element={<Task/>} />
          <Route exact path="/provider/task/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
   </Router> */
  );
}

export default App;