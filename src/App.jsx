import './App.css';
import NewCardForm from './components/NewCardForm.jsx';
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

  const cardAPIUrl = 'https://live-love-inspire-back-end-inspiration.onrender.com';

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
        </main>
      </div>
    </>
  );
};

export default App;

