import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth/auth';
import { startNewNote } from '../../actions/Notes';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const dispatch = useDispatch();

    const handlerLogout = () => {
        dispatch(startLogout());
    }

    const addNewEntry = () => {
        dispatch(startNewNote());
    }

    return (
        <aside className="journal__sidebar">
            
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> Fernando</span>
                </h3>

                <button 
                    className="btn"
                    onClick={handlerLogout}
                >
                    Logout
                </button>
            </div>

            <div 
                onClick={addNewEntry}
                className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    New entry
                </p>
            </div>

            <JournalEntries />    

        </aside>
    )
}
