import React from 'react';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

import themeColors from '../../common/theme-colors';
import handIcon from '../../../assets/images/hand.png';

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
  position: relative;
  overflow: hidden;
  padding-bottom: 22px;
  
  @media (max-width: 959px) {
    width: 100%;
    height: 400px;
  }
  
  @media (max-width: 959px) {
    height: 60vh;
  }
`;

const JobDetails = styled.div`
  position: ${props => props.selected ? 'static' : 'absolute'};
  top: 50%;
  left: 50%;
  transform: ${props => props.selected ? 'none' : 'translate(-50%, -50%)'};
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 40px 20px;
  justify-content: ${props => props.selected ? 'flex-start' : 'center'};
  color: ${themeColors.gray};
  
  h2 {
    text-align: center;
    margin-top: 0;
    color: ${themeColors.darkBlue};
  }
  
  img {
    width: 75px;
    height: auto;
    margin: 40px auto 0;
    animation: ${handWiggle} 2000ms ease-in-out infinite;
  }
  
  p,
  ul {
    font-size: 15px;
    line-height: 1.4;
  }
  
  h4 {
    margin-bottom: 0;
    color: ${themeColors.green};
  }
  
  @media (max-width: 959px) {
    padding: 0 20px 20px 0;
  }
`;

const JobResetter = styled.div`
  position: absolute;
  left: 40px;
  bottom: 0;
  height: 100%;
  width: calc(100% - 40px);
  border-top: 2px solid ${themeColors.darkBlue};
  transform: ${props => props.animating ? 'translateY(0)' : 'translateY(calc(100% - 2px))'};
  background: ${themeColors.beige};
  transition: 0.5s transform ease-in;
  
  @media (max-width: 959px) {
    left: 0;
    width: 100%;
  }
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
