import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import handIcon from '../../../assets/images/hand.png';
import { JobDetailsContainer, JobDetailsCSS, JobResetterCSS } from './style';

const JobDetails = styled.div`
  ${JobDetailsCSS};
`;

const JobResetter = styled.div`
  ${JobResetterCSS};
`;

const ActiveJob = (props) => {
    const activeJob = props.activeJob;
    const animateResetter = props.animateResetter;

    if (!activeJob) {
        return (
            <JobDetailsContainer>
                <JobDetails>
                    <h2>Select a job to see more details</h2>
                    <img src={handIcon} alt=""/>
                </JobDetails>
                <JobResetter animating={animateResetter} />
            </JobDetailsContainer>
        );
    }

    return (
        <JobDetailsContainer>
            <Scrollbars>
                <JobDetails selected>
                    <h2>{activeJob.title}</h2>
                    <p>Company/Organisation: <strong>{activeJob.companyName}</strong></p>
                    <p>Working dates: <strong>{activeJob.startDate}</strong> - <strong>{activeJob.endDate}</strong></p>
                    <h4>Job Summary:</h4>
                    <p>{activeJob.roleSummary}</p>
                    <h4>Duties:</h4>
                    <ul>
                        {activeJob.duties.map((duty, i) =>
                            <li key={i}>{duty}</li>
                        )}
                    </ul>
                </JobDetails>
            </Scrollbars>
            <JobResetter animating={animateResetter} />
        </JobDetailsContainer>
    );
};

function mapStateToProps({activeJob}) {
    return {activeJob};
}

export default connect(mapStateToProps)(ActiveJob);
