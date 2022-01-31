import * as React from "react"

// components
import WelcomeMessage from "../components/welcome"
import Presentation from "../components/presentation"
import Hobbies from "../components/hobbies"
import Objectives from "../components/objectives"
import Aptitudes from "../components/aptitudes"
import Skills from "../components/skills"

// styles
import '../assets/index.css'

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Juan Di Donato</title>
      {/* Home message */}
      <div id="welcome">
        <WelcomeMessage/>
      </div>
      {/* Presentation*/}
      <div id="presentation">
        <Presentation/>
      </div>
      {/* Hobbies */}
      <div id='hobbies'>
        <Hobbies/>
      </div>
      {/* Objectives */}
      <div id="obj">
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
      
    </main>
  )
}

export default IndexPage
