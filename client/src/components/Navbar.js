import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import {useNavigate, Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import '../styles/Navbar.css';

const DashboardHeader = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      const decodedToken = jwt_decode(token);
      setUsername(decodedToken.user);
    }
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem('token');
    await navigate('/'); 
  };
  
  return (
    <div className="dashboard-header">
      <nav className="navbar navbar-expand-lg bg-black fixed-top">
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse" // Add this
          data-bs-target="#navbarSupportedContent" // Add this
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <h4>Story Sculpt</h4>
        </div>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto navbar-right-top">
            {token ? (
              <li className="nav-item dropdown nav-user">
                <Dropdown className="custom-dropdown" data-bs-theme="dark">
                  <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    <Image
                      src="/path/to/profile-icon.png"
                      alt={username}
                      roundedCircle
                      style={{ width: '30px', height: '30px', marginRight: '8px' }}
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" active>
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item href="/write">Write</Dropdown.Item>
                    <Dropdown.Item href="/Card">Read</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="red-dropdown-item" onClick={handleLogout}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/" className="btn btn-light">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="btn green-button">
                    Sign Up
                  </Link>
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
