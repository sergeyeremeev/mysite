import React, { Component } from 'react';
import styled from 'styled-components';
import JobList from './job-list/job-list';
import ActiveJob from './active-job/active-job';
import SectionTitle from '../common/section-title';

const WorkExperienceSection = styled.section`
  display: block;
  max-width: 1160px;
  margin: 40px auto 100px;
`;

const WorkExperienceContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  height: 660px;
  padding: 0 20px;
`;

class WorkExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: null,
            resetJobAnimation: false
        };

        this.handleJobSelect = this.handleJobSelect.bind(this);
        this.endJobResetAnimation = this.endJobResetAnimation.bind(this);
    }

    handleJobSelect(index) {
        this.setState({activeIndex: index});

        if (this.state.activeIndex !== index) {
            this.setState({resetJobAnimation: true});

            setTimeout(() => {
                this.setState({resetJobAnimation: false});
            }, 600);
        }
    }

    endJobResetAnimation() {
        this.setState({resetJobAnimation: false});
    }

    render() {
        return (
            <WorkExperienceSection>
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
            </WorkExperienceSection>
        );
    }
}

export default WorkExperience;
