
import { useEffect, useState } from 'react';
import './App.css'
import MovieCard from './assets/Components/MovieCard';

const movie1 = 
{
  "Title": "Batman v Superman: Dawn of Justice",
  "Year": "2016",
  "imdbID": "tt2975590",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}


function App() {
  const [moviess, setMoviess] = useState ([])

  const apiUrl = "http://www.omdbapi.com/?apikey=d34b85c7"

const apicall = async  (title)=> {
    const res = await fetch (`${apiUrl}&s=${title}`)
    const data = await res.json()
    console.log(data.Search);
    setMoviess(data.Search)
  }

  useEffect(()=>{
apicall("superman")
  },[])

  console.log("movies", moviess);


  return (
    <>
    <div className="app">
      <h1>Movie land</h1>
   
    <div className="search">
      <input type="text" placeholder='search movie here'  value="superman"/>
      <button >Search Moovies</button>
    </div>

    {moviess.length  > 0
    ?(
 <div className="container">
  {moviess?.map((move)=>( <MovieCard movie={move}/>))}

 </div>
    ):(
      <div className="empty">
        <h2>No moovies found</h2>
      </div>
    ) }
   
    </div>
    </>
  )
}

export default App
