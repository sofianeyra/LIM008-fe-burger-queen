import React from 'react';
const SignUp = () => {
    return(
        <div>
            <div className= "card">
            <div className= "card login">
                <h1><img src= "https://i.ibb.co/K6MSnC6/generatedtext.png" alt= "logotype"></img></h1>
                <input type= "text" placeholder= "Nombre de usuario o correo"></input>
                <input type= "text" placeholder= "Ingresa tu contraseña"></input>
                <button type= "button" className= "btn-primary">Iniciar sesión</button>
            </div>
            <div className= "card signup">
                <input type= "text" placeholder= "Ingresa tu correo electrónico"></input>
                <input type= "text" placeholder= "Ingresa una contraseña"></input>
                <input type="text" placeholder= "Confirma contraseña"></input>
                <button type= "button" className= "btn-primary">Registrar</button>
            </div>
            </div>
        </div>
    )
}

export default SignUp;