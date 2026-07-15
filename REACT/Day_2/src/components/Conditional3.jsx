import React from 'react'

const Conditional3 = ({ isLoggedIn }) => {
    switch (isLoggedIn) {
        case 'Loading':
            return <h5>Loading</h5>
            break;
        case 'Success':
            return <h5> Login Succesful</h5>
            break;
        case 'Error':
            return <h5>Login Failed</h5>
            break;
        default:
            return <h5>Unknown</h5>
    }
}

export default Conditional3
