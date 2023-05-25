import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Signup(){
const history = useNavigate();
const clickMeTwo = () => {
history('/');
};
return (
    <div className="container">
        <form>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter your password"/>
            </div>
            <div className="mb-3">
                <input type="submit" className="form-control btn btn-primary" id="exampleFormControlInput1" value="SIGN UP"/>
            </div>
            <div className="mb-3">
                <input type="submit" className="form-control btn btn-primary" id="exampleFormControlInput1" onClick={clickMeTwo} value="BACK TO LOGIN"/>
            </div>
        </form>
    </div>
)}