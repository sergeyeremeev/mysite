import React from 'react';
import themeColors from '../../helpers/theme-colors';
import { SectionWrapper, SectionContainer } from '../common/wrappers';
import { FooterSection, ContactOptions, EmailIcon, LinkedInIcon, MobileIcon, SkypeIcon } from './style';

function Footer() {
    return (
        // TODO: change SectionWrapper to footer tag, increase top padding (especially on mobile)
        <SectionWrapper sectionBg={themeColors.darkGray} sectionPadding="40px 0">
            <SectionContainer containerMaxWidth="960px" containerDisplay="flex">
                <FooterSection>
                    <h2>Let&#39;s get in touch!</h2>
                    <ContactOptions>
                        <div>
                            <a href="mailto:13.eremeev.sv@gmail.com">
                                <EmailIcon />&nbsp;<span>13.eremeev.sv@gmail.com</span>
                            </a>
                        </div>
                        <div><MobileIcon />&nbsp;<span>+7 904 859 87 42</span></div>
                        <div><SkypeIcon />&nbsp;<span>serge_eremeev</span></div>
                        <div>
                            <a href="https://www.linkedin.com/in/sergey-eremeev-831a44a6/">
                                <LinkedInIcon />&nbsp;<span>My LinkedIn profile</span>
                            </a>
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
