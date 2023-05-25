import React from 'react';

export default function Login(){
return (
    <div className="container">
        <form className="row g-3">
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">JOB TITLE</span>
            <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">COMPANY</span>
            <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">POSITION</span>
            <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">NUMBER</span>
            <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">LOCATION</span>
            <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">ADDRESS</span>
            <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">CONTACT</span>
            <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">TIME-PERIOD</span>
            <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
            </div>
            <div className="mb-3">
                <button className="form-control btn btn-primary" id="exampleFormControlInput1"> PUBLISH </button>
            </div>
        </form>
    </div>
)}