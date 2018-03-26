import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectJob} from '../../../actions';
import { JobPreviewTextCSS, JobPreviewContentTop, JobPreviewContentBottom } from './style';

const JobPreviewText = styled.div`
  ${JobPreviewTextCSS};
`;

const JobPreviewContent = (props) => {
    const job = props.job;

    const handleClick = () => {
        props.onJobSelect();
        setTimeout(() => {
            props.selectJob(job);
        }, 600);
    };

    return (
        <JobPreviewText active={props.active} onClick={handleClick}>
            <JobPreviewContentTop>
                <h3>{job.title}</h3>
                @
                <h2>{job.companyName}</h2>
            </JobPreviewContentTop>
            <JobPreviewContentBottom>
                <span>Start: {job.startDate}</span>
                <span>End: {job.endDate}</span>
            </JobPreviewContentBottom>
        </JobPreviewText>
    );
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectJob}, dispatch);
}

export default connect(null, mapDispatchToProps)(JobPreviewContent);
