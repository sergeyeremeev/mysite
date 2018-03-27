// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import ProjectContent from './project-active-details';
import iconClose from '../../../assets/images/close.svg';
import { ProjectOverlayCSS, ProjectContainer, ScrolledTextContainer, ProjectCloseBtn } from './style';

const ProjectOverlay = styled.div`
  ${ProjectOverlayCSS};
`;

type Props = {
    activeProject: ?Object,
    onOverlayClose: Function,
    overlayActive: boolean
};

const ProjectActive = (props: Props) => {
    const { activeProject } = props;

    const handleOverlayClose = () => {
        props.onOverlayClose();
    };

    const handleOverlayContentsClick = (e) => {
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
                <ProjectCloseBtn onClick={handleOverlayClose}><img src={iconClose} alt="" /></ProjectCloseBtn>
                <h2>
                    <a target="_blank" href={activeProject.url}>
                        {activeProject.name} <span>(click to view the live project)</span>
                    </a>
                </h2>
                <ScrolledTextContainer>
                    <Scrollbars>
                        <ProjectContent project={activeProject} />
                    </Scrollbars>
                </ScrolledTextContainer>
            </ProjectContainer>
        </ProjectOverlay>
    );
};

function mapStateToProps({ activeProject }) {
    return { activeProject };
}

export default connect(mapStateToProps)(ProjectActive);
