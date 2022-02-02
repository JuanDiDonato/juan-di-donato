import * as React from "react"

// logos
import instagram from '../images/instagram.png'
import telegram from '../images/telegram.png'
import git from '../images/git.png'
import linkedin from '../images/linkedin.png'

// styles
import '../assets/footer.css'

// markup
const Footer = () => {

    const [year,setYear] = React.useState()

    React.useEffect(() => {
        const get_year = () => {
            let date = new Date()
            return date.getFullYear()
        }
        setYear(get_year())
    }, []);
    
  return (
    <div className="ft-text">
        <div className="ft-grid">
            <div className="ft-element">
                <img src={telegram} alt="telegram"/>
                <a  href="https://t.me/Juan_didonato" target="null">Telegram</a>
            </div>
            <div className="ft-element">
                <img  src={instagram} alt="instagram"/>
                <a  href="https://www.instagram.com/juan_didonato/?hl=es-la" target="null">Instagram</a>
            </div>
            <div className="ft-element">
                <img  src={linkedin} alt="linkedin"/>
                <a  href="https://www.linkedin.com/in/juandidonato/" target="null">Linkedin</a>
            </div>
            <div className="ft-element">
                <img src={git} alt="github"/>
                <a href="https://github.com/JuanDiDonato" target="null">GitHub</a>
            </div>
        </div>
        <div>
            <h5>Creado por Juan Di Donato</h5>
            <h6>Pagina construida con React - Gatsby Copyright ℗ {year}</h6>
        </div>
    </div>

  )
}

export default Footer