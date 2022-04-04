import * as React from "react"

// styles
import '../card-der.css'
import '../apis/apis.css'


// images
import api from '../../../images/api.png'

// markup
const Apis = () => {
  return (
    <div className="card-der apis">
        <div className="card-der-img">
            <h2>Api's REST</h2>
            <img src={api} alt="apis"/>
        </div>
        <div className="card-der-li">
            <ul>
                <li>
                    Logica construida con Python 3 / Javascript / Java
                </li>
                <li>
                    Implementacion con frameworks como DJango REST, Node Express, Flask y Java SpringBoot
                </li>
                <li>
                    Integracion con Api's externas, como Telegram, Steam, Mercado Pago, etc
                </li>
                <li>
                    Proteccion mediante Tokens JWT
                </li>
                <li>
                    Bases de datos SQL y noSQL
                </li>
                <li>
                    Despliegue rapido gracias a Docker
                </li>
                <li>
                    Rapidas, seguras y eficientes
                </li>
                <div style={{marginTop:'10%'}}>
                    <a href="https://github.com/JuanDiDonato?tab=repositories" target="null">Ver codigo</a>
                </div>
                
            </ul>
        </div>
    </div>

  )
}

export default Apis