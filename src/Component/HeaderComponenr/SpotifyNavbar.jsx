import React, { Component, Fragment } from 'react';

import '../HeaderComponenr/SpotifyNavbar.css';
import SpotifyMenus from './MenuComponent/SpotifyMenus';
import SpotifyLogo from './SpotifyLogo';

import { Link } from "react-router-dom";

const SpotifyNavbar = () => {
           return (
            <Fragment>
                <section id="spotifyNavbarBlock">
                    <article>
                        <div className="logoBlock">
                            <Link to="/">
                                {/* <SpotifyLogo/> */}
                                <SpotifyLogo/>
                            </Link>
                        </div>
                           <div className="menuBlock">
                               <SpotifyMenus/>
                        </div>
                    </article>
                </section>
                
            </Fragment>
         );
    
}
export default SpotifyNavbar;

