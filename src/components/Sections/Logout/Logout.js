import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { onLogout } from '../../../store/actions/index';

const Logout = props => {
    useEffect(() => {
        props.onLogout();
    });

    return <Redirect to="/innlogging" />;
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(onLogout())
    };
};

export default connect(null, mapDispatchToProps)(Logout);
