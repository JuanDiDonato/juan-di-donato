import * as React from "react"

const grid = {
    display: 'grid',
    gridTemplateColumns: '33% 33% 33%',
    position: 'relative',
    paddingTop: '30px',
    paddingBottom: '30px',
    backgroundColor: ' #9898983d'
}

const grid2 = {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    position: 'relative',
    paddingTop: '30px',
    paddingBottom: '50px',
    //backgroundColor: ' #9898983d'
    border: '5px solid #9898983d',
}

const box = {
    position: 'relative',
    justifyContent: 'center',
    alignItems:'center',
    marginBottom: '10vh'
}
const text = {
    paddingRight: '5%',
    paddingLeft: '5%',
    paddingTop: '4%',
}
const title = {
    fontFamily: 'Raleway'
}



const Aptitudes = () => {
    // responsive verification
    if(window.screen.width <= 500){
        grid['gridTemplateColumns'] = '100%'
        grid2['gridTemplateColumns'] = '100%'
    }
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
            <div style={grid2}>
                <div style={text}>
                    <h2 style={title}>
                        Iniciativa
                    </h2>
                    <h3 style={text}>
                    Tengo muchas ganas de trabajar y seguir aprendiendo. 
                    Constantemente pienso en posibles proyectos que puedan solucionar 
                    los problemas cotidianos que nos encontramos en la web, 
                    y en nuestras aplicaciones diarias!
                    Tambien ofrezco mi ayuda a los demas si lo necesitan.
                    </h3>
                </div>
                <div style={text}>
                    <h2 style={title}>
                        Motivacion
                    </h2>
                    <h3 style={text}>
                    ¡Estoy motivado!. La programacion me encanta, hay mucho por hacer
                     y por aprender a hacer. Quiero expandir mis horizontes, 
                     para hacer proyectos mas grandes y mejores, y contribuir con el desarrollo
                     de nuevas aplicaciones y tegnologias.
                    </h3>
                </div>
            </div>
        </div>

    )
}

export default Aptitudes