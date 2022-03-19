import React, { useEffect, useState, useCallback } from 'react';
import { IMovie } from '../data';
import { ISingleMovie } from '../single-data';
import  MovieModal from './MovieModal';

interface MovieProps {
    movie: IMovie;
    openModel?: boolean,

}

const SingleMovieProps: ISingleMovie = {
    Title: "",
    Year: "",
    Rated: "",
    Released: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Plot: "",
    Poster: "",
};
const SingleMovie: React.FC<MovieProps> = ({movie}: MovieProps)  => {
    const [visible, setVisible] = useState<boolean>(false);
    const [singleMovie, setSingleMovie] = useState<ISingleMovie>(SingleMovieProps);

    const showSingleMovie = useCallback(async() => {
        const url = `http://www.omdbapi.com/?t=${movie.Title}&y=${movie.Year}&apikey=35be18f`;
        const response = await fetch(url);
        const responseJson = await response.json();
        setSingleMovie(responseJson)

    },[movie.Title, movie.Year])
    useEffect(() => {
        if (singleMovie) {
            showSingleMovie(); 
            setVisible(!visible);
        }

    }, [movie.Title, movie.Year])
    return (
        <>
            {visible && <MovieModal single={singleMovie} toggle={() => setVisible(!visible)}  />}
            
        </>)
}

export default SingleMovie; 