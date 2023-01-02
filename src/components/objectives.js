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
                    A corto plazo quiero continuar desarrollando mis capacidades y profesionalizarme.
                    Python, JavaScript Y Java son lenguajes que me gustan, así que
                    seguir progresando con Node js, Django REST o SpringBoot también es un objetivo, asi como profundizar 
                    en otras tecnologias, como Amazon Web Services, Github Actions, etc.
                    Trabajo mucho con la Programacion Orientada a Objetos, y tengo muy en claro los conceptos de SOLID, y trabajo para aplicarlos en todos mis proyectos.
                    A futuro me gustaría adentrarme en otras áreas, como Ciberseguridad, Testing e
                    Inteligencia Artificial y Robotica.
                    Tambien quiero seguir estudiando, y no descarto a futuro ingresar a la Universidad, en carreras como
                    Ing. en Sistemas, Ing en Informatica o Ing. en Computacion (dentro del campo de la informatica).
                </h3>
            </div>
        </div>
    )
}

export default Objectives