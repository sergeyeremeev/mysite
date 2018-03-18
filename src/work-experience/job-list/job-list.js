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
    constructor(props) {
        super(props);

        this.state = {activeIndex: null};
    }

    handleJobSelect(index) {
        this.setState({activeIndex: index});
    }

    renderJobList() {
        return this.props.jobs.map((job, index) => {

            return (
                <JobPreviewSingle
                    active={index === this.state.activeIndex}
                    onJobSelect={this.handleJobSelect.bind(this, index)}
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
