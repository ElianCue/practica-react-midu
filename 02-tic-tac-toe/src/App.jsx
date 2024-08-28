import useTicTacToe from './hooks/useTicTacToe';
import Square from './components/Square';
import ModalWinner from './components/ModalWinner';
import SectionTurn from './components/SectionTurn';
import ModalStartGame from './components/ModalStartGame';
import { GAME_MODE, TURNS } from './constants';
import { useState } from 'react';

function App() {
  const { board, turn, winner, updateBoard, resetGame } = useTicTacToe();
  const [selectGame, setSelectGame] = useState(GAME_MODE.PLAY);
  const [showModal, setShowModal] = useState(true);

  const handleStartGame = (gameMode) => {
    setSelectGame(gameMode);
    setShowModal(false);
  };

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      {showModal ? (
        <ModalStartGame
          selectGame={selectGame}
          newSelectGame={handleStartGame}
        />
      ) : (
        <>
          <button onClick={resetGame}>Reset Game</button>
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
        </>
      )}
    </main>
  );
}

export default App;
