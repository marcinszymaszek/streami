import React from 'react';

const AnimationCard = () => {
    return (
        <section className="animation-card">
            <div className="container-outter">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-6 col-md-12 col-sm-12" id="card-animation-module">
                            <img className="card-img video-background" src={require("../../styles/tv.png")} alt="story card random movies" />
                            <div className="container-animation">
                                <video src={require("../../styles/trailer.f4v")}
                                    className="card-video"
                                    type="video/mp4"
                                    autoPlay
                                    playsInline
                                    muted
                                    loop>
                                </video>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12" id="card-txt-module">
                            <div className="container-text">
                                <h2 className="card-title">
                                    Watch everywhere you want.
                                </h2>
                                <h3 className="card-subtitle" id="animation-card-subtitle">
                                    Watch movies, series and programs without restrictions
                                    on your phone, tablet, laptop, TV ... No additional fees.
                                </h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    );
}

export default AnimationCard;

