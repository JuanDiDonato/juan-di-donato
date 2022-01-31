import * as React from "react"

// images
import Perfil from '../images/perfil.jpg'

// styles
const box = {
    position: "relative",
    top: 0,
    left: 0,
    width: window.screen.width,
    fontSize:'120%'

}
const messageMarkup = {
    color: '#0061ff',
    textAlign: 'center',
    marginTop: '15vh'
}
const image = {
    width: '220px',
    hight: '220px',
    border: '1px solid black',
    borderRadius: '100%',
    margin: '5vh',
}
const buttons = {
    textAlign: 'center'
}


// markup
const WelcomeMessage = () => {
  return (
        <div style={box}>
            <div style={messageMarkup}>
                <h1>
                    Juan Di Donato
                </h1>
                <img style={image} src={Perfil} alt="Juan Di Donato"/>
                <h3>
                    Backend Developer
                </h3>
                <h6>Hecho con amor</h6>
            </div>
            <div style={buttons}>
                <button onClick={() => window.scroll(0,window.screen.height)}>Siguiente</button>
            </div>
        </div>
  )
}

export default WelcomeMessage