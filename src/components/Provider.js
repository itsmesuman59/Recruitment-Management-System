import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Provider(){
const myhistory = useNavigate();
const taskOn = () => {
myhistory('task');
};
return (
    <div className="container">
            <div className="mb-3">
                <input type="submit" className="form-control btn btn-primary" id="exampleFormControlInput1" onClick={taskOn} value="PROVIDER"/>
            </div>
    </div>
)}