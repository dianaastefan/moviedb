// import React, { useState } from 'react'
// import Modal from "react-modal"

// const API_IMAGES="https://image.tmdb.org/t/p/w500/";
// const ModalMovie = (poster_path, title, vote_average, release_date, overview) => {
//     const [modal, setModal] = useState(false);
//     const handleOpen = () =>setModal(true);
//     const handleClose = () =>setModal(false);
//   return (
//     <Modal modal={modal} onHide={handleClose}>
//         <Modal.Header closeButton>
//             <Modal.Title></Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//             <img src={API_IMAGES+poster_path} alt='poster'/>
//             <h3>{title}</h3>
//             <h4>IMDB: {vote_average}</h4>
//             <h5>Release Date: {release_date}</h5>
//             <h6>Overview</h6>
//             <p>{overview}</p>
//         </Modal.Body>
//     </Modal>
//   )
// }

// export default ModalMovie