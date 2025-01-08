import PropTypes from 'prop-types';

const SelectedBoard = ({ board }) => (
  <div>
    <h2>Selected Board</h2>
    <p>Title: {board.title}</p>
    <p>Owner: {board.owner}</p>
  </div>
);

SelectedBoard.propTypes = {
  board: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
  }),
};

export default SelectedBoard;
