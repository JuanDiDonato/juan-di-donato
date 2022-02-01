import * as React from "react"

const pos = {
    position: 'relative',
    bottom: '0',
    display: 'grid',
    gridTemplateColumns: '25% 25% 25% 25%',
}

const element = {
    margin: '5%',
    padding: '5%',
    textAlign: 'center'
}
const text = {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    height: '25vh',
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
                <a href="https://t.me/Juan_didonato" target="null">Telegram</a>
            </div>
            <div style={element}>
                <a href="https://www.instagram.com/juan_didonato/?hl=es-la" target="null">Instagram</a>
            </div>
            <div style={element}>
                <a href="https://www.linkedin.com/in/juandidonato/" target="null">Linkedin</a>
            </div>
            <div style={element}>
                <a href="https://github.com/JuanDiDonato" target="null">GitHub</a>
            </div>
        </div>
    </div>

  )
}

export default Footer