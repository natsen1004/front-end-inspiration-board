import './App.css';
import NewCardForm from './components/NewCardForm.jsx';
import axios from 'axios';
import { useState } from 'react';
import SelectedBoard from './components/Board.jsx';
import Boards from './components/Board.jsx';
import { useEffect } from 'react';

const convertFromApi = (apiCard) => {
  const newCard = {
    ...apiCard,
  };
  return newCard;
};

function App () {
  const [cardData, setCardData] = useState([]);

  const cardAPIUrl = 'http://127.0.0.1:5000';
  const boardAPIUrl = 'https://live-love-inspire-back-end-inspiration.onrender.com/boards'

  const [boardsData, setBoardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({});
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);

  const fetchBoards = () => {
    axios.get(boardAPIUrl)
      .then(response => {
        console.log(response)
        setBoardsData(response.data.boards);
      })
      .catch((error) => console.log(error));
  };
  useEffect (() => {
    fetchBoards();
  }, []);

  const onBoardSelect = (id) => { 
    return axios.get(`${boardAPIUrl}/${id}/cards`)
      .then(response => {
        setCardData(response.data.cards);
        setSelectedBoard(response.data);
      })
      .catch((error) => console.log(error));
    };
  
  const togglevisibility = () => {
    setIsBoardFormVisible(!isBoardFormVisible);
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
          <h1>CREATE A NEW CARD</h1>
        </header>
        <main>
          <NewCardForm handleSubmit={handleSubmit}/>
          <Boards boardsData={boardsData} onBoardSelect={onBoardSelect} />
          <SelectedBoard selectedBoard={selectedBoard} cardData={cardData}/>
          <button onClick={togglevisibility}>
            {isBoardFormVisible ? "Hide Section" : "Show Section"}
          </button>
        </main>
      </div>
    </>
  );
};

export default App;

