import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Error from './componentes/general/Error/Error'
import Registro from './componentes/Registro/Registro'
import Login from './componentes/Login/Login'
import DashboardContainer from './componentes/Dashboard/DashboardContainer'
import Home from './componentes/general/Home/Home'
import Header from './componentes/general/Header/Header'
import Footer from "./componentes/general/Footer/Footer";

function App() {
  return (
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
  );
}

export default App;
