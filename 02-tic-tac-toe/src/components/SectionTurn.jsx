import { TURNS } from "../constants"
import Square from "./Square"

const SectionTurn = ({turn}) => {
  return (
    <section className="turn">
      <Square isSelected={turn == TURNS.X}>
        {TURNS.X}
      </Square>
      <Square isSelected={turn == TURNS.O}>
        {TURNS.O}
      </Square>
    </section>
  )
}

export default SectionTurn
