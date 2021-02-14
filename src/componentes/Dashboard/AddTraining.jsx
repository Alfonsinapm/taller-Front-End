import './DashboardContainer.css'
import {useSelector} from 'react-redux'
const AddTraining = () => {
    const canti = useSelector(state=>state.cantidad);
    return (
        
            <div className="agregar">
                <label className="lblAgregar" htmlFor="txtAgregar">Agregar:</label>
                <input type="text" name="txtAgregar" id="txtAgregar" className="minutos" placeholder="Minutos" />
                <input type="button" value="Agregar" className="btnAgregar" />
            <p>{canti}</p>
            </div>
    )
}

export default AddTraining
