import * as React from "react"

const grid = {
    display: 'grid',
    gridTemplateColumns: '33% 33% 33%',
    position: 'relative',
    paddingTop: '30px',
    paddingBottom: '30px',
    backgroundColor: ' #9898983d'
}

const box = {
    position: 'relative',
    justifyContent: 'center',
    alignItem:'center',
}
const text = {
    paddingRight: '5%',
    paddingLeft: '5%',
    paddingTop: '4%',
}
const title = {
    fontFamily: 'Raleway'
}

// responsive verification
if(window.screen.width <= 500){
    grid['gridTemplateColumns'] = '100%'
}

const Aptitudes = () => {
    return (
        <div style={box}>
            <div style={grid}>
                <div style={text}>
                    <h2 style={title}>
                        Gestion de tiempos
                    </h2>
                    <h3 style={text}>
                    Soy muy organizado, a la hora de iniciar un proyecto primero analizo que hay que
                     hacer, realizo un diagrama de flujo para ver la estructura del proyecto, 
                     y planteo la forma en que voy a realizarlo. Considero la organizacion como un 
                     pilar fundamental.
                    </h3>
                </div>
                <div style={text}>
                    <h2 style={title}>
                        Proactivo
                    </h2>
                    <h3 style={text}>
                    Busco soluciones y alternativas a las situaciones que se presenten, 
                    siempre buscando mejorar y progresar en favor propia, y del equipo de trabajo.
                    </h3>
                </div>
                <div style={text}>
                    <h2 style={title}>
                        Trabajo en Equipo
                    </h2>
                    <h3 style={text}>
                    Me gusta trabajar en equipo con personas apasionadas y comprometidas 
                    con la programacion, poniendo en practica metodologías agiles como XP y SCRUM. Cuando tengo una idea, me gusta compartirla com mi grupo 
                    de trabajo y debatir sobre ella!
                    </h3>
                </div>
            </div> 
        </div>

    )
}

export default Aptitudes