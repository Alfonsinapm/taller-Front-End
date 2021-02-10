import './Home.css'
import {useHistory} from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    
    
    const handlePushRegistro =()=>{
        history.push('/registro');
    }
    const handlePushLogin =()=>{
        history.push('/login');
    }
    
    return (
        <>
        <h1 className="Home-title">Inicio</h1>

        <input type="button" onClick={handlePushRegistro} value="registro"/>
        <input type="button" onClick={handlePushLogin} value="login"/>
        </>
    )
}

export default Home
