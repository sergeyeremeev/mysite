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
    render() {
        return (
            <WorkExperienceSection>
                <JobList />
                <ActiveJob />
            </WorkExperienceSection>
        );
    }
}

export default WorkExperience;
