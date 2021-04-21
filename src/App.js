import './App.css';
import Home from './components/home/Home';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './context/PrivateRouth';




function App() {

  return (
    <div className="App">
      <Router>
        <Switch>

          <PrivateRoute exact path='/' component={Home} />
          <Route path="/login" component={Login} />
        {/*   <Route path="/signup" component={Signup} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
