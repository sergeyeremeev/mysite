// @flow
import React, { Component } from 'react';
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

class ProjectActive extends Component<Props> {
    componentDidUpdate() {
        if (this.scrollbars) {
            this.scrollbars.scrollToTop();
        }
    }

    handleOverlayClose = () => {
        this.props.onOverlayClose();
    };

    handleOverlayContentsClick = (e) => {
        e.stopPropagation();
    };

    render() {
        const { activeProject } = this.props;

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
                    <ProjectCloseBtn onClick={this.handleOverlayClose}><img src={iconClose} alt="" /></ProjectCloseBtn>
                    <h2>
                        <a target="_blank" href={activeProject.url}>
                            {activeProject.name} <span>(click to view the live project)</span>
                        </a>
                    </h2>
                    <ScrolledTextContainer>
                        <Scrollbars ref={(el) => { this.scrollbars = el; }}>
                            <ProjectContent project={activeProject} />
                        </Scrollbars>
                    </ScrolledTextContainer>
                </ProjectContainer>
            </ProjectOverlay>
        );
    }

}

function mapStateToProps({ activeProject }) {
    return { activeProject };
}

export default connect(mapStateToProps)(ProjectActive);
