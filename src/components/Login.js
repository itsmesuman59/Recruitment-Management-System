import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Login(){
const history = useNavigate();
const clickMe = () => {
    history('signup');
};
return (
    <div className="container">
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email"/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter your password"/>
                </div>
                <div className="mb-3">
                <button className="form-control" id="exampleFormControlInput1" onClick={clickMe}> LOGIN </button>
            </div>
        </div>
)}