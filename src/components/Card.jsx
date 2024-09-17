import React, { useState, useEffect } from 'react';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md"; // Use MdFavorite for the filled heart icon

const Card = ({ cards, onClick }) => {
  const [favoriteCards, setFavoriteCards] = useState([]);

  // Load favorite cards from localStorage on initial render
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteCards')) || [];
    setFavoriteCards(storedFavorites);
  }, []);

  const handleFavoriteClick = (index) => {
    const card = cards[index];
    let updatedFavorites = [...favoriteCards];

    const isFavorite = updatedFavorites.some(favCard => favCard.title === card.title);

    if (isFavorite) {
      // Remove from favorites
      updatedFavorites = updatedFavorites.filter(favCard => favCard.title !== card.title);
    } else {
      // Add to favorites
      updatedFavorites.push(card);
    }

    // Update localStorage and state
    localStorage.setItem('favoriteCards', JSON.stringify(updatedFavorites));
    setFavoriteCards(updatedFavorites);

    // Trigger onClick for card click handling (if needed)
    onClick(index);
  };

  const isCardFavorite = (card) => {
    return favoriteCards.some(favCard => favCard.title === card.title);
  };

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`card ${card.isPro ? 'pro-card' : ''}`}
          onClick={() => onClick(index)}
        >
          <img src={card.imgUrl} alt={`Card ${index}`} className="card-image" />
          {card.isPro && <span className="pro-badge">Pro</span>}
          <div className="card-overlay">
            <button className="btn-go-pro">Go Pro</button>
            <button
              className={`btn-favorite ${isCardFavorite(card) ? 'favorite-active' : ''}`} // Apply conditional class
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering card click
                handleFavoriteClick(index);
              }}
            >
              {isCardFavorite(card) ? <MdFavorite /> : <MdFavoriteBorder />} {/* Change icon based on favorite status */}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
