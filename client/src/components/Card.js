import React from 'react';
import '../styles/Card.css';
import Container from 'react-bootstrap/Container'; // Import your custom CSS file for styling

const Card = ({ title, description, profileImage }) => {
  return (
    <>
      <Container>
        <div className="card">
          <div className="card-footer">
            <img src={profileImage} alt="Profile" className="card-profile" />
            <h4 className='card-title'> name</h4>
          </div>
          <div className="card-header custom-green">
            <h3 className="card-title">Lorem ipsum</h3>
          </div>
          <div className="card-body">
            <p className="card-description"><p>Lorem ipsum dolor sit amet. Eum quas voluptatem aut provident accusamus ut veritatis necessitatibus. Qui tempore internos eum sequi iste est commodi cupiditate in quia minus? Qui ratione veniam et eligendi commodi aut optio alias At excepturi repellat ab minus eaque vel similique voluptatem quo quibusdam sunt. </p><p>Aut iure repellendus in provident adipisci ab repellendus velit 33 aperiam dolores. A aperiam aliquid eum excepturi porro quo inventore iusto et nobis quia ut repellat ullam. </p><p>Sed ullam culpa id consequatur fugiat cum libero similique quo iure asperiores est saepe natus eos veniam accusamus rem accusantium quae! Sit culpa adipisci quo ducimus quibusdam et velit voluptatum ut beatae facere in reprehenderit eaque. Et magni voluptas in doloribus cupiditate non vero sunt ut magni consequatur a quos enim? Et consectetur facilis hic saepe odio ea consequatur asperiores. </p>
            </p>
          </div>
          <div className="card-body">

          </div>
        </div>
      </Container>

    </>



  );
};

export default Card;
