import React from 'react';
import './style.css';

const Dashboard = () => {
  return (
    <div className="parent">
    <div className="dashboard">
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger h-100">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
    </div>
    <div className="newsfeed">
      <div className="A bg-light"></div>
      <div className="B overflow-scroll bg-light">
        <div className="container">
        <table className="table">
            <tbody>
              <tr>
              <th scope="row">JOB TITLE</th>
              <td>Laravel Developer</td>
              </tr>
              <tr>
              <th scope="row">COMPANY</th>
              <td>Pioneer Softech</td>
              </tr>
              <tr>
              <th scope="row">POSITION</th>
              <td>Mid Level</td>
              </tr>
              <tr>
              <th scope="row">NUMBER</th>
              <td>5</td>
              </tr>
              <tr>
              <th scope="row">ADDRESS</th>
              <td>Bagbazar, Kathmandu</td>
              </tr>
              <tr>
              <th scope="row">CONTACT</th>
              <td>rajendra@gmail.com</td>
              </tr>
              <tr>
              <th scope="row">TIME-PERIOD</th>
              <td>5 days left</td>
              </tr>
            </tbody>
          </table><br></br>
          <table className="table">
            <tbody>
              <tr>
              <th scope="row">JOB TITLE</th>
              <td>Laravel Developer</td>
              </tr>
              <tr>
              <th scope="row">COMPANY</th>
              <td>Pioneer Softech</td>
              </tr>
              <tr>
              <th scope="row">POSITION</th>
              <td>Mid Level</td>
              </tr>
              <tr>
              <th scope="row">NUMBER</th>
              <td>10</td>
              </tr>
              <tr>
              <th scope="row">ADDRESS</th>
              <td>Bagbazar, Kathmandu</td>
              </tr>
              <tr>
              <th scope="row">CONTACT</th>
              <td>rajendra@gmail.com</td>
              </tr>
              <tr>
              <th scope="row">TIME-PERIOD</th>
              <td>5 days left</td>
              </tr>
            </tbody>
          </table><br></br>
          <table className="table">
            <tbody>
              <tr>
              <th scope="row">JOB TITLE</th>
              <td>Laravel Developer</td>
              </tr>
              <tr>
              <th scope="row">COMPANY</th>
              <td>Pioneer Softech</td>
              </tr>
              <tr>
              <th scope="row">POSITION</th>
              <td>Mid Level</td>
              </tr>
              <tr>
              <th scope="row">NUMBER</th>
              <td>15</td>
              </tr>
              <tr>
              <th scope="row">ADDRESS</th>
              <td>Bagbazar, Kathmandu</td>
              </tr>
              <tr>
              <th scope="row">CONTACT</th>
              <td>rajendra@gmail.com</td>
              </tr>
              <tr>
              <th scope="row">TIME-PERIOD</th>
              <td>5 days left</td>
              </tr>
            </tbody>
          </table><br></br>
          <table className="table">
            <tbody>
              <tr>
              <th scope="row">JOB TITLE</th>
              <td>Laravel Developer</td>
              </tr>
              <tr>
              <th scope="row">COMPANY</th>
              <td>Pioneer Softech</td>
              </tr>
              <tr>
              <th scope="row">POSITION</th>
              <td>Mid Level</td>
              </tr>
              <tr>
              <th scope="row">NUMBER</th>
              <td>20</td>
              </tr>
              <tr>
              <th scope="row">ADDRESS</th>
              <td>Bagbazar, Kathmandu</td>
              </tr>
              <tr>
              <th scope="row">CONTACT</th>
              <td>rajendra@gmail.com</td>
              </tr>
              <tr>
              <th scope="row">TIME-PERIOD</th>
              <td>5 days left</td>
              </tr>
            </tbody>
          </table><br></br>
          <table className="table">
            <tbody>
              <tr>
              <th scope="row">JOB TITLE</th>
              <td>Laravel Developer</td>
              </tr>
              <tr>
              <th scope="row">COMPANY</th>
              <td>Pioneer Softech</td>
              </tr>
              <tr>
              <th scope="row">POSITION</th>
              <td>Mid Level</td>
              </tr>
              <tr>
              <th scope="row">NUMBER</th>
              <td>25</td>
              </tr>
              <tr>
              <th scope="row">ADDRESS</th>
              <td>Bagbazar, Kathmandu</td>
              </tr>
              <tr>
              <th scope="row">CONTACT</th>
              <td>rajendra@gmail.com</td>
              </tr>
              <tr>
              <th scope="row">TIME-PERIOD</th>
              <td>5 days left</td>
              </tr>
            </tbody>
          </table><br></br>
          <table className="table">
            <tbody>
              <tr>
              <th scope="row">JOB TITLE</th>
              <td>Laravel Developer</td>
              </tr>
              <tr>
              <th scope="row">COMPANY</th>
              <td>Pioneer Softech</td>
              </tr>
              <tr>
              <th scope="row">POSITION</th>
              <td>Mid Level</td>
              </tr>
              <tr>
              <th scope="row">NUMBER</th>
              <td>30</td>
              </tr>
              <tr>
              <th scope="row">ADDRESS</th>
              <td>Bagbazar, Kathmandu</td>
              </tr>
              <tr>
              <th scope="row">CONTACT</th>
              <td>rajendra@gmail.com</td>
              </tr>
              <tr>
              <th scope="row">TIME-PERIOD</th>
              <td>5 days left</td>
              </tr>
            </tbody>
          </table><br></br>
          <table className="table">
            <tbody>
              <tr>
              <th scope="row">JOB TITLE</th>
              <td>Laravel Developer</td>
              </tr>
              <tr>
              <th scope="row">COMPANY</th>
              <td>Pioneer Softech</td>
              </tr>
              <tr>
              <th scope="row">POSITION</th>
              <td>Mid Level</td>
              </tr>
              <tr>
              <th scope="row">NUMBER</th>
              <td>35</td>
              </tr>
              <tr>
              <th scope="row">ADDRESS</th>
              <td>Bagbazar, Kathmandu</td>
              </tr>
              <tr>
              <th scope="row">CONTACT</th>
              <td>rajendra@gmail.com</td>
              </tr>
              <tr>
              <th scope="row">TIME-PERIOD</th>
              <td>5 days left</td>
              </tr>
            </tbody>
          </table><br></br>
          <nav aria-label="...">
          <ul className="pagination">
          <li className="page-item disabled">
          <a className="page-link">Previous</a>
          </li>
          <li className="page-item"><a class="page-link" href="#">1</a></li>
          <li className="page-item active" aria-current="page">
          <a className="page-link" href="#">2</a>
          </li>
          <li className="page-item"><a class="page-link" href="#">3</a></li>
          <li className="page-item">
          <a className="page-link" href="#">Next</a>
          </li>
          </ul>
          </nav>
        </div>
      </div>
      <div className="C bg-light"></div>
    </div>
    </div>
  )
}

export default Dashboard