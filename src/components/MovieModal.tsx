import { isVisible } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { IMovie } from '../data';
import { ISingleMovie } from '../single-data';
import MovieDetails from './MovieDetails';
import './MovieModal.css'
interface MovieProps {
    single: ISingleMovie,
    // visible: boolean,
    toggle: () => void;
}

const MovieModal = ({ single, toggle }:  MovieProps ) => {
    return (
        <div className='modal'>
            <button className="close" onClick={toggle} > &times;</button>
            <div className='modal-pop' role="dialog" aria-modal="true">

                <div className='img-right'>
                    <img src={ single.Poster} className="img-movie"/>
                </div>
                <MovieDetails single={single}  />
            </div>

            <div className="modal-overlay"></div>    

        </div>
        
    )
}

export default MovieModal;

