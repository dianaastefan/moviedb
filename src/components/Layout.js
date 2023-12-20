import React, {useContext} from 'react';
import { globalProvider } from '../context/Context';
import MovieBox from './MovieBox';
import styles from '../styles/Layout.module.css'


const Layout = () => {
    const{movieData, movieFromSearch} =useContext(globalProvider);

    const [movie, setMovie]= movieData;
    const [searchMovie, setSearchMovie]=movieFromSearch;
    
    // const [dataSearch, setDataSearch] = searchMovie;


  //   const { currentData= movieData e OK, dataFromSearch, productCategory } =
	// 	useContext(globalProvider);
	// const [searchData, setSearchData] = dataFromSearch
	
	// const [data, setData] = currentData
  
  return (
    <div className={styles.container}>
      { 
        searchMovie.length > 0 ? searchMovie.map((movieReq) => 
						<MovieBox key={movieReq.id} {...movieReq} />
					)
        
        : movie.map((movieReq)=>
            <MovieBox key={movieReq.id} {...movieReq}/>)}    
    </div>
  )
}

export default Layout

