
const ModalAboutMe = ({showModal}) => {

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
        <button onClick={showModal}>Cerrar</button>
        </div>
      </div>
    </div>
  )
}

export default ModalAboutMe
