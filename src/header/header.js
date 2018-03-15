import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    height: 80px;
    background-image: linear-gradient(#333, #fff);
    border-bottom: 2px solid #333;
`;

class Header extends Component {
    render() {
        return (
            <HeaderContainer>
            </HeaderContainer>
        );
    }
}

export default Header;
