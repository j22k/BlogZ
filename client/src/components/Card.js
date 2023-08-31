  import React, { useEffect, useState } from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faHeart } from '@fortawesome/free-solid-svg-icons';
  import '../styles/Card.css';
  import Container from 'react-bootstrap/Container';
  import axios from 'axios'; 
  import apis from '../api/apis';

  const Card = ({ title, description, profileImage }) => {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get(apis.fetchStory);
          console.log('Frontend Response:', response.data); // Log the API response
          setCardsData(response.data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      fetchData();
    }, []);
    
    const handleLikeClick = () => {
      if (liked) {
        setLikes(likes - 1);
      } else {
        setLikes(likes + 1);
      }
      setLiked(!liked);
    };


    return (
      
      <>
      {cardsData.map((card, index) => (
        <Container className='container'>
          <div className="card">
            <div className="card-footer">
              <img src={profileImage} alt="Profile" className="card-profile" />
              <h4 className='card-title'>{card.user}</h4>
            </div>
            <div className="card-header custom-green">
              <h3 className="card-title">{card.title}</h3>
            </div>
            <div className="card-body">
              <p className="card-description">{card.story}</p>
            </div>
            <div className="card-body">
              <button onClick={handleLikeClick} className='btn'>
                <FontAwesomeIcon icon={faHeart} />
                Like
              </button>
              <p>{likes} {likes === 1 ? 'Like' : 'Likes'}</p>
            </div>
          </div>
        </Container>


      ))}
      </>



    );
  };

  export default Card;
