import React from 'react';

const Footer = () => {
    return (
        <footer className="foot-backgr text-center bg-dark text-white" 
        style={{
            marginTop: 100, /* negative value of footer height */
            height: 120,
            clear: 'both',
            paddingTop:20
        }}>
            <div id="my-name">
                <p>© Tomás Pérez-Zafón</p>
                <ul className="foot-links list-unstyled">
                    <li><i className="fa fa-github"></i><a href="https://github.com/tomaspz" rel="noopener noreferrer" target="_blank"> GitHub</a></li>
                    <li><i className="fa fa-linkedin"></i><a href="https://www.linkedin.com/in/tomas-perez-333b5231/" rel="noopener noreferrer" target="_blank"> LinkedIn</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;