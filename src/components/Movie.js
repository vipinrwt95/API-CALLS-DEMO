import React,{useReact, useState} from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
    
  
 
  async function removeMovieHandler(movie) {
    const response = await fetch('https://moviereact-2183d-default-rtdb.firebaseio.com/movies.json', {
      method: 'DELETE',
      body: movie,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(props.submit());
    props.submit();
  }
  return (
    <>
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      </li>
      <button onClick={removeMovieHandler}>Delete</button>
      </>
   
  );
};

export default Movie;
