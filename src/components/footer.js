import * as React from "react"

const pos = {
    display: 'grid',
    gridTemplateColumns: '25% 25% 25% 25%',
}

const element = {
    textAlign: 'center',
}
const text = {
    color: '#000000',
    width: '100%',
    textAlign: 'center'
}
const end = {
    position: 'relative',
    bottom : '0px'
}

// markup
const Footer = () => {
  return (
    <div style={text}>
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
        <h4 style={end}>Creado por Juan Di Donato</h4>
    </div>

  )
}

export default Footer