import React from 'react';
import styled from 'styled-components';
import themeColors from '../common/theme-colors';
import { SectionWrapper, SectionContainer } from '../common/wrappers';

import atSign from '../../assets/images/at-sign.svg';
import linkedIn from '../../assets/images/logo-linkedin-filled.svg';
import iconMobile from '../../assets/images/mobile-phone-portrait.svg';
import skype from '../../assets/images/skype.svg';

const FooterSection = styled.div`

  &:last-child {
    margin-left: auto;
  }
  
  h2 {
    color: ${themeColors.dijon};
    font-size: 24px;
    font-weight: 300;
    text-transform: uppercase;
    margin: 0 0 36px;
    text-shadow: rgba(0, 0, 0, 0.5) 0 2px 2px;
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
  
  a:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 679px) {
    
    &:last-child {
      margin-left: 0;
      margin-top: 40px;
    }
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
  background-repeat: no-repeat;
`;

const EmailIcon = Icon.extend`
  background: url(${atSign});
  background-size: 100% 100%;
`;

const MobileIcon = Icon.extend`
  background: url(${iconMobile});
  background-size: 100% 100%;
`;

const SkypeIcon = Icon.extend`
  background: url(${skype});
  background-size: 100% 100%;
`;

const LinkedInIcon = Icon.extend`
  background: url(${linkedIn});
  background-size: 100% 100%;
`;

function Footer() {
    return (
        <SectionWrapper sectionBg={themeColors.darkGray} sectionPadding={'40px 0'}>
            <SectionContainer containerMaxWidth={'960px'} containerDisplay={'flex'}>
                <FooterSection>
                    <h2>Let's get in touch!</h2>
                    <ContactOptions>
                        <div><a href="mailto:13.eremeev.sv@gmail.com"><EmailIcon /> <span>13.eremeev.sv@gmail.com</span></a></div>
                        <div><MobileIcon /> <span>+7 904 859 87 42</span></div>
                        <div><SkypeIcon /> <span>serge_eremeev</span></div>
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
            </SectionContainer>
        </SectionWrapper>
    );
}

export default Footer;
