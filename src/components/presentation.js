import * as React from "react"

// styles
import '../assets/presentation.css'

const box = {
    marginTop: '15vh'
}


const Presentation = () => {

    const [uno,setUno] = React.useState()
    const [dos,setDos] = React.useState()
    const [tres,setTres] = React.useState()
    const [cuatro,setCuatro] = React.useState()
    const [year,setYear] = React.useState()

    React.useEffect(() => {
        setUno(document.getElementById('uno'))
        setDos(document.getElementById('dos'))
        setTres(document.getElementById('tres'))
        setCuatro(document.getElementById('cuatro'))
        const getTime = () => {
            let now = new Date()
            return now.getFullYear()
        }
        setYear(getTime())

    }, []);
    

    // carrousel
    const next = () => {

    if(uno.classList[0] === 'active'){
        uno.classList.add('cover')
        uno.classList.remove('active')
        dos.classList.remove('cover')
        dos.classList.add('active')
    }
    else if(dos.classList[0] === 'active'){
        dos.classList.add('cover')
        dos.classList.remove('active')
        tres.classList.remove('cover')
        tres.classList.add('active')
    }
    else if(tres.classList[0] === 'active'){
        tres.classList.add('cover')
        tres.classList.remove('active')
        cuatro.classList.remove('cover')
        cuatro.classList.add('active')
    }
    else if(cuatro.classList[0] === 'active'){
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
                        <h1>¿Quien soy? </h1>
                        <div>
                            <button onClick={() => next()}>siguiente</button>
                        </div>
                    </div>
                    <div id="dos" className="active cover">
                        <h2>
                            Me llamo Juan, actualmente tengo {year - 2001} años y soy programador.
                            Vivo y estudio en la ciudad de Mar del Plata, Buenos Aires, Argentina
                        </h2>
                        <div>
                            <button onClick={() => next()}>siguiente</button>
                        </div>
                    </div>
                    <div id="tres" className="cover">
                        <h2>Me recibi de Tecnico Maestro Mayor de Obras en la escuela Tecnica N°3 de Mar del Plata
                            y actualmente estoy estudiando Ingenieria Informatica en la Univercidad Nacional de Mar del Plata.
                        </h2>
                        <div>
                            <button onClick={() => next()}>siguiente</button>
                        </div>
                    </div>
                    <div id="cuatro" className="cover">
                        <h2>Hago principalmente programacion Backend, pero se hacer Frontend, y voy camino a convertirme en 
                            FullStack Developer
                        </h2>
                        <div>
                            <button onClick={() => next()}>volver</button>
                            <button onClick={() => window.scroll(0,window.screen.height * 1.85)}>continuar</button>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default Presentation