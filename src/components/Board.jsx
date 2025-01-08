import PropTypes from 'prop-types';

const Board = ({boardsData=[], onBoardSelect, selectedBoard}) => {
    const boardcomponents = boardsData.map((board) => {
        return (
            <li key={board.id} onClick={() => onBoardSelect(board.id)}> {board.title} </li>
        );
    });

    return (
        <div  className='board'>
            <h2>⋆⭒˚.⋆Boards⋆⭒˚.⋆</h2>

            <div className='list-board'>
                <ol>
                    {boardcomponents}
                </ol>
            </div>
            <div className='selected-board'>
                <h2 className='title-selected-board'> Select a board</h2>
                {selectedBoard ? (
                    <p>{selectedBoard.title}</p>
                ) : (
                    <p>Select a Board from the Board List</p>
                )}
                {/* <button className="board-delete-btn" onClick={() => handleDelete(Board.id)}>Delete</button> */}
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
    // handleDelete: PropTypes.func.isRequired,
};

export default Board;