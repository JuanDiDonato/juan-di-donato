import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import arrrow from '../images/abajo.png'

// styles
const box = {
    position: "relative",
    top: 0,
    left: 0,
    fontSize:'120%',
}
const messageMarkup = {
    color: '#0061ff',
    textAlign: 'center',
    marginTop: '10vh'
}
const image = {
    width: '230px',
    hight: '230px',
    borderRadius: '100%',
    margin: '5vh',
    border: '2px solid black'
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
                <h1 style={title}>
                    Juan Di Donato
                </h1>
                <h3 style={title}>
                    Software Developer
                </h3>
                <StaticImage src="../images/perfil3.jpg" alt="Juan" style={image}/>

            </div>
            <div style={buttons}>
                <button  onClick={() => window.scrollBy({'top':window.screen.height, 'behavior': 'smooth'})}><img src={arrrow} alt="arrow"/></button>
            </div>
        </div>
  )
}

export default WelcomeMessage