import * as React from "react"

// styles
import '../card-izq.css'
import '../instagram/instagram.css'


// images
import instagram from '../../../images/instagram.png'

// markup
const Instagram = () => {
  return (
    <div className="card-izq instagram">
        <div className="card-izq-img">
            <h2>Lo de Pochi Sublimaciones</h2>
            <img src={instagram} alt="instagram"/>
        </div>
        <div className="card-izq-li">
            <ul>
                <li>
                    FrontEnd con React js
                </li>
                <li>
                    Estilos con css propio y Bootstrap
                </li>
                <li>
                    Responsive design
                </li>
                <li>
                    Utiliza la API de Instagram para obtener las publicaciones y la descripcion
                </li>
                <li>
                    Trabajo en colaboracion con <a href="https://franmedi99.github.io/fmedina/" target="null">Francisco J Medina</a>
                </li>
                <div style={{marginTop:'10%'}}>
                    <a href="https://github.com/franmedi99/lodepochi-sublimaciones" target="null">Ver codigo</a>
                </div>
                
            </ul>
        </div>
    </div>

  )
}

export default Instagram