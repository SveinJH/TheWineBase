import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';

import NavBar from '../components/Navigation/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Login from '../containers/Pages/Login/Login';
import Products from './Pages/Products/Products';
import Layout from '../components/Layout/Layout';
import classes from './App.module.scss';
import ProductOverview from '../components/Sections/Products/ProductOverview/ProductOverview';

const App = props => {
    let routes;
    if (props.isAuth) {
        routes = (
            <Switch>
                <Route path="/products" exact component={Products} />
                <Route
                    path="/products/:productId"
                    component={ProductOverview}
                />
                <Route path="/" exact component={Home} />
                <Redirect to="/" />
            </Switch>
        );
    } else {
        routes = (
            <Switch>
                <Route path="/login" component={Login} />
                <Redirect to="/login" />
            </Switch>
        );
    }

    return (
        <div className={classes.App}>
            {props.isAuth && <NavBar />}
            <Layout>{routes}</Layout>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps)(App);
