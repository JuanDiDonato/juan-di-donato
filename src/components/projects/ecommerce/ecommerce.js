import * as React from "react"

// styles
import '../card-izq.css'

// images
import ecommerce from '../../../images/ecommerce.png'

// markup
const Ecommerce = () => {
  return (
    <div className="card-izq">
        <div className="card-izq-img">
            <h2>Ecommerce</h2>
            <img src={ecommerce} alt="ecommerce"/>
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
                    Backend construido con Node js y Sequelize / DJango REST
                </li>
                <li>
                    Base de datos MySQL
                </li>
                <li>
                    Sistema de logueo con JSon Web Token
                </li>
                <li>
                    Procesado de pagos con Mercado Pago
                </li>
                <li>
                    Gestion y planificacion de ofertas y productos
                </li>
                <li>
                    Incorpora estadisticas de ventas y ganancias, con graficos de Chart js
                </li>
                <li>
                    Historial y estado de las compras
                </li>
                <div style={{marginTop:'10%'}}>
                    <a href="https://github.com/JuanDiDonato/E-Commerce" target="null">Ver codigo</a>
                </div>
                
            </ul>
            
        </div>

    </div>

  )
}

export default Ecommerce