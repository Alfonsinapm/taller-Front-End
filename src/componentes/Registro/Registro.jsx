import './Registro.css'

const Registro = () => {

    const manejoRegistro = (e) => {
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
            <h1 className="registro-title">Registro</h1>

            <div className="form-container">
                <form onSubmit={manejoRegistro} className="registro-form">
                    <input type="text" className="registro-input" placeholder="Usuario" />
                    <input type="text" className="registro-input" placeholder="Contraseña" />
                    <input type="number" className="registro-input" placeholder="Altura" />
                    <input type="submit" className="btn-registro-login" value="registrarme"/>
                </form>
            </div>
        </div>
    )
}

export default Registro
