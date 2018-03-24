import React, { Component } from 'react';
import styled from 'styled-components';
import JobPreviewContent from './job-preview-content';
import themeColors from '../../common/theme-colors';

const JobPreview = styled.div`
  position: relative;
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  height: 320px;
  margin-bottom: 20px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: ${props => props.active ? '4px 4px 24px rgba(10, 10, 10, 0.35)' : 
    props.hovered ? '4px 4px 24px rgba(10, 10, 10, 0.25)' : '4px 4px 24px rgba(10, 10, 10, 0.15)'};
  color: #fff;
  transition: box-shadow 0.3s ease;
  
  &:last-child {
   margin-bottom: 0;
  }
  
  @media (max-width: 1023px) {
    height: 280px;
  }
  
  @media (max-width: 959px) {
    width: 50%;
    height: auto;
    margin-right: 20px;
    margin-bottom: 40px;
    flex-shrink: 1;
    
    &:before {
      content: '';
      padding-top: 66.666666%;
      display: table;
      width: 1px;
      margin-left: -1px;
    }
    
    &:last-child {
      margin-right: 0;
      margin-bottom: 40px;
    }
  }
  
  @media (max-width: 620px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
    
    &:before {
      content: none;
    }
    
    &:last-child {
      margin-bottom: 20px;
    }
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
  background-size: 70% auto;
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
    background: ${themeColors.ecru};
    opacity: 0.85;
  }
  
  @media (max-width: 620px) {
    background-size: auto 60%;
    
    &::after {
      opacity: 0.92;
    }
  }
`;

const JobPreviewCTA = styled.span`
  display: block;
  position: absolute;
  z-index: 1;
  pointer-events: none;
  top: 66.666666%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${themeColors.ecru};
  background: ${themeColors.gray};
  border: 2px solid ${themeColors.gray};
  padding: 6px 24px;
  opacity: 0.75;
  
  @media (max-width: 679px) {
    display: none;
  }
`;

class JobPreviewSingle extends Component {
    state = {hovered: false};

    onMouseEnter = () => {
        this.setState({hovered: true});
    };

    onMouseLeave = () => {
        this.setState({hovered: false});
    };

    render() {
        return (
            <JobPreview
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                hovered={this.state.hovered}
                active={this.props.active}
            >
                <JobPreviewImage imgUrl={this.props.job.image} hovered={this.state.hovered} />
                <JobPreviewContent
                    active={this.props.active}
                    job={this.props.job}
                    onJobSelect={this.props.onJobSelect}
                />
                <JobPreviewCTA>Learn more</JobPreviewCTA>
            </JobPreview>
        );
    }
}

export default JobPreviewSingle;
