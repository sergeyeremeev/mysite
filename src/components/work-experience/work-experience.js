import React, {Component} from 'react';
import styled from 'styled-components';
import JobList from './job-list/job-list';
import ActiveJob from './active-job/job-active';
import SectionTitle from '../common/section-title';
import { SectionWrapper, SectionContainer } from '../common/wrappers';

const WorkExperienceContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  height: 660px;
  padding: 0 10px;
  
  @media (max-width: 1023px) {
    height: 580px;
  }
  
  @media (max-width: 959px) {
    height: auto;
    display: block;
    padding: 0;
  }
`;

class WorkExperience extends Component {
    state = {
        activeIndex: null,
        resetJobAnimation: false
    };

    handleJobSelect = (index) => {
        this.setState({activeIndex: index});

        if (this.state.activeIndex !== index) {
            this.setState({resetJobAnimation: true});

            setTimeout(() => {
                this.setState({resetJobAnimation: false});
            }, 600);
        }
    };

    endJobResetAnimation = () => {
        this.setState({resetJobAnimation: false});
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
