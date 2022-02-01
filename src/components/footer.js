import * as React from "react"

// logos
import instagram from '../images/instagram.png'
import telegram from '../images/telegram.png'
import git from '../images/git.png'
import linkedin from '../images/linkedin.png'

// styles
const grid = {
    display: 'grid',
    gridTemplateColumns: '25% 25% 25% 25%',
}
const element = {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
}
const img = {
    width: '30px',
    height: '30px',
    textAlign: 'center',
    marginLeft: '30px',
}
const link = {
    margin: '10px',
}
const text = {
    color: '#000000',
    textAlign: 'center'
}

// responsive verification
if(window.screen.width <= 500){
    grid['gridTemplateColumns'] = '100%'
    img['marginLeft'] = '0'
}

// markup
const Footer = () => {
  return (
    <div style={text}>
        <div style={grid}>
            <div style={element}>
                <img style={img} src={telegram} alt="telegram"/>
                <a style={link} href="https://t.me/Juan_didonato" target="null">Telegram</a>
            </div>
            <div style={element}>
                <img style={img} src={instagram} alt="instagram"/>
                <a style={link} href="https://www.instagram.com/juan_didonato/?hl=es-la" target="null">Instagram</a>
            </div>
            <div style={element}>
                <img style={img} src={linkedin} alt="linkedin"/>
                <a style={link} href="https://www.linkedin.com/in/juandidonato/" target="null">Linkedin</a>
            </div>
            <div style={element}>
                <img style={img} src={git} alt="github"/>
                <a style={link} href="https://github.com/JuanDiDonato" target="null">GitHub</a>
            </div>
        </div>
        <h4>Creado por Juan Di Donato</h4>
    </div>

  )
}

export default Footer