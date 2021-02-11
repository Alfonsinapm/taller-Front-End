import './Login.css'

import React from 'react'

const Login = () => {

    const manejoLogin = (e) => {
        e.preventDefault();
        //fetch("https://randomuser.me/api/?results=20")
        //     .then(respCompleta => respCompleta.json())
        //     .then(datos => {
        //         console.log(datos)
        //         let mayores40=datos.results.filter((personas)=>personas.dob.age>40)
        //         console.log(mayores40)
        //     })
        //     .catch(e => console.log(e));
    }

    return (
        <div>
            <h1 className="login-title">Login</h1>
            <div className="form-container">
                <form onSubmit={manejoLogin} className="registro-form">
                    <input type="text" className="registro-input" placeholder="Usuario" />
                    <input type="text" className="registro-input" placeholder="Contraseña" />
                    <input type="submit" className="btn-registro-login" value="login"/>
                </form>
            </div>
        </div>
    )
}

export default Login
