import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './context/PrivateRouth'

import { lazy , Suspense } from 'react';


const Home = lazy(()=> import('./components/home/Home'))
const Login = lazy(()=> import('./components/Login/Login'))
const Signup = lazy(()=> import('./components/signup/Signup'))

function App() {

  return (

    <div className="App">
      <Router>
      <Suspense fallback={<p>loading</p>}   >
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path='/' />
        </Switch>
        </Suspense>
      </Router>
    </div>

  );
}

export default App;
