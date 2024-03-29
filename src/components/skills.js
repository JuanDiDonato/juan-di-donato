import * as React from "react";

// logos
import flask from '../images/flask.png';
import python from '../images/python.png';
import js from '../images/javascript.png';
import react from '../images/react.png';
import sql from '../images/sql.png';
import git from '../images/git.png';
import bs from '../images/bs.png';
import tux from '../images/tux.png';
import node from '../images/node.png';
import django from '../images/django.png';
import sequelize from '../images/sequelize.png';
import docker from '../images/docker.png';
import mongodb from '../images/mongodb.png';
import java from '../images/java.png';
import spring from '../images/spring.png';
import aws from '../images/aws.png';


// styles
import '../assets/skills.css'

const Skills = () => {
    return (
        <div className="sk-box">
            <div style={{ textAlign: 'center' }}>
                <h2>
                    Lenguajes y frameworks
                </h2>
            </div>
            {/* UNO */}
            <div className="sk-grid" id="uno">
                <div id="js">
                    <div>
                        <img src={js} alt="JavaScript" />
                    </div>
                    <div>
                        <h3>
                            Es el tercer lenguaje que aprendí. Lo primero que hice fueron
                            funciones simples (con fines estéticos y funcionales).
                            Luego, lo utilice en el trabajo de backend, con Node js.
                        </h3>
                    </div>
                </div>

                <div id="py">
                    <div>
                        <img src={python} alt="python" />
                    </div>
                    <div>
                        <h3>
                            Me siento cómodo utilizando este lenguaje,
                            se me hizo fácil de aprender y lo utilice para varios proyectos.
                        </h3>
                    </div>
                </div>

                <div id="rc">
                    <div>
                        <img src={react} alt="react" />
                    </div>
                    <div>
                        <h3>
                            Lo uso actualmente para crear paginas y aplicaciones web.
                            Lo elegí luego de probar otros frameworks como Svelte y Vue Js.
                            Constantemente estoy aprendiendo acerca de su uso.
                        </h3>
                    </div>
                </div>

                <div id="dj">
                    <div>
                        <img src={django} alt="django" />
                    </div>
                    <div>
                        <h3>
                            No me agradaba del todo, lo comencé a estudiar por lo bien que se
                            habla del framework. Me resulto muy interesante, con todo lo que
                            trae pre instalado te ahorras mucho tiempo.
                        </h3>
                    </div>
                </div>

                <div id="nd">
                    <div>
                        <img src={node} alt="node" />
                    </div>
                    <div>
                        <h3>
                            Node js lo utilizo hace tiempo, para crear y utilizar API's,
                            y para el desarrollo backend en aplicaciones web.
                            Utilizo el framework de Express.
                        </h3>
                    </div>
                </div>

                <div id="sq">
                    <div>
                        <img src={sequelize} alt="sequelize" />
                    </div>
                    <div>
                        <h3>
                            Lo implemente en un ecommerce, es practico y versátil.
                            Con el, mi código quedo mas estructurado, y mejor organizado,
                            especialmente con las comprobaciones y los esquemas.
                        </h3>
                    </div>
                </div>

                <div id="msql">
                    <div>
                        <img src={sql} alt="mysql" />
                    </div>
                    <div >
                        <h3>
                            Utilizo frecuentemente bases de datos SQL.
                            Manejo tanto MySQL como PostgreSQL, y complementos para la gestion 
                            de las bases, como Liquibase.
                        </h3>
                    </div>
                </div>

                <div id="mongodb">
                    <div>
                        <img src={mongodb} alt="mongodb" />
                    </div>
                    <div >
                        <h3>
                            Para algunos proyectos mas flexibles, donde la velocidad era un objetivo,
                            me resulto sumamente útil, sencilla y rápida,
                        </h3>
                    </div>
                </div>

                <div id="dck">
                    <div >
                        <img src={docker} alt="docker" />
                    </div>
                    <div >
                        <h3>
                            Lo implemente cuando inicie a desplegar mis apps en heroku.
                            Me sorprendió lo sencillo y rápido que fue subir un proyecto en
                            un contenedor de docker!.
                        </h3>
                    </div>
                </div>

                <div id="linux">
                    <div >
                        <img src={tux} alt="tux" />
                    </div>
                    <div>
                        <h3>
                            Amo Linux. Actualmente lo utilizo como sistema operativo principal.
                            Probe varias distribuciones, desde Ubuntu y sus derivados
                            (Xubuntu, Ubuntu Mate, Lubunut), Debian, Kali Linux, ElementarY OS,
                            y Manjaro MATE (Basada en ArchLinux)
                        </h3>
                    </div>
                </div>

                <div id="git">
                    <div >
                        <img src={git} alt="github" />
                    </div>
                    <div >
                        <h3>
                            Git y Github son muy importantes, desde que aprendí a utilizar git y su control de
                            versiones, y github para guardar mis proyectos, los uso siempre.
                            Tambien manejo herramientas potentes, como los Actions de Github para hacer deploys,
                            y validaciones para el codigo en los Pull Request, para evaluar la calidad del codigo.
                        </h3>
                    </div>
                </div>

                <div id="bts">
                    <div >
                        <img src={bs} alt="bootstrap" />
                    </div>
                    <div>
                        <h3>
                            Bootstrap lo utilice muchas veces.
                            Ahorra mucho tiempo y permite hacer aplicaciones web y paginas web
                            adaptables a varios tipos de dispositivos de forma sencilla.
                        </h3>
                    </div>
                </div>

                <div id="flk">
                    <div >
                        <img src={flask} alt="flask" />
                    </div>
                    <div>
                        <h3>
                            Utilice Flask para hacer apis REST con Python. Es muy sencillo
                            de usar, por lo que en un inicio lo trabaje bastante. Por su minimalismo,
                            lo utilizo ocasionalmente para desarrollar microservicios.
                        </h3>
                    </div>
                </div>

                <div id="java">
                    <div >
                        <img src={java} alt="java" />
                    </div>
                    <div>
                        <h3>
                            Desde que estoy estudiando simpre me dijieron que si puedo aprender java
                            puedo aprender cualquier cosa. Por curiosidad busque acerca del lenguaje,
                            y me encanto. Hoy en dia utilizo Java en mi vida diaria y me siento comodo con el.
                        
                        </h3>
                    </div>
                </div>

                <div id="spring">
                    <div >
                        <img src={spring} alt="spring" />
                    </div>
                    <div>
                        <h3>
                            Justo despues de las bases de Java comence con SpringBoot, lo utilizo ampliamente para crear Apis, 
                            pero tambien desarrolle modulos independientes, como modulos de seguridad para exportar a varios proyectos.
                            Dispongo de un buen manejo de beans, asi como otras tecnologias incluidas, como Jpa.
                        </h3>
                    </div>
                </div>

                <div id="aws">
                    <div >
                        <img src={aws} alt="aws" />
                    </div>
                    <div>
                        <h3>
                            Estoy ampliando mis conocimientos en los servicios de Amazon. Ya trabaje con funciones Lambdas de Aws hechas en python, 
                            con docker y Aws Sam. Tambien desarrolle Actios de Github para el deploy de las mismas.
                        </h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills