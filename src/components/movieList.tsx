import React, {useState,useEffect} from 'react';
import { IMovie } from '../data';
import './movieList.css';
import SingleMovie from './singleMovie';
interface MovieProps {
    movies: IMovie[];
}
const MovieList: React.FC<MovieProps> = ({ movies }): JSX.Element => {
    
    const [data, setData] = useState<IMovie>();
    const handleMovie = (data:IMovie) => {
        setData(data);
    }

    useEffect(() => {
        data && handleMovie(data)

    }, [data])


    return (
        
        <div className='container1'>
            {data && (<SingleMovie movie={data}  />)}

            {movies.map((data) => {
               return( <div className='movie-list'>
                   <img src={data.Poster} className="img" onClick={() => handleMovie(data)}/>
                   <div className="details">
                    <p>{data.Title}</p> 
                    <p>{data.Year}</p>
                    </div>

               </div> 
               )
            })}


        </div>
        
    )
}

export default MovieList;

