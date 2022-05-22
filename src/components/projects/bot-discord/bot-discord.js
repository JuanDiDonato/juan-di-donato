import * as React from "react"

// styles
import '../card-izq.css'
import '../bot-discord/bot-discord.css'

// images
import discord from '../../../images/discord.png'

// markup
const BotDiscord = () => {
  return (
    <div className="card-izq discord">
        <div className="card-izq-img">
            <h2>Bot de Discord</h2>
            <img src={discord} alt="discord"/>
        </div>
        <div className="card-izq-li">
            <ul>
                <li>
                    Logica construida con Python 3
                </li>
                <li>
                    Uso de Programacion orientada a objetos y Threading
                </li>
                <li>
                    Base de datos con MongoDB y PyMongo
                </li>
                <li>
                    Incorporacion de la API de Riot Games
                </li>
                <li>
                    Despliegue rapido con Docker
                </li>

                <div style={{marginTop:'10%'}}>
                    <a href="https://github.com/JuanDiDonato/experto_en_top_bot_torneos" target="null">Ver codigo</a>
                </div>
                
            </ul>
            
        </div>

    </div>

  )
}

export default BotDiscord