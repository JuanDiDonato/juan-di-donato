import * as React from "react"

// logos
import obj from '../images/objetivos.png'

const box = {
    position: 'relative',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '7%'
}
const title = {
    fontFamily: 'Raleway'
}
const images = {
    marginTop: '10vh',
}
const text = {
    paddingRight: '5%',
    paddingLeft: '5%',
    paddingTop: '2%',
}

const Objectives = () => {
    return (
        <div style={box}>
            <div style={images}>
                <img src={obj} alt="objectives" />
            </div>
            <div>
                <h2 style={title}>
                    Metas
                </h2>
                <h3 style={text}>
                    A corto plazo quiero continuar desarrollando mis capacidades y trabajar
                    para profesionalizarme mas. Python, JavaScript Y Java son lenguajes que me gustan, así que
                    seguir progresando con Node js, Django REST o SpringBoot también es un objetivo.
                    A futuro me gustaría adentrarme en otras áreas, como Ciberseguridad, Testing e
                    Inteligencia Artificial y Robotica.
                    Tambien quiero seguir estudiando, y no descarto a futuro ingresar a la Universidad, en carreras como
                    Ing. en Sistemas, Ing en Informatica o Ing. en Computacion (dentro del campo de la informatica) y otras
                    por fuera como Filosofia o Diseño Grafico.
                </h3>
            </div>
        </div>
    )
}

export default Objectives