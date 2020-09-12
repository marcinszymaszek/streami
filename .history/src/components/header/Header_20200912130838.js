import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="container-outter">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12" id="header-module">
                            {/* <div className="img-container">
                                <img className="header-img" src={require("../../styles/cinema_hall.jpg")} />
                            </div> */}
                            <h1>
                                Watch thousands of shows and movies, with plans starting at $4.99/month.
                            </h1>
                            <button className="btn btn-light">START YOUR FREE TRIAL</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
