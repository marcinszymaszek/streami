import React from "react";

const TopMovies = ({ currentMovies }) => {

    const renderMovies = () => {
        if (Object.keys(currentMovies).length && currentMovies.length) {
            return (
                <div className="image-container">
                    {currentMovies.map((movie) => {
                        return (
                            <div key={movie.id}>
                                <img className="movie-img" src={movie.image_url} alt={movie.name} />
                                <span class="title">{movie.name}</span>
                            </div>
                        );
                    })}
                </div>
            );
        }
    };


    return (
        <>
            {renderMovies()}
        </>
    )
}


export default TopMovies;
