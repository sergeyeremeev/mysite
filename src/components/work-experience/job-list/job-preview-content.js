import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectJob} from '../../../actions';
import themeColors from '../../common/theme-colors';

const JobPreviewText = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px;
  cursor: pointer;
  border: ${props => props.active ? '4px solid #fff' : 'none'};
`;

const JobPreviewContentTop = styled.div`
  position: relative;
  z-index: 1;
  display: inline-flex;
  width: 100%;
  text-align: center;
  flex-direction: column;
  justify-content: flex-start;
  color: ${themeColors.gray};
  text-shadow: rgba(0, 0, 0, 0.5) 0 6px 18px;
  font-size: 22px;
  line-height: 18px;
  
  h3 {
    font-size: 16px;
  }
  
  h2 {
    font-size: 20px;
    line-height: 1.4;
  }
  
  @media (max-width: 1023px) {
    line-height: 12px;
  }
  
  @media (max-width: 959px) {
    line-height: 10px;
    font-size: 18px;
    
    h3 {
      font-size: 14px;
      margin-top: 0;
      line-height: 1.2;
    }
    
    h2 {
      font-size: 16px;
      line-height: 1.2;
    }
  }
  
  @media (max-width: 679px) {
    line-height: 6px;
    font-size: 16px;
    
    h3 {
      font-size: 12px;
    }
    
    h2 {
      font-size: 14px;
    }
  }
`;

const JobPreviewContentBottom = styled.div`
  position: relative;
  z-index: 1;
  display: inline-flex;
  width: 100%;
  text-align: center;
  flex-direction: row;
  margin: auto 0 0;
  font-size: 14px;
  color: ${themeColors.gray};
  
  span {
    display: block;

    &:last-child {
      margin-left: auto;
    }
  }
  
  @media (max-width: 679px) {
    font-size: 12px;
  }
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
