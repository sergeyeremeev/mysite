import React from 'react';
import styled from 'styled-components';

import themeColors from '../common/theme-colors';
import htmlGlasses from '../../assets/images/html_glasses_final.svg';
import CV from '../../assets/documents/CV.pdf';

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${themeColors.darkGray};
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
    
  img {
    position: relative;
    max-width: 60%;
    max-height: 50%;
    width: auto;
    height: auto;
    margin: 0 auto;
  }
`;

const HeaderTop = styled.div`
  position: relative;
  color: ${themeColors.dijon};
  margin-bottom: auto;
  padding-top: 40px;
  text-shadow: rgba(0, 0, 0, 0.5) 0 3px 1px;
  
  h1 {
    margin: 0;
    font-size: 32px;
    text-transform: uppercase;
  }
  
  h2 {
    margin-top: 20px;
    font-weight: 300;
    font-size: 60px;
    text-transform: uppercase;
  }
  
  @media (max-width: 1023px) {
  
    h1 {
      font-size: 26px;
    }
    
    h2 {
      font-size: 42px;
    }
  }
  
  @media (max-width: 767px) {
  
    h1 {
      font-size: 24px;
    }
    
    h2 {
      font-size: 32px;
    }
  }
  
  @media (max-width: 679px) {
    
    h1 {
      font-size: 20px;
    }
    
    h2 {
      font-size: 24px;
    }
  }
`;

const HeaderBottom = styled.div`
  position: relative;
  display: flex;
  width: 480px;
  margin-top: auto;
  padding-bottom: 80px;
  
  a,
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${themeColors.dijon};
    color: ${themeColors.dijon};
    text-transform: uppercase;
    font-size: 21px;
    width: 220px;
    height: 50px;
    transition: box-shadow 0.3s ease, color 0.3s ease;
    outline: none !important;
    
    &:hover {
      box-shadow: inset 0 -50px ${themeColors.dijon};
      color: ${themeColors.white};
    }
  }
    
  button {
    margin-left: auto;
  }
  
  @media (max-width: 679px) {
    padding-bottom: 100px;
    width: 220px;
    flex-direction: column;
    
    a,
    button {
      width: 100%;
      border: 1px solid ${themeColors.dijon};
      font-size: 19px;
      font-family: Lato, sans-serif;
    }
    
    a {
      margin-bottom: 15px;
    }
  }
`;

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
