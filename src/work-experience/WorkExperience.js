import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const WorkExperienceRow = styled.div`
  display: flex;
  flex: 1 0 auto;
`;

const WorkExperienceSingle = styled.div`
  display: flex;
  flex: 1 0 auto;
  width: 50%;
  
  &::before {
    content: '';
    padding-top: 66.666666%;
    display: table;
    width: 1px;
    margin-left: -1px;
  }
`;

const WorkExperienceSingleContainer = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  width: 100%;
`;

const JobImage = styled.div`
  display: block;
`;

class WorkExperience extends Component {
    renderJobList() {
        return this.props.jobs.map(job => {
            return (
                <WorkExperienceSingle key={job.shortName}>
                    {job.title}
                </WorkExperienceSingle>
            )
        });
    }

    render() {
        return (
            <WorkExperienceRow>
                {this.renderJobList()}
            </WorkExperienceRow>
        );
    }
}

function mapStateToProps(state) {
    return {
        jobs: state.jobs
    };
}

export default connect(mapStateToProps)(WorkExperience);
