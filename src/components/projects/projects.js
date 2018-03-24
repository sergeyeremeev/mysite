import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectList from './project-list';
import ProjectActive from './project-active';
import SectionTitle from '../common/section-title';
import { SectionWrapper, SectionContainer } from '../common/wrappers';
import themeColors from "../common/theme-colors";

const ProjectsContainer = styled.div`
  overflow: hidden;
  padding: 0 10px;
`;

const ProjectsViewMore = styled.button`
  display: none;
  
  @media (max-width: 679px) {
    display: inline-block;
    float: right;
    color: ${themeColors.darkBlue};
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 20px;
    text-decoration: underline;
  }
`;

class Portfolio extends Component {
    state = {
        overlayActive: false,
        mobileProjectsVisible: false
    };

    handleProjectSelect = () =>  {
        document.body.style.overflow = 'hidden';
        this.setState({overlayActive: true});
    };

    handleOverlayClose = () =>  {
        document.body.style.overflow = 'auto';
        this.setState({overlayActive: false});
    };

    toggleProjectsVisibility = () => {
        this.setState({mobileProjectsVisible: !this.state.mobileProjectsVisible});
    };

    render() {
        return (
            <SectionWrapper>
                <SectionContainer>
                    <SectionTitle>Portfolio</SectionTitle>
                    <ProjectsContainer>
                        <ProjectList
                            onProjectSelect={this.handleProjectSelect}
                            mobileProjectsVisible={this.state.mobileProjectsVisible}
                        />
                        <ProjectsViewMore
                            onClick={this.toggleProjectsVisibility}
                        >
                            {this.state.mobileProjectsVisible ? 'Less' : 'More'}
                        </ProjectsViewMore>
                        <ProjectActive
                            overlayActive={this.state.overlayActive}
                            onOverlayClose={this.handleOverlayClose}
                        />
                    </ProjectsContainer>
                </SectionContainer>
            </SectionWrapper>
        );
    }
}

export default Portfolio;
