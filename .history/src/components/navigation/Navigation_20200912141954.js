import React from 'react';
import { ReactComponent as StreamiLogo } from '../../styles/streami_logo.svg';

const Navigation = () => {
    return (
        <nav>
            <div className="container-outter">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12" id="nav-module">
                            <div classNameName="navigation-container">
                                <svg className="streami-logo">
                                    <StreamiLogo className="streami-logo" />
                                </svg>
                            </div>
                            <button className="btn btn-danger">Log in</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </nav >
    );
}

export default Navigation;
