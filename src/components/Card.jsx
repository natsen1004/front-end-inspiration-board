// Card.jsx
import React from 'react';
import PropTypes from 'prop-types';

function Card({ card, handleLike, handleDelete }) {
  return (
    <li key={card.id}>
      <p>{card.message}</p>
      <p>{card.likes_count}💕</p>
      <button onClick={() => handleLike(card.id)}>Like</button>
      <button onClick={() => handleDelete(card.id)}>Delete</button>
    </li>
  );
}


Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes_count: PropTypes.number.isRequired,
  }).isRequired,
  handleLike: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Card;
