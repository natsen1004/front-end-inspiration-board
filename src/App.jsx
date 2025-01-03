import './App.css';
import NewCardForm from './components/NewCardForm.jsx';
import NewBoardForm from './components/NewBoardForm';
import axios from 'axios';
import { useState } from 'react';

const convertFromApi = (apiCard) => {
  const newCard = {
    ...apiCard,
  };
  return newCard;
};

function App () {
  const [cardData, setCardData] = useState([]);
  const [boards, setBoards] = useState([]);

  const cardAPIUrl = 'http://127.0.0.1:5000';
  const boardAPIUrl = 'http://127.0.0.1:5000';

  const createNewBoard = (newBoard) => {
    axios.post(`${boardAPIUrl}/boards`, newBoard)
      .then((response) => {
        const createBoard = response.data.board;
        setBoards((prevBoards) => [createBoard, ...prevBoards]);
      })
      .catch((error) => console.error('Error creating board:', error))
  };

  const handleSubmit = (cardData) => {
    // next line needs to change after define the board API
    axios.post(`${cardAPIUrl}/boards/1/cards`, cardData) 
      .then(result => {
        setCardData((prevCards) => [convertFromApi(result.data.card), ...prevCards]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>CREATE A BOARD AND CARD</h1>
        </header>
        <main>
          <NewBoardForm createNewBoard={createNewBoard} />

          <NewCardForm handleSubmit={handleSubmit} />

          <h3>Boards</h3>
          <ul>
            {boards.length > 0 ? (
              boards.map((board, index) => (
                <li key={index}>
                  <strong>{board.title}</strong> by {board.owner}
                </li>
              ))
            ) : (
              <p>No boards available</p>
            )}
          </ul>
        </main>
      </div>
    </>
  );
};

export default App;

