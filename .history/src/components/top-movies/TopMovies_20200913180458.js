import React from "react";

const TopMovies = ({ currentMovies }) => {

    const renderMovies = () => {
        if (Object.keys(currentMovies).length && currentMovies.length) {
            return (
                <div className="image-container">
                    {currentMovies.map((movie) => {
                        return (
                            <div key={movie.id.attributes['im:id']}>
                                <img className="movie-img" src={movie['im:image'][2]['label']} alt={movie['im:name']['label']} />
                                <span id="movie-title">{movie['im:name']['label']}</span>
                            </div>
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
