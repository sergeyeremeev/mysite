import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

const handWiggle = keyframes`
    0% {transform: rotate(0deg);}
    15% {transform: rotate(-10deg);}
    30% {transform: rotate(25deg);}
    45% {transform: rotate(-20deg);}
    60% {transform: rotate(15deg);}
    75% {transform: rotate(-5deg);}
    90% {transform: rotate(0deg);}
    100% {transform: rotate(0deg);}
`;

const JobDetailsContainer = styled.div`
  width: 60%;
`;

const JobDetails = styled.div`
  display: flex;
  width: ${props => props.selected ? '100%' : '60%'};
  flex-direction: column;
  padding: 0 40px;
  justify-content: ${props => props.selected ? 'flex-start' : 'center'};
  
  h2 {
    text-align: center;
    margin-top: 0;
  }
  
  img {
    width: 75px;
    height: auto;
    margin: 40px auto 0;
    animation: ${handWiggle} 2000ms ease-in-out infinite;
  }
  
  p,
  ul {
    font-size: 14px;
    line-height: 1.4;
  }
  
  h4 {
    margin-bottom: 0;
  }
`;

class ActiveJob extends Component {
    render() {
        const activeJob = this.props.activeJob;

        if (!activeJob) {
            return (
                <JobDetails>
                    <h2>Select a job on the left for more details</h2>
                    <img src="https://www.projectquote.com/assets/img/hand-small.png" alt=""/>
                </JobDetails>
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
                            {activeJob.duties.map(duty =>
                                <li>{duty}</li>
                            )}
                        </ul>
                    </JobDetails>
                </Scrollbars>
            </JobDetailsContainer>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeJob: state.activeJob
    };
}

export default connect(mapStateToProps)(ActiveJob);
