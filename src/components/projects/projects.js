import * as React from "react"

// projects
import Ecommerce from "./ecommerce/ecommerce"
import Telegram from "./telegram/telegram"
import Instagram from "./instagram/instagram"
import Apis from "./apis/apis"
import Coingecko from "./coingecko/coingecko"

const box = {
    marginTop: '8vh',
    marginBottom: '12vh',
    width: '100%',
    textAlign: 'center'
}

const title = {
  fontFamily: 'Raleway'
}



// markup
const Projects = () => {
  return (
    <div style={box}>
        <div style={{marginBottom: '5%'}}>
            <h2 style={title}>
                Algunos proyectos realizados
            </h2>
        </div>
        <div>
          <Ecommerce/>
          <Telegram/>
          <Instagram/>
          <Apis/>
          <Coingecko/>
        </div>

    </div>

  )
}

export default Projects