import * as React from "react"
import right_arrow from '../images/derecha.png'
import arrow from '../images/abajo.png'
import '../assets/presentation.css'
import moment from 'moment'
import 'moment/locale/es'


const box = {
    marginTop: '30vh',
}

const Presentation = () => {

    const [uno, setUno] = React.useState()
    const [dos, setDos] = React.useState()
    const [tres, setTres] = React.useState()
    const [cuatro, setCuatro] = React.useState()
    const [year, setYear] = React.useState()

    React.useEffect(() => {
        setUno(document.getElementById('uno'));
        setDos(document.getElementById('dos'));
        setTres(document.getElementById('tres'));
        setCuatro(document.getElementById('cuatro'));
        const birthday = moment('2001-03-19');
        const today = moment();
        setYear(today.diff(birthday, 'years'))
    }, []);


    // carrousel
    const next = () => {

        if (uno.classList[0] === 'active') {
            uno.classList.add('cover')
            uno.classList.remove('active')
            dos.classList.remove('cover')
            dos.classList.add('active')
        }
        else if (dos.classList[0] === 'active') {
            dos.classList.add('cover')
            dos.classList.remove('active')
            tres.classList.remove('cover')
            tres.classList.add('active')
        }
        else if (tres.classList[0] === 'active') {
            tres.classList.add('cover')
            tres.classList.remove('active')
            cuatro.classList.remove('cover')
            cuatro.classList.add('active')
        }
        else if (cuatro.classList[0] === 'active') {
            cuatro.classList.add('cover')
            cuatro.classList.remove('active')
            uno.classList.remove('cover')
            uno.classList.add('active')
        }

    }
    return (
        <div style={box}>
            <div>
                <div id="uno" className="active">
                    <h1 >¿Quien soy? </h1>
                    <h1>¡Conoceme! </h1>
                    <div>
                        <button onClick={() => next()}><img src={right_arrow} alt="arrow" /></button>
                    </div>
                </div>
                <div id="dos" className="active cover">
                    <h2>
                        Me llamo Juan, actualmente tengo {year} años y soy programador.
                        Vivo y estudio en la ciudad de Mar del Plata, Buenos Aires, Argentina.
                    </h2>
                    <div>
                        <button onClick={() => next()}><img src={right_arrow} alt="arrow" /></button>
                    </div>
                </div>
                <div id="tres" className="cover">
                    <h2>
                        Me recibí de Técnico Maestro Mayor de Obras en la escuela Técnica N°3 de Mar del Plata
                        y actualmente me desempeño como desarrollador backend con Python, Java, junto con Spring.
                    </h2>
                    <div>
                        <button onClick={() => next()}><img src={right_arrow} alt="arrow" /></button>
                    </div>
                </div>
                <div id="cuatro" className="cover">
                    <h2>
                        Mi meta actual es trabajar para poder seguir capacitandome y llevar a la practica todas mis capacidades, y
                        continuar estudiando una carrera relacionada con la programacion.
                        
                    </h2>
                    <div>
                        <button onClick={() => window.scrollBy({ 'top': window.screen.height, 'behavior': 'smooth' })}>
                            <img src={arrow} alt="arrow" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Presentation