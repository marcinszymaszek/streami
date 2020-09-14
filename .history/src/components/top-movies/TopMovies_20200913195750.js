import React from "react";

const TopMovies = ({ currentMovies }) => {

    const renderMovies = () => {
        if (Object.keys(currentMovies).length && currentMovies.length) {
            return (
                <div className="movies-labels-container">
                    {currentMovies.map((movie) => {
                        return (
                            <>
                                <div className="movie-label" key={movie.id.attributes['im:id']} >
                                    <a className="item-link" href={movie.link[0].attributes.href} target="_blank" rel="noopener noreferrer">
                                        <img className="movie-img" src={movie['im:image'][2]['label']} alt={movie['im:name']['label']} />
                                    </a>
                                    <br />
                                    <span id="movie-title">{movie['im:name']['label']}</span>
                                    <br />
                                    <span id="movie-subtitle">{movie.category.attributes.term}</span>
                                </div>

                                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                Duis ex irure deserunt in nostrud ex minim consequat laborum labore.
                                                Aute nulla nisi elit consectetur labore magna amet laborum velit.
                                            <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>
                        );
                    })}
                </div>
            );
        }
    };

    return (
        <section className="top-movies-list">
            <div className="container-outter">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12" id="top-movies-module">
                            <div className="top-movies-container">
                                <h1 className="container-title">
                                    TOP 100 movies
                                </h1>
                                {renderMovies()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}


export default TopMovies;
