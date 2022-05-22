import * as React from "react"
import "../assets/objetives.css"

// logos
import obj from '../images/objetivos.png'


const Objectives = () => {
    return (
        <div className="box">
            <div className="images">
                <img src={obj} alt="objectives" />
            </div>
            <div>
                <h2 className="title">
                    Metas
                </h2>
                <h3 className="text">
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