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
                <img src={obj} alt="objectives"/>
            </div>
            <div>
                <h2 style={title}>
                    Metas
                </h2>
                <h3 style={text}>
                A corto plazo quiero continuar desarrollando mis capacidades y conceguir un trabajo 
                para profesionalizarme mas. Python y JavaScript son lenguajes que me gustan, asi que 
                seguir progresando con Node js o Django REST tambien es un objtivo. 
                A futuro me gustaria adentrarme en otras areas, como la Cibersegurad, Testing y 
                la Inteligencia Artifial. Me intereza conseguir un empleo para continuar 
                desarrollando mis capacidades, e ingresar a Ingenieria Informatica.
                </h3>
            </div>
        </div>
    )
}

export default Objectives