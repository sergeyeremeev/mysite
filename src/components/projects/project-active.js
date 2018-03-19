import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectContent from './project-active-details';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import themeColors from '../common/theme-colors';

const ProjectOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  z-index: 99;
  display: ${props => props.overlayActive ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
`;

const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width:  768px;
  height: 600px;
  background: ${themeColors.beige};
  border-radius: 8px;
  padding: 40px;
  overflow: hidden;
  
  h2 {
    margin-top: 0;
    font-size: 28px;
    text-decoration: underline;
    color: ${themeColors.plum};
  }
`;

const ProjectCloseBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 25px;
  color: ${themeColors.blue};
  cursor: pointer;
  font-size: 16px;
`;

const ScrolledTextContainer = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`;

class ProjectActive extends Component {
    constructor(props) {
        super(props);

        this.handleOverlayClose = this.handleOverlayClose.bind(this);
        this.handleOverlayContentsClick = this.handleOverlayContentsClick.bind(this);
    }

    handleOverlayClose() {
        this.props.onOverlayClose();
    }

    handleOverlayContentsClick(e) {
        e.stopPropagation();
    }

    render() {
        const activeProject = this.props.activeProject;

        if (!activeProject) {
            return (
                <ProjectOverlay>
                    <ProjectContainer>
                        <h2>No project selected</h2>
                    </ProjectContainer>
                </ProjectOverlay>
            );
        }

        return (
            <ProjectOverlay
                overlayActive={this.props.overlayActive}
                onClick={this.handleOverlayClose}
            >
                <ProjectContainer onClick={this.handleOverlayContentsClick}>
                    <ProjectCloseBtn onClick={this.handleOverlayClose}>Close</ProjectCloseBtn>
                    <h2>{activeProject.name}</h2>
                    <ScrolledTextContainer>
                        <Scrollbars>
                            <ProjectContent project={activeProject} />
                        </Scrollbars>
                    </ScrolledTextContainer>
                </ProjectContainer>
            </ProjectOverlay>
        );
    }
}

function mapStateToProps({activeProject}) {
    return {activeProject};
}

export default connect(mapStateToProps)(ProjectActive);
