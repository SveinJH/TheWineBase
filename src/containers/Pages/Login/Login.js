import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import classes from './Login.module.scss';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import { checkValidity } from '../../../shared/utility';
import login_image from '../../../images/login_img.svg';
import Spinner from '../../../components/UI/Spinner/Spinner';

const Login = props => {
    const [inputFormData, setInputFormData] = useState({
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                label: 'E-post'
            },
            value: '',
            validation: {
                email: true,
                minLength: 3,
                required: true
            },
            valid: false,
            touched: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                label: 'Passord'
            },
            value: '',
            validation: {
                minLength: 6,
                required: true
            },
            valid: false,
            touched: false
        }
    });
    const [isSignup, setIsSignup] = useState(false);
    const [validForm, setValidForm] = useState(false);

    const submitHandler = event => {
        event.preventDefault();
        const userData = {
            email: inputFormData.email.value,
            password: inputFormData.password.value
        };

        if (validForm && isSignup) {
            props.onCreate(userData);
        } else if (validForm && !isSignup) {
            props.onLogin(userData);
        }
    };

    const inputChangedHandler = (event, controlName) => {
        const updatedInputFormData = {
            ...inputFormData,
            [controlName]: {
                ...inputFormData[controlName],
                value: event.target.value,
                valid: checkValidity(
                    event.target.value,
                    inputFormData[controlName].validation
                ),
                touched: true
            }
        };

        let formIsValid = true;
        for (let inputID in updatedInputFormData) {
            formIsValid = updatedInputFormData[inputID].valid && formIsValid;
        }

        setInputFormData(updatedInputFormData);
        setValidForm(formIsValid);
    };

    const formElements = Object.keys(inputFormData).map(el => {
        return {
            id: el,
            config: inputFormData[el]
        };
    });

    let form = formElements.map(formElement => {
        return (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={event => inputChangedHandler(event, formElement.id)}
            />
        );
    });

    return (
        <div className={classes.Login}>
            <div className={classes.Login__image}>
                <img src={login_image} alt="" />
            </div>
            <div className={classes.Login__info}>
                <div className="heading-1">The Wine Base</div>
                <div className={classes.Login__error}>
                    {props.error ? <>Error: {props.error.message}</> : null}
                </div>
                {!props.loading ? (
                    <form
                        className={classes.Login__form}
                        onSubmit={submitHandler}
                    >
                        {form}
                        <Button btnType="Default" disabled={!validForm}>
                            {!isSignup ? 'LOGG IN' : 'REGISTRER'}
                        </Button>
                    </form>
                ) : (
                    <Spinner />
                )}
                {!props.loading && (
                    <div>
                        {!isSignup
                            ? 'Ikke registrert? '
                            : 'Allerede registrert? '}
                        <span
                            className={classes.ChangeMode}
                            onClick={() => setIsSignup(!isSignup)}
                        >
                            {!isSignup ? 'Lag en bruker' : 'Logg inn.'}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        loading: state.auth.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCreate: userData => dispatch(actions.createUser(userData)),
        onLogin: userData => dispatch(actions.loginUser(userData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
