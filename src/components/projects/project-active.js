import React from 'react';
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
  display: flex;
  visibility: ${props => props.overlayActive ? 'visible' : 'hidden'};
  opacity: ${props => props.overlayActive ? '1' : '0'};
  transition: ${props => props.overlayActive ? 
    'visibility 0s, opacity 0.3s linear' : 
    'visibility 0s 0.3s, opacity 0.3s linear'};
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
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
`;

const ScrolledTextContainer = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`;

const ProjectActive = (props) => {
    const activeProject = props.activeProject;

    const handleOverlayClose = () =>  {
        props.onOverlayClose();
    };

    const handleOverlayContentsClick = (e) =>  {
        e.stopPropagation();
    };

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
            overlayActive={props.overlayActive}
            onClick={handleOverlayClose}
        >
            <ProjectContainer onClick={handleOverlayContentsClick}>
                <ProjectCloseBtn onClick={handleOverlayClose}>Close</ProjectCloseBtn>
                <h2>{activeProject.name}</h2>
                <ScrolledTextContainer>
                    <Scrollbars>
                        <ProjectContent project={activeProject} />
                    </Scrollbars>
                </ScrolledTextContainer>
            </ProjectContainer>
        </ProjectOverlay>
    );
};

function mapStateToProps({activeProject}) {
    return {activeProject};
}

export default connect(mapStateToProps)(ProjectActive);
