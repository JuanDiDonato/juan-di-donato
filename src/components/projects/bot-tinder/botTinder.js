import * as React from "react"

// styles
import '../card-der.css'
import '../bot-tinder/botTinder.css'


// images
import tinder from '../../../images/tinder.png'

// markup
const BotTinder = () => {
  return (
    <div className="card-der tinder">
        <div className="card-der-img">
            <h2>Bot de Tinder</h2>
            <img src={tinder} alt="apis"/>
        </div>
        <div className="card-der-li">
            <ul>
                <li>
                    Logica construida con Python 3
                </li>
                <li>
                    Utiliza Selenium y el controlador de Chrome para funcionar
                </li>
                <li>
                    Implementa programacion orientada a objetos (clases)
                </li>
                <li>
                    Implementacion de entornos virtuales con venv
                </li>
                <li>
                    Utiliza dos clases para funcionar, una que toma los elementos del HTML y otra que tiene la logica del bot
                </li>
                <div style={{marginTop:'10%'}}>
                    <a href="https://github.com/JuanDiDonato/Bot-tinder" target="null">Ver codigo</a>
                </div>
                
            </ul>
        </div>
    </div>

  )
}

export default BotTinder