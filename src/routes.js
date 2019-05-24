import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route }  from 'react-router-dom';

import PrivateRoute from './components/AuthRoutes/PrivateRoutes';
import PublicRoute from './components/AuthRoutes/publicRoutes';

import Home from './components/Home/Index';
import SignIn from './components/SignIn/Index';

import Dashboard from './components/Admin/Dashboard';
import AdminMatches from './components/Admin/matches';
import AddEditMatch from './components/Admin/matches/addEditMatch';

const Routes = (props) => {
  return(
    <Layout>
        <Switch>
            <PrivateRoute {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch}/>
            <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches}/>
            <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
            <PublicRoute {...props} restricted={true} path="/sign_in" exact component={SignIn}/>
            <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
        </Switch>
    </Layout>
  )
}

export default Routes;
