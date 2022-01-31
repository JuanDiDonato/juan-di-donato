import * as React from "react"

const pos = {
    position: 'relative',
    bottom: '0',
    display: 'grid',
    gridTemplateColumns: '33% 33% 33%',
}

const element = {
    margin: '5%',
    padding: '5%',
    textAlign: 'center'
}
const text = {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    height: '50vh',
    width: '100%',
    textAlign: 'center'
}

// markup
const Footer = () => {
  return (
    <div style={text}>
        <h4>Creado por Juan Di Donato</h4>
        <div style={pos}>
            <div style={element}>
                Telegram
            </div>
            <div style={element}>
                Instagram
            </div>
            <div style={element}>
                Linkedin
            </div>
        </div>
    </div>

  )
}

export default Footer