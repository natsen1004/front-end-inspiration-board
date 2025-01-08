import PropTypes from 'prop-types';

<<<<<<< HEAD
const Board = ({boardsData=[], onBoardSelect, selectedBoard}) => {
=======
const Board = ({boardsData, onBoardSelect, selectedBoard}) => {
>>>>>>> 2cd53e452e50ba790492b2ee04fa556c7349bd91
    const boardcomponents = boardsData.map((board) => {
        return (
            <li key={board.id} onClick={() => onBoardSelect(board.id)}> {board.title} </li>
        );
    });

    return (
        <div>
            <h2 className='title-board'> Boards </h2>
            <div className='list-board'>
                <ol>
                    {boardcomponents}
                </ol>
            </div>
            <div className='selected-board'>
                <h2 className='title-selected-board'> Selected Board </h2>
                {selectedBoard ? (
                    <p>{selectedBoard.title}</p>
                ) : (
                    <p>Select a Board from the Board List</p>
                )}
            </div>
        </div>
    );
};
    
<<<<<<< HEAD
=======
    
    
    
    
    
    // console.log(props.boardsData)
    // return(
    //     <div>
    //         <h2 className='title-board'> Boards </h2>
    //         <div className='list-board'>
    //             <ol>
    //                 {props.boardsData.map((board) => (
    //                     <li key={board.id} onClick={() => props.onBoardSelect(board.id)}> {board.title}  </li>
    //                 ))}
    //             </ol>
    //         </div>
//             <div className='selected-board'>
//                 <h2 className='title-selected-board'> Selected Board </h2>
//                     {props.selectedBoard ?(
//                     <p>{props.selectedBoard.title}</p>
//                 ) : (
//                     <p>Select a Board from the Board List</p>
//                 )}
//             </div>
//         </div>
//     );
// };
>>>>>>> 2cd53e452e50ba790492b2ee04fa556c7349bd91

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
};

<<<<<<< HEAD
export default Board;
=======
export default Board;
>>>>>>> 2cd53e452e50ba790492b2ee04fa556c7349bd91
