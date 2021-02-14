import './Registro.css'
import { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux'
const Registro = () => {

    const history = useHistory();
    const [msjErrorReg, setMsjErrorReg] = useState(false)
    let dispatch = useDispatch()
    const uIngresado = useRef(null)
    const contIngresada = useRef(null)
    const altIngresada = useRef(null)

    //onSubmit
    const manejoRegistro = (e) => {
        e.preventDefault();
        let usu = uIngresado.current.value
        let contra = contIngresada.current.value
        let altura = altIngresada.current.value
        if (performRegistro(usu, contra, altura)) {
            
            history.push('/login');
        } else {
            setMsjErrorReg(true)
        }
    }

    //metodo que hace el post
    //----------------------------------------------------------

    const performRegistro = (usuIng, contraIng, alturaIng) => {

        // let raw = JSON.stringify({
        //     "username": usuIng,
        //     "password": contraIng,
        //     "height": alturaIng
        // });

        let requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                "username": usuIng,
                "password": contraIng,
                "height": alturaIng
            }),
            redirect: 'follow'
        };

        fetch('https://trainning-rest-api.herokuapp.com/v1/users/register', requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
               dispatch = ({type: 'agregar-tokenR', payload:result.token})
                return true;
            })
            .catch(error => {
                console.log('error', error)
                return false;
            });

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
                {msjErrorReg ? <p className="msjError">No se pudo hacer el registro, intente nuevamente más tarde</p> : null}
            </div>
        </div>
    )
}

export default Registro
