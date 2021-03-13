import React, { Component, Fragment } from 'react';

import '../HeaderComponenr/SpotifyNavbar.css';
import SpotifyMenus from './MenuComponent/SpotifyMenus';
import SpotifyLogo from './SpotifyLogo';

const SpotifyNavbar = () => {
           return (
            <Fragment>
                <section id="spotifyNavbarBlock">
                    <article>
                        <div className="logoBlock">
                            <a href="/">
                                {/* <SpotifyLogo/> */}
                                <SpotifyLogo/>
                            </a>
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

