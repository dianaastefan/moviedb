import React, {useState} from 'react'
import styles from "../styles/MovieBox.module.css"
import Modal from 'react-modal';
const API_IMAGES="https://image.tmdb.org/t/p/w500/";


const MovieBox = ({poster_path, title, vote_average, release_date, overview}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal=()=>setIsOpen(true);
    const closeModal=()=>setIsOpen(false);

    const customStyles = {
        content: {
            position: 'absolute',
            top: '50px',
            left: '80px',
            right: '80px',
            bottom: '50px',
            backgroundColor: '#feffdf',
            border: "2px solid burlywood",
            borderRadius: "5px",
        },
      };
  return (
    <div className={styles.MovieBox}>

        <div className={styles.movie}> 
            
            <h3>{title}</h3>
            <img src={API_IMAGES+poster_path} alt='poster'/>
            <button type='button' className={styles.button} onClick={openModal} >View More</button>
                <Modal 
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}>
            
                    <div className={styles.modal}>
                        <img src={API_IMAGES+poster_path} alt='poster'/>
                        <div className={styles.modalInfo}>
                            <h3>{title}</h3>
                            <h4>IMDB: {vote_average}</h4>
                            <h4>Release Date: {release_date}</h4>
                            <h5>Overview</h5>
                            <p>{overview}</p>
                        </div>
                    </div>

                    <button className={styles.button} onClick={closeModal}>Close</button>
                </Modal>
          
        </div>
    </div>
  )
}

export default MovieBox