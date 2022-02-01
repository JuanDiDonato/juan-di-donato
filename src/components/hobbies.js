import * as React from "react"

// logos
import hobbies from '../images/hobbies.png'

// styles
import '../assets/hobbies.css'



const Hobbies = () => {
    return (
        <div id='box'>
            <div >
                <img  src={hobbies} alt="hobbies"/>
            </div>
            <div>
                <h2>
                    Hobbies!
                </h2>
                <h3>
                En mis tiempos libres me gusta hacer actividad fisica, caminar y andar en bici. 
                Soy aficionado al ciclismo, me gusta hacer viajes largos, y arreglar mi propia bici 
                cuando es necesario. Me gusta leer, y de vez en cuando juego con amigos en linea para pasar el rato
                </h3>
            </div>
           
        </div>
    )
}

export default Hobbies