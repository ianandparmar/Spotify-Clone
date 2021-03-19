import React, { Fragment } from 'react'

import { Link } from "react-router-dom";

const SpotifyMenus = () => {
    return (
        <Fragment>
            <nav>
                <ul>
                    <li><Link to="/">Premium</Link></li>
                    <li><Link to="/">Support</Link></li>
                    <li><Link to="/">Download</Link></li>
                    <li><Link to="/Signup">Sign up</Link></li>
                    <li><Link to="/Signin">Log in</Link></li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default SpotifyMenus;
