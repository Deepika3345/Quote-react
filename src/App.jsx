import React from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import { QuoteProvider } from './Context/QuoteContext'

const App = () => {
  return (
   <QuoteProvider>
   <Navbar/>
   <div className="container p-3">
    <Card/>
   </div>
   </QuoteProvider>
  )
}

export default App