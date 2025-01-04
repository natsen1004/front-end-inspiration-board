import { useState } from 'react'
import './App.css'
import Card from './components/Card';
import CardTest from './CardTest';

function App() {
    return (
        <div className="App">
            <CardTest />
        </div>
    );
}

// function App() {
//   const [count, setCount] = useState(0)


//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>LLI's Inspiration Board</h1>
//       </header>
//       <main>
//         <div className="board-section">
//           <BoardList boards={boards} onSelectBoard={handleSelectBoard} />
//           {showBoardForm && (
//             <NewBoardForm onSubmit={handleAddBoard} onCancel={() => setShowBoardForm(false)} />
//           )}
//           {!showBoardForm && <button onClick={() => setShowBoardForm(true)}>Create New Board</button>}
//         </div>

//         <div className="selected-board-section">
//           {selectedBoard ? (
//             <>
//               <Board board={selectedBoard} />
//               <CardList cards={cards} />
//               {showCardForm && (
//                 <NewCardForm onSubmit={handleAddCard} onCancel={() => setShowCardForm(false)} />
//               )}
//               {!showCardForm && (
//                 <button onClick={() => setShowCardForm(true)}>Create New Card</button>
//               )}
//             </>
//           ) : (
//             <p>Select a Board from the Board List!</p>
//           )}
//         </div>

//         {errorMessage && <div className="error-message">{errorMessage}</div>}
//       </main>
//     </div>
//   );
// }

// export default App;