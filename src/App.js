import React,{useState,useEffect} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies]=useState([]);
  const[setIsloading,LoadingHandler]=useState(false);
  const[error,setError]=useState(null);
  const[timer,stopTimer]=useState(false)
  const retryingHnadler=()=>
{ 
   if(!timer)
   {
    setTimeout(() => {
      fetchMoviesHandler()   
     }, 2000);
   }
}
function changetryingstate(){
      stopTimer(true);
  }
  
  async function fetchMoviesHandler()
  {  
      LoadingHandler(true)
      setError(null);  
   try{
    const response=await fetch('https://swapi.dev/api/films/')
    if(!response.ok)
    {
      throw new Error('Something went wrong....Retrying'); 
    }
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
    catch(error){
      setError(error.message);
    }  
    LoadingHandler(false);
  }
  useEffect(()=>
  {
   fetchMoviesHandler(); 
  },[])

let content=<p>Found no movies</p>
 if(movies.length>0)
 {
  content=<MoviesList movies={movies} />
 }
if(error)
{  
  content=<p>{error}<button onClick={changetryingstate}>Cancel</button></p>
  retryingHnadler();
}
if(setIsloading)
{
  content=<p>Loading...</p>
} 
if(timer)
{
  content=<p>No movies fetched,Stop trying</p>
}
return (
    <React.Fragment>
<section>{content}</section>
    </React.Fragment>
  );
}

export default App;
