// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import JobList from './job-list/job-list';
import ActiveJob from './active-job/job-active';
import SectionTitle from '../common/section-title';
import { SectionWrapper, SectionContainer } from '../common/wrappers';
import { animateContentOnScroll } from '../../helpers/slideContentOnScroll';
import WorkExperienceContainerCSS from './style';

const WorkExperienceContainer = styled.div`
  ${WorkExperienceContainerCSS};
`;


type State = {
    resetJobAnimation: boolean,
    activeIndex: ?number,
    scrolledTo: boolean,
    width: number
};

class WorkExperience extends Component<{}, State> {
    state = {
        activeIndex: null,
        resetJobAnimation: false,
        scrolledTo: false,
        overlayActive: false,
        width: window.innerWidth,
    };

    componentDidMount() {
        window.addEventListener('scroll', this.animateWorkOnScroll);
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentDidUpdate() {
        if (this.state.visible === true) {
            window.removeEventListener('scroll', this.animateWorkOnScroll);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    handleJobSelect = (index: number) => {
        if (this.state.width < 620) {
            document.body.style.overflow = 'hidden';
            this.setState({ overlayActive: true });
        } else {
            this.setState({ activeIndex: index });

            if (this.state.activeIndex !== index) {
                this.setState({ resetJobAnimation: true });

                setTimeout(() => {
                    this.setState({ resetJobAnimation: false });
                }, 600);
            }
        }
    };

    animateWorkOnScroll = animateContentOnScroll.bind(this);

    handleOverlayClose = () => {
        document.body.style.overflow = 'auto';
        this.setState({ overlayActive: false });
    };

    endJobResetAnimation = () => {
        this.setState({ resetJobAnimation: false });
    };

    render() {
        const shouldDisplayMobile = this.state.width < 620;

        return (
            <SectionWrapper>
                <SectionContainer>
                    <SectionTitle>Work Experience</SectionTitle>
                    <WorkExperienceContainer
                        scrolledTo={this.state.scrolledTo}
                        innerRef={(el) => { this.element = el; }}
                    >
                        <JobList
                            activeIndex={this.state.activeIndex}
                            onJobSelect={this.handleJobSelect}
                            isMobile={shouldDisplayMobile}
                        />
                        <ActiveJob
                            animateResetter={this.state.resetJobAnimation}
                            onJobUpdate={this.endJobResetAnimation}
                            overlayActive={this.state.overlayActive}
                            onOverlayClose={this.handleOverlayClose}
                            shouldDisplayMobile={shouldDisplayMobile}
                        />
                    </WorkExperienceContainer>
                </SectionContainer>
            </SectionWrapper>
        );
    }
}

export default WorkExperience;
