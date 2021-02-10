import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <p>holaaaa</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
