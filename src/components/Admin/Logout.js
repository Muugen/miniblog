import React from 'react'

const Logout = (props) => {
    const cle = sessionStorage.getItem('token');
    if(cle){
        sessionStorage.removeItem('token');
        props.history.push('/login');
        window.location.reload();
    }
    return (
        <div>
            
        </div>
    )
}

export default Logout
