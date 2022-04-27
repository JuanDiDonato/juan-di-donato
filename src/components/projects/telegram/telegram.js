import * as React from "react"

// styles
import '../card-der.css'
import '../card-izq.css'
import '../telegram/telegram.css'

// images
import telegram from '../../../images/telegram.png'


// markup
const Telegram = () => {
  return (
        <div className="card-der telegram">
            <div className="card-der-img">
                <h2>Bot de Telegram</h2>
                <img src={telegram} alt="telegram"/>
            </div>
            <div className="card-der-li">
                <ul>
                    <li>
                        Logica construida con Python 3
                    </li>
                    <li>
                        Obtiene y envia como audio una cancion pedida por el usuario
                    </li>
                    <li>
                        Soporta nombres, links de videos, y listas de reproduccion
                    </li>
                    <li>
                    Implementacion de entornos virtuales con venv
                    </li>
                    <li>
                        Desplegado en Heroku con Docker
                    </li>
                    <div style={{marginTop:'10%'}}>
                        <a href="https://github.com/JuanDiDonato/Telegram-Bot" target="null">Ver codigo</a>
                    </div>
                </ul>
            </div>
        </div>
  )
}

export default Telegram