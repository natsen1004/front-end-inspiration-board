import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from 'axios';

function App() {
  const [boards, setBoards] = useState([]);
  const [selectBoard, setSelectBoard] = useState(null);
  const [cards, setCards] = useState([]);

  const kbaseUrl = 'https://live-love-inspire-back-end-inspiration.onrender.com';

  // fetch boards
  useEffect(() => {
    axios.get(`${baseUrl}/boards`)
      .then((response) => {
        setBoards(response.data);
      })
      .catch((error) => {
        console.error('Error fetching boards', error);
      });
    }, []);

  // fetch cards
  useEffect(() => {
    if (selectBoard) {
      axios.get(`${baseUrl}/boards/${selectBoard.id}/cards`)
        .then((response) => {
          setCards(response.data);
        })
        .catch((error) => {
          console.error('Error fetching cards', error);
        });
    }
  }, [selectBoard]);


  const handleLikeCard = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, likes_count: card.likes_count + 1 } : card
      )
    );
  };

  const handleDeleteCard = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

   return (
    <div className="App">
      <header>
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <BoardList boards={boards} onBoardSelect={handleBoardSelect} />
        {selectedBoard && (
          <CardList
            cards={cards}
            onLikeCallback={() => {}}
            onDeleteCallback={() => {}}
          />
        )}
      </main>
    </div>
  );
}


