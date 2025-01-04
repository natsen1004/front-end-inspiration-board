import React from "react";
import PropTypes from "prop-types";
import "./Card.css";


const Card = ({ card, onLike, onDelete }) => {
  const { id, message, likes_count } = card;

  const handleLike = () => {
    onLike(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="card">
      <p className="card-message">{message}</p>
      <p className="card-likes">{likes_count}💕</p>
      <div className="card-actions">
        <button className="like-button" onClick={handleLike}>
          +1
        </button>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes_count: PropTypes.number.isRequired,
  }).isRequired,
  onLike: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Card;
