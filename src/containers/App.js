import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';

import { getFavorites } from '../store/actions/index';
import NavBar from '../components/Navigation/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Login from '../containers/Pages/Login/Login';
import Stores from './Pages/Stores/Stores';
import Products from './Pages/Products/Products';
import Favorites from './Pages/Favorites/Favorites';
import Logout from '../components/Sections/Logout/Logout';
import Layout from '../components/Layout/Layout';
import classes from './App.module.scss';
import ProductOverview from '../components/Sections/Products/ProductOverview/ProductOverview';
import StoreOverview from '../components/Sections/Stores/StoreOverview/StoreOverview';

const App = (props) => {
    const { email, isAuth, getFavorites } = props;

    useEffect(() => {
        if (isAuth && email) {
            getFavorites(email);
        }
    }, [email, isAuth, getFavorites]);

    let routes;
    if (isAuth) {
        routes = (
            <Switch>
                <Route path="/produkter" exact component={Products} />
                <Route
                    path="/produkter/:productId"
                    component={ProductOverview}
                />
                <Route path="/butikker" exact component={Stores} />
                <Route path="/butikker/:storeId" component={StoreOverview} />
                <Route path="/favoritter" component={Favorites} />
                <Route path="/loggut" component={Logout} />
                <Route path="/" exact component={Home} />
                <Redirect to="/" />
            </Switch>
        );
    } else {
        routes = (
            <Switch>
                <Route path="/innlogging" component={Login} />
                <Redirect to="/innlogging" />
            </Switch>
        );
    }

    return (
        <div className={classes.App}>
            {isAuth && <NavBar />}
            <Layout>{routes}</Layout>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.token !== null,
        email: state.auth.email,
        error: state.auth.error,
        loading: state.auth.loading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFavorites: (email) => dispatch(getFavorites(email)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
