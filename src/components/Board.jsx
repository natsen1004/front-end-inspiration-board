import PropTypes from 'prop-types';

const Board = ({boardsData=[], onBoardSelect, selectedBoard, handleDeleteBoard}) => {
    const boardcomponents = boardsData.map((board) => {
        return (
            <li key={board.id} onClick={() => onBoardSelect(board.id)}> {board.title} </li>
        );
    });

    return (
        <div className='board'>
            <h2>⋆⭒˚.⋆Boards⋆⭒˚.⋆</h2>
            <div className='selected-board'>
                {selectedBoard ? (
                    <>
                        <p>Selected board: {boardsData.find((board) => board.id === selectedBoard)?.title || null}</p>
                        <button className="board-delete-btn" onClick={() => handleDeleteBoard(selectedBoard.id)}>Delete Selected Board</button>
                    </>
                ) : (
                    <p>Select a Board from the board List</p>
                )}
            </div>
            <div className='list-board'>
                <ol>
                    {boardcomponents}
                </ol>
            </div>
        </div>
    );
};
    

Board.propTypes = {
    boardsData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            owner: PropTypes.string,
        })
    ).isRequired,
    onBoardSelect: PropTypes.func.isRequired,
    selectedBoard: PropTypes.object.isRequired,
    handleDeleteBoard: PropTypes.func.isRequired,
};

export default Board;