import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth/auth';
import { PrivatedRoute } from './PrivatedRoute';
import { PublicRoutes } from './PublicRoutes';
import { loadnotes } from '../helpers/loadnotes';
import { setNote, startNoteL } from '../actions/Notes';
export const AppRouter = () => {

    const dispatch = useDispatch();

    const [check, setCheck] = useState(true);

    const [IsLogged, setIsLogged] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLogged(true);

                dispatch(startNoteL(user.uid));
            } else {
                setIsLogged(false);
            }
            setCheck(false);
        });
    }, [dispatch]);

    if (check) {
        return (
            <h1>espere...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes 
                        path="/auth"
                        isAuth={IsLogged}
                        component={ AuthRouter }
                    />

                    <PrivatedRoute 
                        exact
                        isAuth={IsLogged}
                        path="/"
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
