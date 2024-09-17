import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './FavoriteSection.css'; // Assuming you have a CSS file for styling

const FavoriteSection = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);

  useEffect(() => {
    // Get favorite cards from localStorage
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteCards')) || [];
    setFavoriteCards(savedFavorites);
  }, []);

  return (
    <div className="favorite-section">
      <h4 className="favorite-title">Favorite Section</h4>
      <div className="favorite-cards">
        {favoriteCards.length > 0 ? (
          favoriteCards.map((card, index) => (
            <div key={index} className="favorite-card">
              <img src={card.imgUrl} alt={`Card ${index}`} className="favorite-card-image" />
              <div className="favorite-card-info">
                <h5 className="favorite-card-title">{card.title}</h5>
                <p className="favorite-card-description">{card.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-favorites">No favorites added yet.</p>
        )}
      </div>
    </div>
  );
};

FavoriteSection.propTypes = {
  favoriteCards: PropTypes.array
};

export default FavoriteSection;
