import React, {useState, useEffect, createContext, useDeferredValue} from 'react';

export const globalProvider= createContext();
const APi_URL="https://api.themoviedb.org/3/movie/popular?api_key=64569705d85560116922c8b37f5316fa";
const API_SEARCH='https://api.themoviedb.org/3/search/movie?api_key=64569705d85560116922c8b37f5316fa&query=';

const Context = ({ children }) => {
    const [movie, setMovie] = useState([]);
    // const [data, setData] = useState([]);
    const [input, setInput] = useState("");
	  const deferredQuery = useDeferredValue(input);
    const [movieSearch, setMovieSearch] = useState("");
    const [searchMovie, setSearchMovie] = useState("");

    // const getData = async (url) => {
    //   const response = await fetch(url);
    //   const result = await response.json();
    //   setData(result.products);
    // };

    const getMovie = async(APi_URL) =>{
      const response = await fetch(APi_URL);
      const res = await response.json();
      setMovie(res.results);
    }

    const getSearchMovie = async (API_SEARCH) => {
      const response = await fetch(API_SEARCH);
      const res = await response.json();
      setSearchMovie(res.results);
    };

    useEffect(()=>{
      getMovie(APi_URL);
    }, [])

    useEffect(() => {
      getSearchMovie(API_SEARCH + movieSearch);
    }, [movieSearch]);

    //aici e exp din celalalt proiect

    // useEffect(() => {
    //   getData(url);
    // }, [url]);

    //aici e ala care MERGE

    // useEffect (()=>{
    //     fetch(APi_URL)
    //      .then((res) => res.json())
    //      .then(data =>{
    //        console.log(data);
    //        setMovie(data.results);
    //      })
    //  },[])

    //  useEffect(() => {
	// 	getSearchData(API_SEARCH + dataSearch);
	// }, [dataSearch]);


    //  const getSearchData = async()=>{
    //     const url=`https://api.themoviedb.org/3/search/movie?api_key=64569705d85560116922c8b37f5316fa&query=${query}`;
    //     const res= await fetch(url);
    //     const data=await res.json();
    //     console.log(data);
    //     setMovie(data.results); 
    //     console.log("searching");
    //   }

  return (
   <globalProvider.Provider 
     value={{
        movieData: [movie, setMovie],
        inputSearch: [deferredQuery, setInput],
        searchedMovie: [movieSearch, setMovieSearch],
        movieFromSearch: [searchMovie, setSearchMovie],

        // currentData: [data, setData], = movieData- e ok
				// inputSearch: [deferredQuery, setInput],- nu merge cv pe NavBar
				// searchedData: [dataSearch, setDataSearch],-searchedMovie
        // dataFromSearch: [searchData, setSearchData],- movie fromSearch

     }}
   >
        {children}
    </globalProvider.Provider>
  )
}

export default Context