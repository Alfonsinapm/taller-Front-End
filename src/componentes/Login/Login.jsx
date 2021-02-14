import './Login.css'
import { useRef, useState } from 'react'
import React from 'react'
import { useHistory } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'

const Login = () => {
    
    const tokenR = useSelector(state=>state.tRegistro);
    const history = useHistory();
    const [msjErrorLog, setMsjErrorLog] = useState(false)
    let dispatch = useDispatch()
    
    const uLogin = useRef(null)
    const contLogin = useRef(null)
    
    const performLogin = (usuI, contraI) => {
        var myHeaders = new Headers(tokenR);
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
                dispatch = ({type: 'agregar-tokenL', payload:result.token})
                return true
            }
            )
            .catch((error) => {
                console.log('error', error)
                return false
            });
    }

    const handleLogin = (e) => {
       /* e.preventDefault();*/
        let usu = uLogin.current.value;
        let contra = contLogin.current.value;
        if (performLogin(usu, contra)) {
            history.push('/dashboard');
        } else {
            setMsjErrorLog(true)
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
                </form>
                {msjErrorLog ? <p className="msjError">Hubo un problema al iniciar sesion, intente mas tarde</p> : null}
            </div>
        </div>
    )
}

export default Login
