import React , { useEffect , useState } from "react";

import { FaSearch} from 'react-icons/fa';


import Movie from "./components/Movie";


const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";


const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="



function App() {
  const [movies , setMovies] = useState([]);
  const [searchTerm , setSearchTerm] = useState('');


  useEffect(() => {
    getMovies(FEATURED_API)
  } , [])

  const getMovies = (API) => {
    fetch(API).then(res => res.json())
      .then(data => {
        console.log(data.results);
        setMovies(data.results);
      })
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    
    if(searchTerm){
      getMovies(SEARCH_API  + searchTerm);

      setSearchTerm('');
    }

  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);

    
  }
  return (
    <>
      <header>
        <form onSubmit={onHandleSubmit} >
          <input 
            type="text" 
            placeholder="search..." 
            onChange={handleOnChange} 
            className="search" 
            value={searchTerm} />
            <div className="search-icon-cont" onClick={onHandleSubmit} >
              <FaSearch className="search-icon" />
            </div>
        </form>
      </header> 
      <div className="movie-container">
        {movies.length > 0 ? movies.map((movie) => (      
          <Movie key={movie.id} {...movie} />      
        )) : ( <h3>No Results</h3> )}
      </div>
    </>
  );
}

export default App;
