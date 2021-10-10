import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { ActiveNote } from '../../actions/Notes';

export const JournalEntry = ({id, date, body, title, url}) => {
    const dispatch = useDispatch();

    const datenote = moment(date);
    return (
        <div className="journal__entry pointer">
            
            { url && <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${url})`
                }}
            ></div>
            }

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                    {body}
                </p>
            </div>

            <div 
                className="journal__entry-date-box"
                onClick={
                    () => {
                        dispatch(
                            ActiveNote(id, {
                                date, title, body, url
                            })
                        )
                    }
                }
            >
                <span>{datenote.format('dddd')}</span>
                <h4>{datenote.format('Do')}</h4>
            </div>

        </div>
    )
}
