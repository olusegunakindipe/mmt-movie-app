import React from 'react';
import { ISingleMovie } from '../single-data';
import './MovieDetails.css';

interface MovieProps {
    single: ISingleMovie
}
const MovieDetails = ({single}: MovieProps) => {
    return (<>
        <div className='detail'>
            <div className="title">
                {single.Title}
                <span className='small'>({single.Year})</span>
            </div>
            <div className="cast">
                <p>Director: {single.Director}</p>
                <p>Cast: {single.Actors}</p>
                <p>Genre: {single.Genre}</p>
            </div>
            <div className="plot">
                <p>{single.Plot}</p>
                
            </div>
        </div>
    </>)
}

export default MovieDetails;