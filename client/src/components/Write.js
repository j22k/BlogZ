import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import axios from 'axios'; // Import axios for making HTTP requests
import '../styles/Card.css'

const Card = ({ title, description, profileImage }) => {
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

    try {
      const response = await axios.post('/api/submit', formData); // Change this to your API endpoint
      // Clear the form fields after successful submission
      setFormData({
        title: '',
        story: '',
      });
      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container>
      <div className="card-write">
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
