// Card.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

// function Card({ card, handleLike, handleDelete }) {
//   return (
//     <li className="card-container">
//       key={card.id}>
//       <p>{card.message}</p>
//       <p>{card.likes_count}💕</p>
//       <button onClick={() => handleLike(card.id)}>Like</button>
//       <button onClick={() => handleDelete(card.id)}>Delete</button>
//     </li>
//   );
// }
function Card({ card, handleLike, handleDelete }) {
  return (
    <li className="card-container">
      <p className="card-message">{card.message}</p>
      <p className="card-likes">{card.likes_count} 💕</p>
      <div className="card-buttons">
        <button onClick={() => handleLike(card.id)}>Like</button>
        <button className="delete-btn" onClick={() => handleDelete(card.id)}>
          Delete
        </button>
      </div>
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
