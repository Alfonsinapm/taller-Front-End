import React from 'react'

const AddTraining = () => {
    return (
        <div className="contenido">
            <div className="agregar">
                <label for="txtAgregar">Agregar:</label>
                <input type="text" name="txtAgregar" id="txtAgregar" />
                <input type="number" name="peso" id="nPeso" />
                <input type="button" value="Agregar" />
            </div>
            <div className="tarjetas">
                <div className="tarjeta">
                    <input type="checkbox" id="list01" class="checkbox" />
                    <label className="checkLabel" for="list01">Velocidad</label>
                </div>

                <div className="tarjeta">
                    <input type="checkbox" id="list02" class="checkbox" />
                    <label className="checkLabel" for="list02">Resistencia</label>
                </div>

                <div className="tarjeta">
                    <input type="checkbox" id="list02" class="checkbox" />
                    <label className="checkLabel" for="list02">Potencia</label>
                </div>
            </div>
        </div>
    )
}

export default AddTraining
