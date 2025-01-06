import React, { useState } from "react";
import Card from './components/Card';

const CardTest = () => {
  const [mockCard, setMockCard] = useState({
    id: 1,
    message: "You're doing amazing!",
    likes_count: 5,
  });

  const handleLike = (id) => {
    console.log(`Card ${id} liked!`);
    setMockCard((prev) => ({ ...prev, likes_count: prev.likes_count + 1 }));
  };

  const handleDelete = (id) => {
    console.log(`Card ${id} deleted!`);
    // Replace this with actual deletion logic
    setMockCard(null);
  };

  return mockCard ? (
    <Card card={mockCard} onLike={handleLike} onDelete={handleDelete} />
  ) : (
    <p>No card to display.</p>
  );
};

export default CardTest;
