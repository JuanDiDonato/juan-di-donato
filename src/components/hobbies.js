import * as React from "react"

// logos
import hobbies from '../images/hobbies.png'

// styles
const box = {
    position: 'relative',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9898983d',
    marginTop: '40vh',
    padding: '7%'
}

const title = {
    fontFamily: 'Raleway'
}

const text = {
    paddingRight: '5%',
    paddingLeft: '5%',
    paddingTop: '2%'
}

const Hobbies = () => {
    return (
        <div style={box}>
            <div >
                <img  src={hobbies} alt="hobbies"/>
            </div>
            <div >
                <h2 style={title}>
                    Hobbies
                </h2>
                <h3 style={text}>
                En mis tiempos libres me gusta hacer actividad fisica, caminar y andar en bici. 
                Soy aficionado al ciclismo, me gusta hacer viajes largos, y arreglar mi propia bici 
                cuando es necesario. Me gusta leer, y de vez en cuando juego con amigos en linea para pasar el rato
                </h3>
            </div>
           
        </div>
    )
}

export default Hobbies