import * as React from "react"

// logos
import flask from '../images/flask.png'
import python from '../images/python.png'
import js from '../images/javascript.png'
import react from '../images/react.png'
import mysql from '../images/mysql.png'
import git from '../images/git.png'
import bs from '../images/bs.png'
import tux from '../images/tux.png'
import node from '../images/node.png'
import django from '../images/django.png'
import sequelize from '../images/sequelize.png'
import docker from '../images/docker.png'

// styles
import '../assets/skills.css'

const box = {
    position: 'relative',
    justifyContent: 'center',
    alignItem:'center',
}
const grid = {
    display: 'grid',
    gridTemplateColumns: '33% 33% 33%',
    position: 'relative',
    margin: '5%'
}
const image = {
    marginLeft: '5%'
}
const text = {
    paddingRight: '5%',
    paddingLeft: '5%',
    paddingTop: '4%',
}
const title = {
    fontFamily: 'Raleway'
}



const Skills = () => {
    return (
        <div style={box}>
            <div style={{textAlign: 'center'}}>
                <h2 style={title}>
                    Lenguajes y frameworks
                </h2>
            </div>
            {/* UNO */}
            <div style={grid} id="uno">
                <div id="js">
                    <div style={image} >
                        <img src={js} alt="JavaScript"/>
                    </div>
                    <div style={text}>
                        <h3>
                        Es el tercer lenguaje que aprendi. Lo primero que hice fueron
                         funciones simples (con fines esteticos y funcionales). 
                         Luego, lo utilice en el trabajo de backend, con Node js.
                        </h3>
                    </div>
                </div>

                <div id="py">
                    <div style={image} >
                        <img src={python} alt="python"/>
                    </div>
                    <div style={text}>
                        <h3>
                            Me siento comodo utilizando este lenguaje,
                            se me hizo facil de aprender y lo utilice para varios proyectos.
                        </h3>
                    </div>
                </div>

                <div id="rc">
                    <div style={image} >
                        <img src={react} alt="react"/>
                    </div>
                    <div style={text}>
                        <h3>
                        Lo uso actualmente para crear paginas y aplicaciones web.
                         Lo elegi luego de probar otros frameworks como Svelte y Vue Js. 
                         Constantemente estoy aprendiendo acerca de su uso.
                        </h3>
                    </div>
                </div>
            </div>
            
            {/* DOS */}
            <div style={grid} id="dos">
                <div id="dj">
                    <div style={image} >
                        <img src={django} alt="django"/>
                    </div>
                    <div style={text}>
                        <h3>
                        No me agradaba del todo, lo comence a estudiar por lo bien que se
                        habla del framework. Me resulto muy interezante, con todo lo que
                        trae pre-instalado te ahorras mucho tiempo.
                        </h3>
                    </div>
                </div>

                <div id="nd">
                    <div style={image} >
                        <img src={node} alt="node"/>
                    </div>
                    <div style={text}>
                        <h3>
                        Node js lo utilizo hace tiempo, para crear y utilizar API's, 
                        y para el desarrollo backend en aplicaciones web.
                         Utilizo el framework de Express.
                        </h3>
                    </div>
                </div>

                <div id="sq">
                    <div style={image} >
                        <img src={sequelize} alt="sequelize"/>
                    </div>
                    <div style={text}>
                        <h3>
                            Lo implemente en un ecommerce, es practico y verstail. 
                            Con el, mi codigo quedo mas estructurado, y mejor organizado, 
                            especialmente con las comprobaciones y los esquemas.
                        </h3>
                    </div>
                </div>
            </div>

            {/* TRES */}
            <div style={grid} id="tres">
                <div id="msql">
                    <div style={image} >
                        <img src={mysql} alt="mysql"/>
                    </div>
                    <div style={text}>
                        <h3>
                        Es la base de datos que suelo usar en mis proyectos. 
                        Llevo bastante tiempo utilizandola y tengo experiencia en ella.
                        </h3>
                    </div>
                </div>

                <div id="dck">
                    <div style={image} >
                        <img src={docker} alt="docker"/>
                    </div>
                    <div style={text}>
                        <h3>
                        Lo implemente cuando comence a desplegar mis apps en heroku.
                        Me sorprendio lo sencillo y rapido que fue subir un proyecto en 
                        un contenedor de docker!.
                        </h3>
                    </div>
                </div>

                <div id="linux">
                    <div style={image} >
                        <img src={tux} alt="tux"/>
                    </div>
                    <div style={text}>
                        <h3>
                        Amo Linux. Actualmente lo utilizo como sistema operativo principal. 
                        Probe varias distribuciones, desde Ubuntu y sus derivados 
                        (Xubuntu, Ubuntu Mate, Lubunut), Debian, Kali Linux, ElementarY OS,
                         y Manjaro MATE (Basada en ArchLinux)
                        </h3>
                    </div>
                </div>

            </div>

            {/* CUATRO */}
            <div style={grid} id="cuatro">
                <div id="git">
                    <div style={image} >
                        <img src={git} alt="github"/>
                    </div>
                    <div style={text}>
                        <h3>
                        Git y Github son muy importantes, desde que aprendi a utilizar git y su control de 
                        versiones, y github para guardar mis proyectos, los uso siempre
                        </h3>
                    </div>
                </div>

                <div id="bts">
                    <div style={image} >
                        <img src={bs} alt="bootstrap"/>
                    </div>
                    <div style={text}>
                        <h3>
                        Bootstrap lo utilice muchas veces. 
                        Ahorra mucho tiempo y permite hacer aplicaciones web y paginas web 
                        adaptables a varios tipos de dispositivos de forma sencilla.
                        </h3>
                    </div>
                </div>

                <div id="flk">
                    <div style={image} >
                        <img src={flask} alt="flask"/>
                    </div>
                    <div style={text}>
                        <h3>
                            Utilice Flask para hacer apis con Python. Es muy sencillo
                            gracias a su minimalismo.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills