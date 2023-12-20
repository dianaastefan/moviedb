import React, { createContext} from 'react'
import styles  from '../styles/NavBar.module.css'
// import MovieBox from './MovieBox';
import { globalProvider } from '../context/Context';
import { useNavigate } from 'react-router-dom';

// const API_SEARCH='https://api.themoviedb.org/3/search/movie?api_key=64569705d85560116922c8b37f5316fa&query'
// const APi_URL="https://api.themoviedb.org/3/movie/popular?api_key=64569705d85560116922c8b37f5316fa";
const NavBar = () => {
   const {movieData, inputSearch, searchedMovie, movieFromSearch}=createContext(globalProvider);  
  //  const {currentData e movieData e OK, inputSearch, searchedData- e searchedMovie, dataFromSearch- e movieFromSearch}

 

  //aici e o problema cu inputSearch si movieData!!
  const [movie, setMovie]= movieData; 
  const [input, setInput]=inputSearch;
  const [movieSearch,setMovieSearch] =searchedMovie;
  const [searchMovie, setSearchMovie]=movieFromSearch;
  
// const [input, setInput] = inputSearch e o prob
  // const [data, setData] = currentData e movieData e OK
  // const [dataSearch, setDataSearch] = searchedData
  // const [searchData] = dataFromSearch

  //AICI COD VECHI
   // const [query, setQuery]=useState('');
  // const [movies, setMovies]=useState([]);
  
const handlerKeyPress = (event) => {
  setInput(event.target.value);
  setMovieSearch(input);
}

  // const [dataSearch, setDataSearch]=searchedMovie;

  
  const navigate = useNavigate();

  //CODUL DE SEARCH CARE MERGE
  
//   const searchMovie = async(e)=>{
//     e.preventDefault();
//     console.log("searching");
//     try{
//         const url=`https://api.themoviedb.org/3/search/movie?api_key=64569705d85560116922c8b37f5316fa&query=${query}`;
//         const res= await fetch(url);
//         const data=await res.json();
//         console.log(data);
//         setMovies(data.results);
//     }
//     catch(e){
//         console.log(e);
//     }
//   }
// useEffect (()=>{
//    fetch(APi_URL)
//     .then((res) => res.json())
//     .then(data =>{
//       console.log(data);
//       setMovies(data.results);
//     })
// },[])

// const handlerKeyPress = (event) => {
//   setInput(event.target.value)
//   setDataSearch(input)
// }
const handlerClick = () => navigate("/search")
// const autocompleteHandler = (id) => {
//   setSingleProduct(id)
//   navigate(`/product/${id}`)
// }
  return (
    <div className={styles.NavBar}>
        <div>Movie Project</div>
        {/* <div onClick={() => {
        navigate('/');
        navigate(0)
      }}>LOGO</div> */}
        <div>Movies Dropdown</div>
        <div>Series Dropdown</div>

       <div className={styles.searchComponent}>
        <input type='search' value={input} onChange={e => handlerKeyPress(e)} />

        <div className={input.length > 0 ? `${styles.autocomplete}` : `${styles.hideElement}`}>
          
        <ul>
            {input.length > 0 ? searchMovie.map((movieReq) => {
              return (
                <li
                  key={movieReq.id}{...movieReq}/>
              )
            }
            ) : <></>}
          </ul>
          
        </div>
        {/* {movie.map((movieReq)=>
            <MovieBox key={movieReq.id} {...movieReq}/>)} */}
        <button onClick={handlerClick}>See all results</button>
      </div>

      {/* AICI E CODUL VECHI */}
        {/* <input 
        type='search' 
        value={query}
        placeholder='Movie Search'
        onChange={(e)=>setQuery(e.target.value)} /> */}
        {/* <button onClick={searchMovie}>Search</button> */}

        
    {/* <div className={styles.ceva}>
             {movies.map((movieReq)=>
            <MovieBox key={movieReq.id} {...movieReq}/>)}
     </div> */}

     {/* AICI SE TERMINA CODUL VECHI */}

{/* <div className={styles.searchComponent}>
        <input type='search' value={input} onChange={e => handlerKeyPress(e)} />

        <div className={input.length > 0 ? `${styles.autocomplete}` : `${styles.hideElement}`}>
          <ul>
            {input.length > 0 ? searchData.map((item, index) => {
              return (
                <li onClick={() => autocompleteHandler(item.id)}
                  key={index}>{item.title}</li>
              )
            }
            ) : <></>}
          </ul>
        </div>
        <button onClick={handlerClick}>See all results</button>
      </div> */}
    </div>
  )
}

export default NavBar