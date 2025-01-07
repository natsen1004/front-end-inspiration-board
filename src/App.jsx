import './App.css';
import NewCardForm from './components/NewCardForm.jsx';
import axios from 'axios';
import { useState, useEffect} from 'react';
import Board from './components/Board.jsx';
import Card from './components/Card.jsx';


const convertFromApi = (apiCard) => {
  const newCard = {
    ...apiCard,
  };
  return newCard;
};

function App () {
  const [cardData, setCardData] = useState([]);
  const [boardsData, setBoardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);

  const boardAPIUrl = 'https://live-love-inspire-back-end-inspiration.onrender.com/boards'


  const fetchBoards = () => {
    axios.get(boardAPIUrl)
      .then(response => {
        console.log(response)
        console.log(response.data)
        setBoardsData(response.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect (() => {
    fetchBoards();
  }, []);

  const onBoardSelect = (board) => { 
    setSelectedBoard(board);
    console.log("selected board", board);
    axios
      .get(`${boardAPIUrl}/${board}/cards`)
      // .get(`${boardAPIUrl}/${board.id}`)
      .then(response => setCardData(response.data))
      .catch((error) => console.log(error));
  };

  
  const togglevisibility = () => {
    setIsBoardFormVisible(!isBoardFormVisible);
  };
  
  
  const handleLike = (cardId) => {
    axios
    .put(`${boardAPIUrl}/${selectedBoard}/cards/${cardId}`)
    .then((response) => {
      console.log("Like response:", response.data);

      const updatedCard = response.data.card;

      const updatedCardData = cardData.map((card) =>
        card.id === updatedCard.id ? updatedCard : card
      );

      setCardData(updatedCardData);
    })
    
    .catch((error) => {
      console.log("Error updating likes:",error);
    });  
  };

  const handleDelete = (cardId) => {
    axios
      .delete(`${boardAPIUrl}/${selectedBoard}/cards/${cardId}`)
      .then(() => {
        console.log(`Card ${cardId} deleted`);
  
        // Remove the deleted card from state
        const updatedCardData = cardData.filter((card) => card.id !== cardId);
        setCardData(updatedCardData);
      })
      .catch((error) => {
        console.error("Error deleting card:", error);
      });
  };
  



  return (
    <>
      <div className="App">
        
        <header className="App-header">
          <h1>Inspiration Board</h1>
        </header>
        <main>
          {/* <NewCardForm handleSubmit={handleSubmit}/> */}
          <Board 
            boardsData={boardsData} 
            onBoardSelect={onBoardSelect} 
            selectedBoard={selectedBoard} 
          />
          <button onClick={togglevisibility}>
            {isBoardFormVisible ? "Hide Section" : "Show Section"} 
          </button> 
          <div className="cards-container">
            <h2>Cards</h2>
            <button>add a card</button>
            <ul>
              {cardData.map((card) => (
                <Card 
                  key={card.id}
                  card={card}
                  handleLike={handleLike}
                  handleDelete={handleDelete}
                />
              ))}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;

              {/* {cardData.map((card) => (
                <li key={card.id}>
                  <p>{card.message}</p>
                  <p>{card.likes_count}💕</p>
                  <button>Like</button>
                  <button>Delete</button>
                </li>
              ))} */}
