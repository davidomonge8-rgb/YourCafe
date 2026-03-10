import { useState } from 'react'
import './App.css'

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Legacy from './components/ourLegacy.jsx'
import Featured from './components/Featured.jsx'
import Test from './components/test.jsx'

const App = () => {
  return(
    <>
      <div className='grey-bg'>
        <Header/>
        <hr />
        <br />
        <Hero/>
        <br />
        <Legacy/>
        <br />
        <Featured/>

        <br />

        
      </div>

      

    </>
  )
}

export default App
