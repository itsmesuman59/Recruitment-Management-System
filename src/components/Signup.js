import React from 'react'

export default function Signup(){
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
                <input type="submit" className="form-control" id="exampleFormControlInput1" value="SIGN UP"/>
            </div>
        </form>
        </div>
)}