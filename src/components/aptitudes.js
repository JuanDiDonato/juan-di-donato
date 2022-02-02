import * as React from "react"

// styles
import '../assets/aptitudes.css'

const Aptitudes = () => {
    return (
        <div className="ap-box">
            <div className="ap-grid">
                <div>
                    <h2>
                        Gestion de tiempos
                    </h2>
                    <h3>
                    Soy muy organizado, a la hora de iniciar un proyecto primero analizo que hay que
                     hacer, realizo un diagrama de flujo para ver la estructura del proyecto, 
                     y planteo la forma en que voy a realizarlo. Considero la organizacion como un 
                     pilar fundamental.
                    </h3>
                </div>
                <div>
                    <h2>
                        Proactivo
                    </h2>
                    <h3>
                    Busco soluciones y alternativas a las situaciones que se presenten, 
                    siempre buscando mejorar y progresar en favor propia, y del equipo de trabajo.
                    </h3>
                </div>
                <div>
                    <h2>
                        Trabajo en Equipo
                    </h2>
                    <h3>
                    Me gusta trabajar en equipo con personas apasionadas y comprometidas 
                    con la programacion, poniendo en practica metodologías agiles como XP y SCRUM. Cuando tengo una idea, me gusta compartirla com mi grupo 
                    de trabajo y debatir sobre ella!
                    </h3>
                </div>
            </div> 
            <div className="ap-grid2">
                <div>
                    <h2>
                        Iniciativa
                    </h2>
                    <h3>
                    Tengo muchas ganas de trabajar y seguir aprendiendo. 
                    Constantemente pienso en posibles proyectos que puedan solucionar 
                    los problemas cotidianos que nos encontramos en la web, 
                    y en nuestras aplicaciones diarias!
                    Tambien ofrezco mi ayuda a los demas si lo necesitan.
                    </h3>
                </div>
                <div>
                    <h2 >
                        Motivacion
                    </h2>
                    <h3>
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