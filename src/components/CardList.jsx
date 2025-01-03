import React from 'react';
import Card from 'Card.jsx';
import './CardList.css';
import PropTypes from "prop-types";

const CardList = ({ cards, onLikeCard, onDeleteCard }) => {
    const getCardListJSX =() =>
      cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          onLike={onLikeCard}
          onDelete={onDeleteCard}
        />
      ));
    return <ul className="card__list">{getCardListJSX()}</ul>;
};

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