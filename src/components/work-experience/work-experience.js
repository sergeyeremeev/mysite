// @flow
import React, { Component } from 'react';
import JobList from './job-list/job-list';
import ActiveJob from './active-job/job-active';
import SectionTitle from '../common/section-title';
import { SectionWrapper, SectionContainer } from '../common/wrappers';
import WorkExperienceContainer from './style';

type State = {
    resetJobAnimation: boolean,
    activeIndex: ?number
};

class WorkExperience extends Component<{}, State> {
    state = {
        activeIndex: null,
        resetJobAnimation: false,
    };

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
                    <WorkExperienceContainer>
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
