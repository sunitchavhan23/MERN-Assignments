import React from 'react'

const Conditional2 = ({isLoggedIn}) => {
  return (
    <div>
      
      {
        isLoggedIn ? <h4>Welcome</h4> : <h4>Try Again</h4>
      }

      {
        isLoggedIn && <h6>Successful</h6>
      }
    </div>
   
  )
}

export default Conditional2
