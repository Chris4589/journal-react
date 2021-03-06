import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const { active:note } = useSelector(state => state.notes);
    const [values, handleInputChange, reset] = useForm(note);

    const activeId = useRef(note.id);

    useEffect(() => {

    if (note.id !== activeId.current) {
        reset(note);
        activeId.current = note.id;
    } 
        
    }, [note, reset]);

    const { body, title, url } = values;
    
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>

                {

                    url && (<div className="notes__image">
                        <img 
                            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                            alt="imagen"
                        />
                    </div>)
                }


            </div>

        </div>
    )
}
