import { useState } from 'react';
import PropTypes from 'prop-types';

const NewBoardForm = ({ createNewBoard }) => {
  const [title, setTitle] = useState('');
  const [owner, setOwner] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleOwnerChange = (e) => {
    setOwner(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newBoard = {
      title,
      owner,
    };

    try {
      
      createNewBoard(newBoard);

      setTitle('');
      setOwner('');
    } catch (error) {
      console.error("Error creating board:", error);
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-container-h2">Create a New Board</h2>
      <form onSubmit={handleSubmit}>
        <div>

          <label htmlFor="title">Title: </label>
          <input 
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="owner">Owner: </label>
          <input 
            type="text"
            id="owner"
            value={owner}
            onChange={handleOwnerChange}
            required
          />
        </div>

        <button className="create-board-btn" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creating Board...' : 'Create Board'}
        </button>
      </form>
    </div>
  );
};

NewBoardForm.propTypes = {
  createNewBoard: PropTypes.func.isRequired,
};

export default NewBoardForm;