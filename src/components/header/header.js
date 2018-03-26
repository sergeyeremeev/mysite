import React from 'react';
import htmlGlasses from '../../assets/images/html_glasses_final.svg';
import CV from '../../assets/documents/CV.pdf';
import { HeaderContainer, HeaderTop, HeaderBottom } from './style';

const Header = () => {
    const handleClick = () => {
        window.scrollTo(0, document.body.clientHeight);
    };

    return (
        <HeaderContainer>
            <HeaderTop>
                <h1>Sergey Eremeev</h1>
                <h2>Your Next Developer</h2>
            </HeaderTop>
            <img src={htmlGlasses} alt=""/>
            <HeaderBottom>
                <a href={CV} download="Resume">Resume</a>
                <button onClick={handleClick}>Contact</button>
            </HeaderBottom>
        </HeaderContainer>
    );
};

export default Header;
