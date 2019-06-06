import React from 'react';
import Layout from './Hoc/Layout';
import { Switch }  from 'react-router-dom';

import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from './Components/authRoutes/publicRoutes';

import Home from './Components/home';
import SignIn from './Components/signin';
import TheMatches from './Components/the Matches';
import Dashboard from './Components/admin/Dashboard';
import AdminMatches from './Components/admin/matches';
import AddEditMatch from './Components/admin/matches/addEditMatch';

const Routes = (props) => {
    return(
        <Layout>
            <Switch>
                <PrivateRoute {...props} path="/admin_matches/edit_match" exact component={AddEditMatch}/>
                <PrivateRoute {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch}/>
                <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches}/>
                <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
                <PublicRoute {...props} restricted={true} path="/sign_in" exact component={SignIn}/>
                <PublicRoute {...props} restricted={false} path="/the_matches" exact component={TheMatches}/>
                <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
            </Switch>
        </Layout>
    )
}

export default Routes;
