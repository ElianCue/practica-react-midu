import Square from "./Square"

const ModalWinner = ({winner, handleResetGame}) => {
  return (
    <section className="winner">
      <div className="text">
        <h2>
          {
            winner === false 
            ? 'Empate'
            : 'Gano'
          }
        </h2>
        { winner &&(
          <header className="win">
            {winner && <Square>{winner}</Square>}
          </header>
        )
        }
        <footer>
          <button onClick={handleResetGame}>Reset Game</button>
        </footer>
      </div>
    </section>

  )
}

export default ModalWinner
