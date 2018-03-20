import React, { Component } from 'react';
import styled from 'styled-components';
import themeColors from '../common/theme-colors';

const FooterContainer = styled.footer`
  background: ${themeColors.blue};
  padding: 40px 0;
`;

const FooterContainerInner = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  overflow: hidden;
`;

const FooterSection = styled.div`
  width: 50%;
  float: left;
  
  h2 {
    color: ${themeColors.white};
    font-size: 24px;
    font-weight: 300;
    text-transform: uppercase;
    margin: 0 0 36px;
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    color: ${themeColors.white};
  }
  
  li {
    margin-bottom: 14px;
  }
`;

const ContactOptions = styled.div`
  color: ${themeColors.white};
  
  div {
    display: flex;
    align-items: center;
    margin-bottom: 14px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  a {
    text-decoration: underline;
    display: flex;
    align-items: center;
  }
`;

const Icon = styled.i`
  display: block;
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

const EmailIcon = Icon.extend`
  background: url(../images/at-sign.svg);
  background-size: 100% 100%;
`;

const MobileIcon = Icon.extend`
  background: url(../images/mobile-phone-portrait.svg);
  background-size: 100% 100%;
`;

const SkypeIcon = Icon.extend`
  background: url(../images/skype.svg);
  background-size: 100% 100%;
`;

const LinkedInIcon = Icon.extend`
  background: url(../images/logo-linkedin-filled.svg);
  background-size: 100% 100%;
`;

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FooterContainer>
                <FooterContainerInner>
                    <FooterSection>
                        <h2>Let's get in touch!</h2>
                        <ContactOptions>
                            <div>
                                <a href="mailto:13.eremeev.sv@gmail.com"><EmailIcon /> <span>13.eremeev.sv@gmail.com</span></a>
                            </div>
                            <div>
                                <MobileIcon /> <span>+7 904 859 87 42</span>
                            </div>
                            <div>
                                <SkypeIcon /> <span>serge_eremeev</span>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/sergey-eremeev-831a44a6/"><LinkedInIcon /> <span>My LinkedIn profile</span></a>
                            </div>
                        </ContactOptions>
                    </FooterSection>
                    <FooterSection>
                        <h2>Useful Links</h2>
                        <ul>
                            <li><a href="https://github.com/sergeyeremeev">GitHub profile</a></li>
                            <li><a href="http://standardcoder.com/">Blog</a></li>
                        </ul>
                    </FooterSection>
                </FooterContainerInner>
            </FooterContainer>
        );
    }
}

export default Footer;
