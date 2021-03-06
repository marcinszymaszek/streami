import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


const TopMoviesModal = ({ currentMovies, hideModal, isOpen }) => {


    const renderMoviesDetails = () => {
        if (Object.keys(currentMovies).length && currentMovies.length) {
            return (
                <div>
                    {currentMovies.map((movie, index) => {
                        return (
                            <div className="movie-label" key={movie.id.attributes['im:id']}>
                                <span id="movie-title">{movie['im:name']['label']}</span>
                                {console.log(index.slice())}
                            </div>
                        );
                    })}
                </div>
            );
        }
    };


    return (
        <Modal
            show={isOpen}
            onHide={hideModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                {renderMoviesDetails()}

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={hideModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    );


    // const renderMovies = () => {
    //     if (Object.keys(currentMovies).length && currentMovies.length) {
    //         return (
    //             <div className="movies-labels-container">
    //                 {currentMovies.map((movie) => {
    //                     return (
    //                         <div className="movie-label" key={movie.id.attributes['im:id']}  title={movie['im:name']['label']} >
    //                             <a className="item-link" href={movie.link[0].attributes.href} target="_blank" rel="noopener noreferrer">
    //                                 <img className="movie-img" src={movie['im:image'][2]['label']} alt={movie['im:name']['label']} />
    //                             </a>
    //                             <br />
    //                             <div className="text-under">
    //                             <span id="movie-title">{movie['im:name']['label']}</span>
    //                             <br />
    //                             <span id="movie-subtitle">{movie.category.attributes.term}</span>
    //                             </div>
    //                         </div>
    //                     );
    //                 })}
    //             </div>
    //         );
    //     }
    // };

    // return (
    //     <section className="top-movies-list">
    //         <div className="container-outter">
    //             <div className="container-fluid">
    //                 <div className="row">
    //                     <div className="col-lg-12 col-md-12 col-sm-12" id="top-movies-module">
    //                         <div className="top-movies-container">
    //                             <h1 className="container-title">
    //                                 TOP 100 movies
    //                             </h1>
    //                             {renderMovies()}
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </section >
    // )
}


export default TopMoviesModal;
