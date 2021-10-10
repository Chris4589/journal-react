import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithPassAndEmail } from '../../actions/auth/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const { msg } = useSelector(state => state.ui);

    const [ values, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const OnSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid()) {
            return;
        }
        dispatch(startRegisterWithPassAndEmail(values.email, values.password, values.name))
        console.log(values);
    }

    const isFormValid = () => {
        if (!validator.isEmail(values.email)) {
            console.log('2')
            dispatch(setError(`no es un mail valido`));
            return false;
        }
        if (values.password !== values.password2) {
            dispatch(setError(`la pw no es igual`));
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            
            <form onSubmit={OnSubmit}>
                {
                    msg && 
                    (
                    <div className="auth__alert-error">
                        { msg }
                    </div>
                    )
                }

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    onChange={handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    onChange={handleInputChange}
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

               

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
