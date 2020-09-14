import React from "react";

const Pagination = ({ moviesPerPage, totalMovies, paginate, currentPage }) => {
    const moviesNumber = [];

    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        moviesNumber.push(i);
    }

    return (
        <nav>
            <ul className="pagination" id="movie-list-pagination">
                {moviesNumber.map(number => (
                    <li key={number} className="page-item">
                        <div onClick={() => { paginate(number) }}
                            className={"page-link" + (number === currentPage ? ' active' : '')}>
                            {number}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination