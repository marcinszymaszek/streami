import React from 'react';

const AnimationCard = () => {
    return (
        <section className="animation-card">
            <div className="container-outter">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-6 col-md-12 col-sm-12" id="card-animation-module">
                            <div className="container-animation">
                                <video src="https://video-ssl.itunes.apple.com/itunes-assets/Video123/v4/65/ac/d2/65acd254-6dfe-636c-41bb-716338a2edb9/mzvf_18251995317974029657.640x354.h264lc.U.p.m4v" 
                                type="video/mp4" class="our-story-card-video" 
                                autoplay="true" 
                                playsinline 
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
                                <h3 className="card-subtitle">
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
