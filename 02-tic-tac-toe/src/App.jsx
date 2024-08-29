import useTicTacToe from './hooks/useTicTacToe';
import Square from './components/Square';
import ModalWinner from './components/ModalWinner';
import SectionTurn from './components/SectionTurn';
import ModalAboutMe from './components/ModalAboutMe';
import { useState } from 'react';
import { TURNS } from './constants';

function App() {
  const { board, turn, winner, updateBoard, resetGame } = useTicTacToe();
  const [showModal, setShowModal] = useState(true);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <div>
        <button onClick={resetGame}>Reset Game</button>
        <button onClick={handleShowModal}>Acerca de mi</button>
      </div>
          {showModal && <ModalAboutMe showModal={handleShowModal}/>}
          <section className="game">
            {board.map((value, index) => (
              <div className="cell" key={index}>
                <span className="cell__content">
                  <Square index={index} updateBoard={updateBoard}>
                    {value}
                  </Square>
                </span>
              </div>
            ))}
          </section>
          {winner !== null ? (
            <ModalWinner handleResetGame={resetGame} winner={winner} />
          ) : (
            <SectionTurn TURNS={TURNS} turn={turn} />
          )}
    </main>
  );
}

export default App;
