import * as React from "react"

// components
import WelcomeMessage from "../components/welcome"
import Presentation from "../components/presentation"
import Hobbies from "../components/hobbies"
import Objectives from "../components/objectives"
import Aptitudes from "../components/aptitudes"
import Skills from "../components/skills"
import Projects from "../components/projects/projects"
import Footer from "../components/footer"

// styles
import '../assets/index.css'

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Juan Di Donato</title>
      {/* Home message */}
      <div id="welcome" className="wrapper">
        <WelcomeMessage/>
      </div>
      {/* Presentation*/}
      <div id="presentation" className="wrapper">
        <Presentation/>
      </div>
      {/* Hobbies */}
      <div id='hobbies' className="wrapper">
        <Hobbies/>
      </div>
      {/* Objectives */}
      <div id="obj" className="wrapper">
        <Objectives/>
      </div>
      {/* Aptitudes */}
      <div id="apt">
          <Aptitudes/>
      </div>
      {/* Skills */}
      <div id="skl">
        <Skills/>
      </div>
      {/* Projects */}
      <div id="prj">
        <Projects/>
      </div>
      {/* Footer */}
      <div id="ftr">
        <Footer/>
      </div>
      
    </main>
  )
}

export default IndexPage
