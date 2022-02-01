import * as React from "react"

// images
import Perfil from '../images/perfil.jpg'
import arrrow from '../images/abajo.png'

// styles
const box = {
    position: "relative",
    top: 0,
    left: 0,
    fontSize:'120%'
}
const messageMarkup = {
    color: '#0061ff',
    textAlign: 'center',
    marginTop: '10vh'
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

const title = {
    fontFamily: 'Raleway'
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
                <h3 style={title}>
                    Software Developer
                </h3>
            </div>
            <div style={buttons}>
                <button onClick={() => window.scroll(0,window.screen.height * 0.88)}><img src={arrrow} alt="arrow"/></button>
            </div>
        </div>
  )
}

export default WelcomeMessage