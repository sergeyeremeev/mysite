import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectJob} from "../../../actions";

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
  color: #fff;
  text-shadow: rgba(0, 0, 0, 0.5) 0 2px 2px;
  font-size: 22px;
  line-height: 18px;
  
  h3 {
    font-size: 16px;
  }
  
  h2 {
    font-size: 20px;
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
  
  span {
    display: block;

    &:last-child {
      margin-left: auto;
    }
  }
`;

class JobPreviewContent extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onJobSelect();
        setTimeout(() => {
            this.props.selectJob(this.props.job);
        }, 600);
    }

    render() {
        return (
            <JobPreviewText active={this.props.active} onClick={this.handleClick}>
                <JobPreviewContentTop>
                    <h3>{this.props.job.title}</h3>
                    @
                    <h2>{this.props.job.companyName}</h2>
                </JobPreviewContentTop>
                <JobPreviewContentBottom>
                    <span>Start: {this.props.job.startDate}</span>
                    <span>End: {this.props.job.endDate}</span>
                </JobPreviewContentBottom>
            </JobPreviewText>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectJob: selectJob}, dispatch);
}

export default connect(null, mapDispatchToProps)(JobPreviewContent);
