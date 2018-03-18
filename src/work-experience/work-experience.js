import React, { Component } from 'react';
import styled from 'styled-components';
import JobList from './job-list/job-list';
import ActiveJob from './active-job/active-job';

const WorkExperienceSection = styled.div`
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  max-width: 1160px;
  height: 660px;
  margin: 40px auto 0;
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
            this.setState({resetJobAnimation: true})
        }
    }

    endJobResetAnimation() {
        this.setState({resetJobAnimation: false});
    }

    render() {
        return (
            <WorkExperienceSection>
                <JobList
                    activeIndex={this.state.activeIndex}
                    onJobSelect={this.handleJobSelect}
                />
                <ActiveJob
                    animateResetter={this.state.resetJobAnimation}
                    onJobUpdate={this.endJobResetAnimation}
                />
            </WorkExperienceSection>
        );
    }
}

export default WorkExperience;
