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
    visible: boolean
};

class WorkExperience extends Component<{}, State> {
    state = {
        activeIndex: null,
        resetJobAnimation: false,
        visible: false,
    };

    componentDidMount() {
        window.addEventListener('scroll', this.animateWorkOnScroll);
    }

    componentDidUpdate() {
        if (this.state.visible === true) {
            window.removeEventListener('scroll', this.animateWorkOnScroll);
        }
    }

    animateWorkOnScroll = animateContentOnScroll.bind(this);

    handleJobSelect = (index: number) => {
        this.setState({ activeIndex: index });

        if (this.state.activeIndex !== index) {
            this.setState({ resetJobAnimation: true });

            setTimeout(() => {
                this.setState({ resetJobAnimation: false });
            }, 600);
        }
    };

    endJobResetAnimation = () => {
        this.setState({ resetJobAnimation: false });
    };

    render() {
        return (
            <SectionWrapper>
                <SectionContainer>
                    <SectionTitle>Work Experience</SectionTitle>
                    <WorkExperienceContainer
                        visible={this.state.visible}
                        innerRef={(el) => { this.element = el; }}
                    >
                        <JobList
                            activeIndex={this.state.activeIndex}
                            onJobSelect={this.handleJobSelect}
                        />
                        <ActiveJob
                            animateResetter={this.state.resetJobAnimation}
                            onJobUpdate={this.endJobResetAnimation}
                        />
                    </WorkExperienceContainer>
                </SectionContainer>
            </SectionWrapper>
        );
    }
}

export default WorkExperience;
