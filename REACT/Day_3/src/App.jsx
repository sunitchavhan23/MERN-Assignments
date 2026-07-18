import React from 'react'

import Conditional1 from './components/Conditional1'
import Props from './components/Props'
import Conditional2 from './components/Conditional2'
import UseState1 from './components/UseState1'
import UseState2 from './components/UseState2'
import ListRendering from './components/ListRendering'
import Conditional3 from './components/Conditional3'

const App = () => {
  return (
    <>
      <Props name='Sunit' age={20}></Props>
      <Conditional1 isLoggedIn="true"></Conditional1>
      <Conditional2 isLoggedIn="true"></Conditional2>
      <Conditional3 isLoggedIn="Loading"></Conditional3>
      <UseState1></UseState1>
      <UseState2></UseState2>
      <ListRendering></ListRendering>
    </>
  )
}

export default App
