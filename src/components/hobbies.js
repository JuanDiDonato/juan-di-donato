import * as React from "react"
import "../assets/objetives.css"
// logos
import hobbies from '../images/hobbies.png'

// styles
const box = {
    marginTop: '40vh',
}


const Hobbies = () => {
    return (
        <div className="box" style={box}>
            <div className="images" >
                <img  src={hobbies} alt="hobbies"/>
            </div>
            <div >
                <h2 className="title">
                    Hobbies
                </h2>
                <h3 className="text">
                En mis tiempos libres me gusta hacer actividad fisica, caminar y andar en bici. 
                Soy aficionado al ciclismo, me gusta hacer viajes largos, y arreglar mi propia bici 
                cuando es necesario. Me gusta leer, y de vez en cuando juego con amigos en linea para pasar el rato.
                </h3>
            </div>
        </div>
    )
}

export default Hobbies