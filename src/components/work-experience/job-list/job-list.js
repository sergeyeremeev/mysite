import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import JobPreviewSingle from './job-preview-single';

const JobList = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  align-self: flex-start;
`;

class JobListContainer extends Component {
    renderJobList() {
        return this.props.jobs.map((job, index) => {

            return (
                <JobPreviewSingle
                    active={index === this.props.activeIndex}
                    onJobSelect={this.props.onJobSelect.bind(null, index)}
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

function mapStateToProps({jobs}) {
    return {jobs};
}

export default connect(mapStateToProps)(JobListContainer);
