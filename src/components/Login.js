import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Login(){
const history = useNavigate();
const clickLogin = () => {
    history('provider');
};
const clickSignup = () => {
    history('signup');
};
return (
    <div className="container">
        <form>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter your password"/>
            </div>
            <div className="mb-3">
                <button className="form-control btn btn-primary" id="exampleFormControlInput1" onClick={clickLogin}> LOGIN </button>
            </div>
            <div className="mb-3">
                <button className="form-control btn btn-primary" id="exampleFormControlInput1" onClick={clickSignup}> SIGN UP</button>
            </div>
        </form>
    </div>
)}