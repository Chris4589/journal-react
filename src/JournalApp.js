import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './stores/store';

export const JournalApp = () => {
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
}
