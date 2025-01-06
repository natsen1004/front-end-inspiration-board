import React from 'react';
import Card from 'Card.jsx';
import './CardList.css';
import PropTypes from "prop-types";

const CardList = ({ cards, onLikeCard, onDeleteCard }) => {
  return (
    <div className="card-list">
      <h2>Cards</h2>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          message={card.message}
          likesCount={card.likes_count}
          onLike={onLikeCard}
          onDelete={onDeleteCard}
        />
      ))}
    </div>
  );
}
CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      board_id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
    })
  ).isRequired,
  onLikeCard: PropTypes.func.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
};

export default CardList;