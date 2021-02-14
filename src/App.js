import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Error from './componentes/general/Error/Error'
import Registro from './componentes/Registro/Registro'
import Login from './componentes/Login/Login'
import DashboardContainer from './componentes/Dashboard/DashboardContainer'
import Home from './componentes/general/Home/Home'
import Header from './componentes/general/Header/Header'
import Footer from "./componentes/general/Footer/Footer";
import reducer from './reducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(reducer,
  /* preloadedState, */ 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


function App() {
  
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/registro">
          <Registro />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <DashboardContainer />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
