// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import ProjectContent from './project-active-details';
import iconClose from '../../../assets/images/close.svg';
import { OverlayCSS, OverlayContainer, OverlayCloseBtn, ScrolledTextContainer } from '../../common/overlay';

const Overlay = styled.div`
  ${OverlayCSS};
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

    handleOverlayContentsClick = (e: SyntheticEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    render() {
        const { activeProject } = this.props;

        if (!activeProject) {
            return (
                <Overlay>
                    <OverlayContainer>
                        <h2>No project selected</h2>
                    </OverlayContainer>
                </Overlay>
            );
        }

        return (
            <Overlay
                overlayActive={this.props.overlayActive}
                onClick={this.handleOverlayClose}
            >
                <OverlayContainer onClick={this.handleOverlayContentsClick}>
                    <OverlayCloseBtn onClick={this.handleOverlayClose}><img src={iconClose} alt="" /></OverlayCloseBtn>
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
                </OverlayContainer>
            </Overlay>
        );
    }
}

function mapStateToProps({ activeProject }) {
    return { activeProject };
}

export default connect(mapStateToProps)(ProjectActive);
