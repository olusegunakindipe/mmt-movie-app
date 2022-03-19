import React, { useEffect, useState } from 'react';
import './App.css';
import MmtIcons  from './components/mmtIcons';
import MovieList from './components/movieList';
import SearchBox from './components/searchBox';
import Pagination from './components/pagination';
import { IMovie } from './data';


const App: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]) 
  const [searchValue, setSearchValue] = useState<string>('');
  const [total, setTotal] = useState<number>(0);
  const [pageNo, setPageNo] = useState<number>(0);
  const [maxPages, setMaxPage] = useState<number>(0);
  

  const getMovieRequest = async (searchValue: string, pageNo: number)  => {
   
      
    const movieUrl = `http://www.omdbapi.com/?s=${searchValue}&page=${pageNo}&apikey=35be18f`;
    const movieUrl2 = `http://www.omdbapi.com/?s=${searchValue}&apikey=35be18f`;
    const geturl = (pageNo > 0) ? movieUrl : movieUrl2;
      const response = await fetch(geturl);
      const responseJson = await response.json();
    responseJson.Search ? (setMovies(responseJson.Search)) : setMovies([]);
    if (responseJson.Response === 'True') {
      (setTotal(+responseJson.totalResults));
    }
    else {
      setTotal(0);
    }
       responseJson.Search && (setMaxPage(Math.ceil(total / responseJson.Search.length)));
    }
  

  useEffect(() => {
      getMovieRequest(searchValue, pageNo);
  }, [searchValue, maxPages, total, pageNo]);

  return (
    <div className="App">
      <div className='header'>
        <MmtIcons/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='container'>
        {total > 0 ?
          (<Pagination result={(total)} pageNo={pageNo} setPageNo={setPageNo} maxPages={maxPages} />)
          :
          <h3 className='record'>No Record Found</h3>
        } 
        {<MovieList movies={movies} />}
        
      </div>
    </div>
  );
}

export default App;
