import React from 'react';
import { Logo } from '../ui/icons';

const Footer = () => {
    return (
        <footer className="bck_blue">
            <div className="footer_logo">
                <Logo
                    width="150px"
                    height="70px"
                    link={true}
                    linkTo="/"
                />
            </div>
            <div className="footer_discl">
                Dorota Kora 2019.All rights reserved.
            </div>
            
        </footer>
    );
};

export default Footer;