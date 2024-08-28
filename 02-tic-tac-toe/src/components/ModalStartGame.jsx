import { GAME_MODE } from "../constants";

const ModalStartGame = ({selectGame, newSelectGame}) => {

  return (
    <div className="container">
      <div className="modal__text">
        <div>
          <h2>Bienvenido!</h2>
        </div>
        <div>
          <div>
            <p>Hola! Soy Elian Cueva Coronel Desarrollador Front end</p>
            <p>
                Hice este juego con la ayuda del curso de React de: <a style={{cursor: "pointer", color : "#09f"}}>@Midudev</a>
            </p>
        </div>
        </div>
      </div>
        <div className="button_container">
          <button onClick={() => newSelectGame(GAME_MODE.PLAY)}>Jugar local</button>
          {console.log(selectGame)}
        </div>
    </div>
  )
}

export default ModalStartGame
