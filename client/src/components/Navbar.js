import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Navigate, useNavigate, Link } from 'react-router-dom';

const DashboardHeader = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const handleLogout = async () => {
    localStorage.removeItem('token');
    await navigate('/');
  };

  return (
    <div className="dashboard-header">
      <nav className="navbar navbar-expand-lg bg-white fixed-top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto navbar-right-top">
            {token ? (

              <li className="nav-item dropdown nav-user">
                <Dropdown data-bs-theme="dark">
                  <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    Dropdown Button
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" active>
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3"></Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-4"><Button variant="danger" onClick={handleLogout} >Logout</Button></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>


              </li>
            ) : (
              <>
                <li>
                  <Link to="/" className="btn btn-light">Sign In</Link>
                </li>
                <li>
                  <Link to="/signup" className="btn btn-primary ml-2">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default DashboardHeader;
