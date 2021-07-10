import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashbaord" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
