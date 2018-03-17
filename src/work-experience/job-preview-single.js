import React, { Component } from 'react';
import styled from 'styled-components';

const JobPreview = styled.div`
  position: relative;
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: ${props => props.hovered ? '4px 4px 24px rgba(10, 10, 10, 0.45)' : '4px 4px 24px rgba(10, 10, 10, 0.15)'};
  color: #fff;
  text-shadow: rgba(255, 255, 255, 0.4) 0 2px 2px;
  transition: box-shadow 0.3s ease;
  
  &::before {
    content: '';
    padding-top: 66.666666%;
    display: table;
    width: 1px;
    margin-left: -1px;
  }
`;

const JobPreviewImage = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  background-repeat: no-repeat;
  background-position: center 80%;
  background-size: auto 40%;
  background-image: ${props => props.imgUrl ? `url(${props.imgUrl})` : 'none'};
  transform: ${props => props.hovered ? 'scale(1.2)' : 'none'};
  transition: transform 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
  }
`;

const JobPreviewContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px;
  cursor: pointer;
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
  font-size: 24px;
  line-height: 18px;
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
`;

const JobPreviewTitle = styled.h3`
  font-size: 18px;
`;

const JobPreviewCompany = styled.h2`
  font-size: 22px;
`;

const WorkDate = styled.span`
  display: block;
  margin-left: ${props => props.end ? 'auto' : '0'};
`;

const JobPreviewCTA = styled.span`
  display: block;
  position: absolute;
  z-index: 1;
  pointer-events: none;
  top: 66.666666%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #fff;
  padding: 6px 24px;
`;

class JobPreviewSingle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hovered: false,
            selected: false
        };

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter() {
        this.setState({hovered: true});
    }

    onMouseLeave() {
        this.setState({hovered: false});
    }

    render() {
        return (
            <JobPreview
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                hovered={this.state.hovered}
            >
                <JobPreviewImage imgUrl={this.props.job.image} hovered={this.state.hovered} />
                <JobPreviewContent>
                    <JobPreviewContentTop>
                        <JobPreviewTitle>{this.props.job.title}</JobPreviewTitle>
                        @
                        <JobPreviewCompany>{this.props.job.companyName}</JobPreviewCompany>
                    </JobPreviewContentTop>
                    <JobPreviewContentBottom>
                        <WorkDate>Start: {this.props.job.startDate}</WorkDate>
                        <WorkDate end="true">End: {this.props.job.endDate}</WorkDate>
                    </JobPreviewContentBottom>
                </JobPreviewContent>
                <JobPreviewCTA>Learn more</JobPreviewCTA>
            </JobPreview>
        );
    }
}

export default JobPreviewSingle;
