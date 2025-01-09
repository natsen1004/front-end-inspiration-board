import './App.css';
import './components/Board.css';
import './components/Card.css';
import './components/NewBoardForm.css';
import './components/NewCardForm.css';
import NewBoardForm from './components/NewBoardForm.jsx';
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
  const [boards, setBoards] = useState([]);
  const [boardsData, setBoardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);
  const [sortOption, setSortOption] = useState('id');

  // Sorting logic
  const sortedCards = [...cardData].sort((a, b) => {
    if (sortOption === "id") {
      return a.id - b.id; // Sort by ID (numerical)
    } else if (sortOption === "alphabetical") {
      return a.message.localeCompare(b.message); // Sort alphabetically by message
    } else if (sortOption === "likes") {
      return b.likes_count - a.likes_count; // Sort by likes (descending)
    }
    return 0;
  });

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

  const createNewBoard = async (newBoard) => {
    const response = await fetch('https://live-love-inspire-back-end-inspiration.onrender.com/boards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBoard),
    });
  
    const createdBoard = await response.json();
    setBoards((prevBoards) => [...prevBoards, createdBoard]);  
    console.log('Board created', createdBoard);
    return createdBoard;
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
  
  const handleSubmit = (cardData) => {
    // next line needs to change after define the board API
    axios.post(`${boardAPIUrl}/${selectedBoard}/cards`, cardData) 
      .then(result => {
        setCardData((prevCards) => [convertFromApi(result.data.card), ...prevCards]);
      })
      .catch((error) => console.log(error));
  };


  return (
    <>
      <div className="App">
        <div className="left-side">
          <header className="App-header">
            <h1 className="h1">⋆. 𐙚 ̊Inspiration Board⋆. 𐙚 ̊</h1>
          </header>
          <main>
            <Board 
              boardsData={boardsData} 
              onBoardSelect={onBoardSelect}
              selectedBoard={selectedBoard}
              // handleDelete={handleDelete} 
            />
            <div>
              {boards.map((board) => (
                <div key={board.id}>
                  <h2>{board.title}</h2>
                  <p>{board.owner}</p>
                </div>
              ))}
            </div>
  
            {selectedBoard && (
              <div className="cards-container">
                <h2>⋆⭒˚.⋆Cards⋆⭒˚.⋆</h2>
                <ul className="cards">
                  {sortedCards.map((card) => (
                    <Card 
                      key={card.id}
                      card={card}
                      handleLike={handleLike}
                      handleDelete={handleDelete}
                    />
                  ))}
                </ul>
              </div>
            )}
            {selectedBoard && (
            <div className="sort-container">
              <label htmlFor="sort-cards">Sort Cards:</label>
              <select
                id="sort-cards"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="id">Sort by ID</option>
                <option value="alphabetical">Sort Alphabetically</option>
                <option value="likes">Sort by Number of Likes</option>
              </select>
            </div>
            )}
          </main>
        </div>
        <div className="right-side">
          {isBoardFormVisible && <NewBoardForm createNewBoard={createNewBoard} />}
          <button className="hide-form-btn" onClick={togglevisibility}>
            {isBoardFormVisible ? "Hide Form" : "Show Form"}
          </button>
          {selectedBoard && (
            <NewCardForm handleSubmit={handleSubmit} />
            )}
        </div>
      </div>
    </>
  );
  
};

export default App;
