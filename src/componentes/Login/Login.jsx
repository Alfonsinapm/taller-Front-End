import './Login.css'
import { useRef, useState } from 'react'
import React from 'react'
import { useHistory } from 'react-router-dom';


const Login = () => {

    const history = useHistory();
    const [msjError, setMsjError] = useState(false)
    const uLogin = useRef(null)
    const contLogin = useRef(null)

    const performLogin = (usuI, contraI) => {
        var myHeaders = new Headers();
        var raw = JSON.stringify({
            "username": usuI,
            "password": contraI

        });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("https://trainning-rest-api.herokuapp.com/v1/users/login", requestOptions)
            .then(response => response.json())
            .then((result) => {
                console.log(result)
                return true
            }
            )
            .catch((error) => {
                console.log('error', error)
                return false
            });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        let usu = uLogin.current.value;
        let contra = contLogin.current.value;
        if (performLogin(usu, contra)) {
            
            history.push('/dashboard');
        } else {
            setMsjError(true)
        }
    }

    return (
        <div>
            <h1 className="login-title">Login</h1>
            <div className="form-container">
                <form onSubmit={handleLogin} className="registro-form">
                    <input type="text" className="registro-input" ref={uLogin} placeholder="Usuario" required />
                    <input type="text" className="registro-input" ref={contLogin} placeholder="Contraseña" required />
                    <input type="submit" className="btn-registro-login" value="login" />
                    
                    {msjError ? <p className="msjError">Hubo un problema al iniciar sesion, intente mas tarde</p> : null}

                </form>
            </div>
        </div>
    )
}

export default Login
