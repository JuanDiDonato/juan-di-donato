import * as React from "react"

// styles
import '../card-izq.css'
import '../coingecko/coingecko.css'

// images
import coingecko from '../../../images/coingecko.png'

// markup
const Coingecko = () => {
  return (
    <div className="card-izq coing">
        <div className="card-izq-img">
            <h2>Integracion con Coingecko</h2>
            <img src={coingecko} alt="coingecko"/>
        </div>
        <div className="card-izq-li">
            <ul>
                <li>
                    FrontEnd construido con React js
                </li>
                <li>
                    Responsive design
                </li>
                <li>
                    Backend construido con Node js
                </li>
                <li>
                    Base de datos MySQL
                </li>
                <li>
                    Sistema de logueo con JSon Web Token
                </li>
                <li>
                    Graficos de criptomonedas con Chart js
                </li>
                <li>
                    Sistema de drag and drop incluido
                </li>
                <li>
                    Obtiene toda la informacion relevante de las criptomoneda que desees
                </li>
                <li>
                    Sistema de busqueda y de "favoritos" para las criptos
                </li>
                <div style={{marginTop:'10%'}}>
                    <a href="https://github.com/JuanDiDonato/Api-Node-Coingekco" target="null">Ver codigo</a>
                </div>
                
            </ul>
            
        </div>

    </div>

  )
}

export default Coingecko