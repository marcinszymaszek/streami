import React from "react";

const Pagination = ({ moviesPerPage, totalMovies, paginate, currentPage }) => {
    const moviesNumber = [];

    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        moviesNumber.push(i);
    }

    return (
        <nav>
            <div className="container-outter">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12" id="pagination-module">
                            <div className="pagination-container">
                                <ul className="pagination" id="movie-list-pagination">
                                    {moviesNumber.map(number => (
                                        <li key={number} className="page-item">
                                            <div onClick={() => { paginate(number) }}
                                                className={"page-link" + (number === currentPage ? ' active' : '')}>
                                                {window.innerWidth <= 480 ? <span className="mobile-go-top-link" href="#top-movies-title">{number}</span> : <>{number}</>}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Pagination