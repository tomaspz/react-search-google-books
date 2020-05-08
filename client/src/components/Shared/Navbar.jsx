import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <img src="./logo.png" width="50" height="50" alt="logo" className="navbar-logo" />
            </a>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/search">Search Google Books</a>
                    </li>
                    <hr />
                    <li className="nav-item">
                        <a className="nav-link" href="/library">My Library</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;