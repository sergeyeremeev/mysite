// @flow
import React, { Component } from 'react';
import { animateContentOnScroll } from '../../helpers/slideContentOnScroll';
import htmlGlasses from '../../assets/images/html_glasses_logo.svg';
import CV from '../../assets/documents/CV.pdf';
import { HeaderContainer, HeaderTop, HeaderBottom } from './style';

class Header extends Component<{}, { scrolledTo: boolean }> {
    state = { scrolledTo: false };

    componentDidMount() {
        animateContentOnScroll.call(this);
    }

    handleClick = () => {
        window.scrollTo(0, (document.body && document.body.clientHeight));
    };

    element: ?HTMLHeadingElement;

    render() {
        return (
            <HeaderContainer innerRef={(el) => { this.element = el; }}>
                <HeaderTop scrolledTo={this.state.scrolledTo} >
                    <h1>Sergey Eremeev</h1>
                    <h2>Your Next Developer</h2>
                </HeaderTop>
                <img src={htmlGlasses} alt="" />
                <HeaderBottom scrolledTo={this.state.scrolledTo} >
                    <a href={CV} download="Resume">Resume</a>
                    <button onClick={this.handleClick}>Contact</button>
                </HeaderBottom>
            </HeaderContainer>
        );
    }
}

export default Header;
