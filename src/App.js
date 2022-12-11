import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies]=useState([]);
  const[setIsloading,LoadingHandler]=useState(false);
  async function fetchMoviesHandler()
  { if(movies.length==0)
    {
      LoadingHandler(true)
    }
    
    const response=await fetch('https://swapi.dev/api/films/')
    const data=await response.json();
    const transformedMovies=data.results.map(movieData=>
          {
            return{
              id:movieData.episode_id,
              title:movieData.title,
              openingText:movieData.opening_crawl,
              releaseDate:movieData.release_date
            }
          })
        LoadingHandler(false)  
        setMovies(transformedMovies);
    }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {setIsloading&&<div>LOADING......</div>}
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
