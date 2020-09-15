import React from 'react';

const StoryCard = () => {
    return (
        <section className="story-card">
            <div className="container-outter">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-6 col-md-12 col-sm-12" id="story-card-txt-module">
                            <div className="container-text">
                                <h2 className="story-card-title">
                                    Every evening can become a great movie night!
                                </h2>
                                <h3 className="story-card-subtitle">
                                    Discover movies, series, and shows that you can watch.
                                    Save your favorite titles so you always have something to watch and watch on all your devices
                                </h3>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12" id="story-card-img-module">
                            <div className="container-img">
                                <img className="story-card-img" src={require("../../styles/story_card.png")} alt="story card" />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}

export default StoryCard;
