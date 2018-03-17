import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import JobPreviewSingle from './job-preview-single';

const JobList = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

class JobListContainer extends Component {

    renderJobList() {
        return this.props.jobs.map(job => {

            return (
                <JobPreviewSingle
                    key={job.shortName}
                    job={job}
                />
            )
        });
    }

    render() {
        return (
            <JobList>
                {this.renderJobList()}
            </JobList>
        );
    }
}

function mapStateToProps(state) {
    return {
        jobs: state.jobs
    };
}

export default connect(mapStateToProps)(JobListContainer);
