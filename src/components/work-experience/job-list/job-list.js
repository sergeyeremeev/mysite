import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import JobPreviewSingle from './job-preview-single';

const JobList = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  align-self: flex-start;
  
  @media (max-width: 959px) {
    flex-direction: row;
    align-self: auto;
    width: 100%;
  }
  
  @media (max-width: 620px) {
    flex-direction: column;
  }
`;

const JobListContainer = (props) => {
    const handleJobSelect = (index) => {
        props.onJobSelect(index);
    };

    const renderJobList = () => {
        return props.jobs.map((job, index) => {

            return (
                <JobPreviewSingle
                    active={index === props.activeIndex}
                    onJobSelect={() => handleJobSelect(index)}
                    key={job.shortName}
                    job={job}
                />
            )
        });
    };

    return (
        <JobList>
            {renderJobList()}
        </JobList>
    );
};

function mapStateToProps({jobs}) {
    return {jobs};
}

export default connect(mapStateToProps)(JobListContainer);
