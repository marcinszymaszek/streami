import React from "react";

const Pagination = ({ moviesPerPage, totalMovies, paginate }) => {
    const moviesNumber = [];

    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        moviesNumber.push(i);
    }

    return (
        <nav>
            <ul className="pagination" id="movie-list-pagination">
                {moviesNumber.map(number => (
                    <li key={number} className="page-item">
                        <div onClick={() => { paginate(number) }} className="page-link" id="movie-pag-link">
                            {number}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>


export default Pagination