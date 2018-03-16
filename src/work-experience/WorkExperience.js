import React, { Component } from 'react';
import styled from 'styled-components';

import JobList from './job-list';

const WorkExperienceSection = styled.div`
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
`;

class WorkExperience extends Component {
    render() {
        return (
            <WorkExperienceSection>
                <JobList />
            </WorkExperienceSection>
        );
    }
}

export default WorkExperience;
