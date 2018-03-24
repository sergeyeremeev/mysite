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
  width: calc(100vw - 40px);
  max-width: 768px;
  height: calc(100vh - 40px);
  max-height: 600px;
  background: ${themeColors.beige};
  border-radius: 8px;
  padding: 40px;
  overflow: hidden;
  
  h2 {
    margin-top: 0;
    font-size: 28px;
    color: ${themeColors.darkBlue};
    
    &:hover {
      color: ${themeColors.gray};
    }
    
    span {
      font-size: 15px;
      font-weight: 300;
      
      @media (max-width: 767px) {
        display: block;
      }
    }
  }
  
  @media (max-width: 679px) {
    padding: 20px;
  }
`;

const ProjectCloseBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 25px;
  color: ${themeColors.darkGray};
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  
  @media (max-width: 679px) {
    top: 10px;
    right: 10px;
  }
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
                <h2><a target="_blank" href={activeProject.url}>{activeProject.name} <span>(click to view the live project)</span></a></h2>
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
