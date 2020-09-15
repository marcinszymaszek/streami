import React from 'react';

const AnimationCard = () => {
    return (
        <section className="animation-card">
            <div className="container-outter">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-6 col-md-12 col-sm-12" id="card-animation-module">
                            <div className="container-animation">
                                <img className="card-animation" src={require("../../styles/story_card.png")} alt="story card random movies" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12" id="card-txt-module">
                            <div className="container-text">
                                <h2 className="card-title">
                                    Every evening can become a great movie night!
                                </h2>
                                <h3 className="card-subtitle">
                                    Discover movies, series, and shows that you can watch.
                                    Save your favorite titles so you always have something to watch and watch on all your devices
                                </h3>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}

export default AnimationCard;
