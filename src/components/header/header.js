import React, { Component } from 'react';
import styled from 'styled-components';

import themeColors from '../common/theme-colors';
import headerImage from '../../assets/images/computer_screen.png';
import CV from '../../assets/documents/CV.pdf';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(${themeColors.brown}, ${themeColors.beige});
  text-align: center;
    
  img {
    max-width: 70%;
    max-height: 60%;
    width: auto;
    height: auto;
    margin: 0 auto;
  }
`;

const HeaderTop = styled.div`
  color: ${themeColors.beige};
  margin-bottom: 40px;
  
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
`;

const HeaderBottom = styled.div`
  margin-top: 60px;
  display: flex;
  width: 480px;
  
  a,
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${themeColors.blue};
    color: ${themeColors.blue};
    text-transform: uppercase;
    font-size: 20px;
    width: 220px;
    height: 50px;
    transition: box-shadow 0.3s ease, color 0.3s ease;
    
    &:last-child {
      margin-left: auto;
    }
    
    &:hover {
      box-shadow: inset 0 -50px ${themeColors.blue};
      color: ${themeColors.white};
    }
  }
`;

class Header extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.scrollTo(0, document.body.clientHeight);
    }

    render() {
        return (
            <HeaderContainer>
                <HeaderTop>
                    <h1>Sergey Eremeev</h1>
                    <h2>Your Next Frontend Developer</h2>
                </HeaderTop>
                <img src={headerImage} alt=""/>
                <HeaderBottom>
                    <a href={CV} download="Resume">Resume</a>
                    <button onClick={this.handleClick}>Contact</button>
                </HeaderBottom>
            </HeaderContainer>
        );
    }
}

export default Header;
