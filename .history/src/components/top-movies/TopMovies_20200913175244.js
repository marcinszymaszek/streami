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
        <div>
            <h1 className="container-title">
                TOP 100 movies
            </h1>
            {renderMovies()}
        </div>
    )
}


export default TopMovies;
