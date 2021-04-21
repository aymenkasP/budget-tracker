import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './authContext';


const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { user } = useContext(AuthContext);

    return(
        <Route 
            {...rest} render={routProps =>  !user ? <Redirect to ={'/login'} /> :  <RouteComponent {...routProps} /> }
        />
    )
}

export default PrivateRoute;
