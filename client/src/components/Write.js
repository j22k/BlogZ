import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../styles/Card.css'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import apis from '../api/apis';

const Card = ({ title, description, profileImage }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setsuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    story: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');
    setsuccessMessage('');
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt_decode(token);

      const storyData = {
        id: decodedToken.id,
        user: decodedToken.user,
        ...formData, // Spread the formData properties
      };
      try {
        const response = await axios.post(apis.writeSubmit, storyData); 
        
        if (response.status === 200) {
           setsuccessMessage(response.data.message)
          // Clear the form fields after successful submission
          setFormData({
            title: '',
            story: '',
          });
        }
        else {
          setErrorMessage(response.data.message)
        }
      } catch (error) {
        setErrorMessage('Somthing went wrong !!')
      }
    } else {
      navigate('/');
    }


  };

  return (
    <Container>
      <div className="card-write">
        {errorMessage && <div className="alert alert-danger custom-error">{errorMessage}</div>}
        {successMessage && <div className="alert alert-success custom-success">{successMessage}</div>}
        <div className="card-header custom-green">
          <Form.Control
            size="lg"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
        </div>
        <div className="card-body">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Story</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="story"
              value={formData.story}
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>
        <div className="card-body">
          <Button className="btn" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Card;
