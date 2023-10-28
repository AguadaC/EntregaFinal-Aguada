import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {

  const greeting = "Bienvenid@! Completemos tu turno de depilación..."

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={ greeting }/>
    </div>
  )
}

export default App
