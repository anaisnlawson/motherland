import React from 'react'

import { Article, Brand, Contact, Cta, Events, Feature, Navbar, Services} from './components'
import { Blog, Features, Footer, Header, Possibility, WhatMotherland } from './containers'
import './App.css'
const App = () => {
  return (
    <div className='App'>
        <div>
            <Navbar />
            <Header />
        </div>
        <div>
            <WhatMotherland />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    </div>
  )
}

export default App