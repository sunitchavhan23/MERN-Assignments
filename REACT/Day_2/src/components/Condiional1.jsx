import React from 'react'

const Condiional1 = ({isLoggedIn}) => {
    
if (isLoggedIn) {
    return <h4>Login successful !</h4>
  } else {
    return <h4>Login Failed</h4>
  }
}

export default Condiional1
