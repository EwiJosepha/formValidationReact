
import { useEffect } from 'react';
import './App.css'
import MovieCard from './assets/Components/MovieCard';

function App() {
  const apiUrl = "http://www.omdbapi.com/?apikey=d34b85c7"
  const movie1 = 
    {
      "Title": "Batman v Superman: Dawn of Justice",
      "Year": "2016",
      "imdbID": "tt2975590",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  }


   const apicall = async  (title)=> {
    const res = await fetch (`${apiUrl}&s=${title}`)
    const data = await res.json()
    console.log(data.Search);
  }
  useEffect(()=>{
apicall("superman")
  },[])

  return (
    <>
    <div className="app">
      <h1>Movie land</h1>
   
    <div className="search">
      <input type="text" placeholder='search movie here'  value="superman"/>
      <button >Search Moovies</button>
    </div>
    <div className="container">
    <MovieCard movie1={movie1}/>
    </div>
    </div>
    </>
  )
}

export default App
