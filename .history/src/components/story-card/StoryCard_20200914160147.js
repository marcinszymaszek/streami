import React from 'react';

const StoryCard = () => {
    return (
        <section>
            <div className="container-outter">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12" id="story-card-module">
                            <div className="img-container">
                                <img className="container-img" src={require("../../styles/story_card.jpg")} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12" id="header-module">
                            <div className="container-text">
                                <h1 className="container-title">
                                    Every evening can become a great movie night!
                                </h1>
                                <h2 className="container-title">
                                    Discover movies, series, and shows that you can watch together.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StoryCard;
