import React from 'react'
import FetchMultiPost from './components/FetchMultiPost'
import FetchSinglePost from './components/FetchSinglePost'
import UseReducer from './components/UseReducer'

const App = () => {
  return (
    <>
     <FetchMultiPost></FetchMultiPost> <br />
     <FetchSinglePost></FetchSinglePost><br />
     <UseReducer></UseReducer>
    </>
  )
}

export default App
