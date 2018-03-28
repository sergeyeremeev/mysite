// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import handIcon from '../../../assets/images/hand.png';
import {
    JobDetailsContainer, JobDetailsCSS, JobResetterCSS, JobOverlayCSS, JobOverlayContainer, JobCloseBtn,
    ScrolledTextContainer,
} from './style';
import iconClose from '../../../assets/images/close.svg';

const JobDetails = styled.div`
  ${JobDetailsCSS};
`;

const JobResetter = styled.div`
  ${JobResetterCSS};
`;

const JobOverlay = styled.div`
  ${JobOverlayCSS};
`;

type Props = {
    activeJob: Object,
    animateResetter: boolean,
    shouldDisplayMobile: boolean,
    overlayActive: boolean,
    onOverlayClose: Function,
};

class ActiveJob extends Component<Props> {
    handleOverlayClose = () => {
        this.props.onOverlayClose();
    };

    handleOverlayContentsClick = (e) => {
        e.stopPropagation();
    };

    render() {
        const { activeJob, animateResetter, shouldDisplayMobile } = this.props;

        if (shouldDisplayMobile) {
            if (!activeJob) {
                return (
                    <JobOverlay>
                        <JobOverlayContainer>
                            <JobDetails>
                                <h2>Select a job to see more details</h2>
                                <img src={handIcon} alt="" />
                            </JobDetails>
                        </JobOverlayContainer>
                    </JobOverlay>
                );
            }

            return (
                <JobOverlay
                    overlayActive={this.props.overlayActive}
                    onClick={this.handleOverlayClose}
                >
                    <JobOverlayContainer onClick={this.handleOverlayContentsClick}>
                        <JobCloseBtn onClick={this.handleOverlayClose}><img src={iconClose} alt="" /></JobCloseBtn>
                        <h2>{activeJob.title}</h2>
                        <ScrolledTextContainer>
                            <Scrollbars>
                                <JobDetails selected>
                                    <p>Company/Organisation: <strong>{activeJob.companyName}</strong></p>
                                    <p>
                                        Working dates:
                                        <strong>{activeJob.startDate}</strong> - <strong>{activeJob.endDate}</strong>
                                    </p>
                                    <h4>Job Summary:</h4>
                                    <p>{activeJob.roleSummary}</p>
                                    <h4>Duties:</h4>
                                    <ul>
                                        {activeJob.duties.map((duty, i) =>
                                            <li key={i}>{duty}</li>)}
                                    </ul>
                                </JobDetails>
                            </Scrollbars>
                        </ScrolledTextContainer>
                    </JobOverlayContainer>
                </JobOverlay>
            );
        }

        if (!activeJob) {
            return (
                <JobDetailsContainer>
                    <JobDetails>
                        <h2>Select a job to see more details</h2>
                        <img src={handIcon} alt="" />
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
                        <p>
                            Working dates:
                            <strong>{activeJob.startDate}</strong> - <strong>{activeJob.endDate}</strong>
                        </p>
                        <h4>Job Summary:</h4>
                        <p>{activeJob.roleSummary}</p>
                        <h4>Duties:</h4>
                        <ul>
                            {activeJob.duties.map((duty, i) =>
                                <li key={i}>{duty}</li>)}
                        </ul>
                    </JobDetails>
                </Scrollbars>
                <JobResetter animating={animateResetter} />
            </JobDetailsContainer>
        );
    }
}

function mapStateToProps({ activeJob }) {
    return { activeJob };
}

export default connect(mapStateToProps)(ActiveJob);
