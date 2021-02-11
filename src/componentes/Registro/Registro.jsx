import './Registro.css'
import {useRef} from 'react'


const Registro = () => {

    const uIngresado = useRef(null)
    const contIngresada = useRef(null)
    const altIngresada = useRef(null)

    const manejoRegistro = (e) => {
        e.preventDefault();
        let usu = uIngresado.current.value
        let contra = contIngresada.current.value
        let altura = altIngresada.current.value

//----------------------------------------------------------
        let raw = JSON.stringify({
            "username": usu, 
            "password":  contra, 
            "height": altura
        });

        let requestOptions = {
            method: 'POST',
            body: raw,
            redirect: 'follow'
        };

        fetch("https://trainning-rest-api.herokuapp.com/v1/users/register", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

//------------------------------------------------------
    
}


    return (
        <div>
            <h1 className="registro-title">Registro</h1>

            <div className="form-container">
                <form onSubmit={manejoRegistro} className="registro-form">
                    <input type="text" className="registro-input" ref={uIngresado} placeholder="Usuario" required />
                    <input type="text" className="registro-input" ref={contIngresada} placeholder="Contraseña" required />
                    <input type="number" className="registro-input" ref={altIngresada} placeholder="Altura" />
                    <input type="submit" className="btn-registro-login" value="registrarme" required />
                </form>
            </div>
        </div>
    )
}

export default Registro
