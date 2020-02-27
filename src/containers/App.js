import React, { useState } from 'react';
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';

import NavBar from '../components/Navigation/NavBar/NavBar';
import Home from './Pages/Home/Home';
import classes from './App.module.scss';
import Layout from '../components/Layout/Layout';

const App = () => {
    const [isAuth, setIsAuth] = useState(false);

    const routes = (
        <Switch>
            {/* <Route path="/login"/> */}
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
        </Switch>
    );

    return (
        <div className={classes.App}>
            <NavBar />
            <BrowserRouter>
                <Layout>{routes}</Layout>
            </BrowserRouter>
        </div>
    );
};

export default App;